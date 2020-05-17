from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "mysql://swaprojektkv9593:x8049s^9&ErUC2j2)9v.@sql4.webzdarma.cz:3306"
db = SQLAlchemy(app)

class Profiles(db.Model):
    __tablename__ = "Profiles"
    first_name = db.Column("First Name", db.Unicode, primary_key = False)
    last_name = db.Column("Last Name", db.Unicode, primary_key = False)
    nickname = db.Column("Nickname", db.Unicode, primary_key = False)
    email = db.Column("Email", db.Unicode, primary_key = True)
    password = db.Column("Password", db.Unicode, primary_key = False)