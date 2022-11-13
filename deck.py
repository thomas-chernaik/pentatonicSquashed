from flask import Blueprint, request, current_app, jsonify
from functools import wraps
from deck_manager import DeckManager
from card_manager import CardManager
import json
from flask_cors import cross_origin
from services import Services

class HTTPCode:
    OK = 200
    CREATED = 201
    BAD_REQUEST = 400
    UNAUTHORISED = 401
    SERVER_ERROR = 500

bp = Blueprint("deck", __name__)
USER_ID = 813464105246261250

# put this sippet ahead of all your bluprints
# blueprint can also be app~~
@bp.after_request 
def after_request(response):
    header = response.headers
    header['Access-Control-Allow-Origin'] = '*'
    # Other headers can be added here if needed
    return response

def check_json():
    # a decorator that continues with the wrapped function
    # if the body data is json
    def check(func):
        @wraps(func)
        def decoratedFunction(*args, **kwargs):
            content_type = request.headers.get('Content-Type')
            if (content_type == 'application/json'):
                return func(*args, **kwargs)
            else:
                return 'Content-Type not supported!', HTTPCode.SERVER_ERROR
        return decoratedFunction
    return check

# ----- GET DECK -----
@bp.route("/", methods=["GET"])
@cross_origin()
def get_all_decks():
    result = current_app.config["deck_manager"].get(USER_ID)
    return jsonify(result), HTTPCode.OK

@bp.route("/<int:did>", methods=["GET"])
@cross_origin()
def get_deck(did):
    #a method to get the data about a deck
    #e.g. the deck name
    result = current_app.config["deck_manager"].get(USER_ID, did=did)
    return jsonify(result), HTTPCode.OK

# ----- DELETE DECK -----
@bp.route("/<int:did>", methods=["DELETE"])
@cross_origin()
def delete_deck(did):
    # method to delete a specific deck
    current_app.config["deck_manager"].delete(USER_ID, did)
    return "", HTTPCode.OK

# ----- POST DECK -----
@bp.route("/", methods=["POST"])
@cross_origin()
@check_json()
def create_deck():
    # method to create a new deck
    if not request.json.get("name"):
        return "", HTTPCode.BAD_REQUEST

    deck_manager = current_app.config["deck_manager"]
    result = deck_manager.create(request.json.get("name"), USER_ID)
    if not result:
        return "", HTTPCode.SERVER_ERROR
    return "", HTTPCode.CREATED

# ----- PUT DECK -----
@bp.route("/<int:did>", methods=["PUT"])
@cross_origin()
@check_json()
def update_deck(did):
    #a method edit deck
    current_app.config["deck_manager"].edit(request.json, USER_ID, did)
    return "", HTTPCode.OK


# ----- GET CARD -----
@bp.route("/<int:did>/card", methods=["GET"])
@cross_origin()
def get_cards_in_deck(did):
    #a method to get all the cards in a deck
    return jsonify(current_app.config["deck_manager"].get_cards(USER_ID, did)), HTTPCode.OK # TODO: NEED TO ERROR CHECK ALL OF THESE

@bp.route("/<int:did>/card/<int:cid>", methods=["GET"])
@cross_origin()
def get_card(did, cid):
    #a method to get a card
    return jsonify(current_app.config["card_manager"].get(cid)), HTTPCode.OK


# ----- POST CARD -----
@bp.route("/<int:did>/card", methods=["POST"])
@cross_origin()
@check_json()
def create_cards_in_bulk(did):
    # method to create several flashcards at once
    current_app.config["deck_manager"].create_cards(request.json, USER_ID, did)
    return "Success", HTTPCode.OK


# ----- DELETE CARD -----
@bp.route("/<int:did>/card/<int:cid>", methods=["DELETE"])
@cross_origin()
def delete_card(did, cid):
    #a method to delete a specific card
    current_app.config["card_manager"].delete(USER_ID, cid)
    return "", HTTPCode.OK


# ----- PUT CARD -----
@bp.route("/<int:did>/card/<int:cid>", methods=["PUT"])
@cross_origin()
@check_json()
def edit_card(did, cid):
    # method to edit the data in a specific card
    current_app.config["card_manager"].edit(request.json, USER_ID, cid)
    return "", HTTPCode.OK


# ----- PARSE CARD -----
@bp.route("/<int:did>/parse", methods=["POST"])
@cross_origin()
def parse_notes(did):
    #a method to parse notes into flashcards
    #and add them to a deck(did)
    #check if we are in text form or pdf form
    text = ""
    if request.headers.get("type") == "pdf":
        #TODO: check that we don't need to cast f
        f = request.files['file']
        text = Services.pdf_to_text(f)
    else:
        #TODO: need to cast to json if request.json is a string
        responsejson = request.json
        text = request.json.get("text")
    #parse our text into flashcards
    flashcards = Services.text_to_flashcards(text)
    numFlashcards = 0
    #go through each flashcard and add it if it is not None
    for flashcard in flashcards:
        if flashcard != None:
            if len(flashcard[0]) > 0 and len(flashcard[1]) > 0:
                current_app.config["card_manager"].create(flashcard[0], flashcard[1], USER_ID, did)
                numFlashcards += 1



    if numFlashcards == 0:
        return "Fail", 500
    else:
        return str(numFlashcards), 201
