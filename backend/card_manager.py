#a file containing the methods needed to maintain the cards in the database
class CardManager:
    def __init__(self, db):
        self.db = db

    def create(self, title, answer, user_id: int, did: int): # TODO: Check user perms to add to given deck
        #check we are the right user
        #create new card
        self.db.execute("INSERT INTO card (title, answer, deck_id) VALUES (%s, %s, %s);", title, answer, did)
        return True

    def get(self, cid: int):
        result = self.db.fetch("SELECT * FROM card WHERE id = %s;", cid)
        return result[0] if len(result) > 0 else []

    def edit(self, data, user, cid: int): # TODO: Check user perms here
        #check we are the right user
        #parse data
        #edit card
        title = data.get("title")
        answer = data.get("answer")
        self.db.execute("UPDATE card SET title = %s, answer = %s WHERE id = %s;", title, answer, cid)
        return True#/False

    def delete(self, user, cid: int):
        #check we are the right user
        #parse data
        #delete card
        self.db.execute("DELETE FROM card WHERE id = %s;", cid)
        return
