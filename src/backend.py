from flask import Flask, request
from flask_cors import CORS, cross_origin
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///database.db"
db = SQLAlchemy(app)

class Profile(db.Model):
    first_name = db.Column("First Name", db.String(255))
    last_name  = db.Column("Last Name", db.String(255))
    nickname   = db.Column("Nickname", db.String(255), primary_key = True)
    email      = db.Column("Email", db.String(255),  unique = True)
    password   = db.Column("Password", db.String(255))

    def __repr__(self):
        return(self.first_name + "\n"
             + self.last_name + "\n"
             + self.nickname + "\n"
             + self.email + "\n"
             + self.password)


@app.route('/post/signup', methods = ["POST"])
@cross_origin()
def getDataSignUp():
    print("smt")


if __name__ == "__main__":
    app.run()