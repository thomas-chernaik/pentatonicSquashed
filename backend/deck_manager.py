# a file containing the functions we need to manage the deck in the database
class DeckManager:
    def __init__(self, db, card_manager):
        self.db = db
        self.card_manager = card_manager

    def create(self, name: str, user_id: int):
        self.db.execute("INSERT INTO deck (user_id, name) VALUES (%s, %s);", user_id, name)
        return True#/False

    def delete(self, user_id: int, did: int):
        self.db.execute("DELETE FROM deck WHERE user_id = %s AND id = %s;", user_id, did)
        return True#/False

    def get(self, user_id: int, did: int=None):
        # check we are the right user
        # parse data
        # get the deck data
        result = None
        if did:
            result = self.db.fetch("SELECT * FROM deck WHERE id = (%s);", did)
        else:
            result = self.db.fetch("SELECT * FROM deck WHERE user_id = (%s);", user_id)

        print(result)
        return result

    def edit(self, data, user_id: int, did: int):
        # ********optional
        # check we are the right user
        # parse data
        # edit the deck data
        self.db.execute("UPDATE deck SET name = %s WHERE user_id = %s AND did = %s;", data.get("name"), user_id, did)
        return True#/False

    def create_cards(self, data, user_id: int, did: int):
        for item in data:
            title = item.get("title")
            answer = item.get("answer")
            self.card_manager.create(title, answer, user_id, did)
        return True#/False

    def get_cards(self, user_id, did):
        # check we are the right user
        # parse data
        # get the cards for the correct deck
        return self.db.fetch("SELECT * FROM card WHERE deck_id = %s;", did) # TODO: Add user perms/verifications

