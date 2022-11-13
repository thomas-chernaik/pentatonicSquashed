import psycopg

class DatabaseHandler:
    def __init__(self, DB_URL):
        self.conn = psycopg.connect(DB_URL, sslmode="require")

    def _convert_id_to_string(self, data):
        """
        Takes in dict, setting any attributes ending in 'id' to strings.
        """
        print(data)
        for key in data:
            if key.lower().endswith("id"):
                data[key] = str(data[key])
        return data

    def fetch(self, sql, *params):
        """Database method which executes a command, `sql`, and parameters, `params`, and returns the output.
        Returns the sql output or [] if the command returns nothing."""
        to_return = None
        with self.conn.cursor(row_factory=psycopg.rows.dict_row) as cur:
            #print(sql, params)
            cur.execute(sql, params)
            to_return = cur.fetchall()
        return [self._convert_id_to_string(x) for x in to_return] #(to_return if to_return else [])

    #def fetchrow(self, sql, *params):
    #    """Database method which executes `sql` with given `params` and returns the first element of the data returned."""
    #    to_return = None
    #    with self.conn.cursor(row_factory=psycopg.rows.dict_row) as cur:
    #        cur.execute(sql, params)
    #        to_return = cur.fetchone()
    #    return to_return #(to_return if to_return else [])

    def execute(self, sql, *params):
        """Database method which executes an sql command, `sql` with given parameters, `params`.
        `params` are given as multiple arguments."""
        with self.conn.cursor(row_factory=psycopg.rows.dict_row) as cur:
            cur.execute(sql, params)
            self.conn.commit()
