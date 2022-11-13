from flask import Flask
from flask_cors import CORS

from db import DatabaseHandler
from deck_manager import DeckManager
from card_manager import CardManager
import deck

def create_app():
    app = Flask(__name__)
    CORS(app)
    app.register_blueprint(deck.bp, url_prefix="/deck")

    db = #removed due to api key

    app.config["card_manager"] = CardManager(db)
    app.config["deck_manager"] = DeckManager(db, app.config["card_manager"])

    return app


app = create_app()
if __name__ == "__main__":
    app.run(debug=True)
