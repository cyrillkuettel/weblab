from flask import Flask
from flask import jsonify, request, abort
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from flask_httpauth import HTTPBasicAuth
from werkzeug.security import generate_password_hash, check_password_hash


user = "test"
pw = "test"
users = {user: generate_password_hash(pw)}

app = Flask(__name__)
auth = HTTPBasicAuth()
# Need cors because the python backend uses a different URI than the Angular
# frontend.
CORS(app, origins=["http://localhost:4200"])

app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///:memory:"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

db = SQLAlchemy(app)


class Note(db.Model):
    __tablename__ = "notes"

    title = db.Column(db.String(100), nullable=False, primary_key=True)
    content = db.Column(db.String(1000), nullable=False)
    group = db.Column(db.String(100), nullable=True)

    def to_json(self):
        return {
            "title": self.title,
            "content": self.content,
            "group": self.group if self.group else "",
        }


with app.app_context():
    db.create_all()
    note = Note(title="test", content="testcontent here", group="testGroup")
    db.session.add(note)
    db.session.commit()


@auth.verify_password
def verify_password(username, password):
    if username in users:
        return check_password_hash(users.get(username), password)
    return False


@app.route("/notes", methods=["GET"])
@auth.login_required
def get_notes():
    print("get_notes called")
    notes = Note.query.all()
    if notes:
        return jsonify([n.to_json() for n in notes])
    else:
        return {}


@app.route("/note/<string:title>", methods=["GET"])
@auth.login_required
def get_note(title):
    print("get_note called")
    note = Note.query.get(title)
    if note is None:
        abort(404)
    return jsonify(note.to_json())


@app.route("/note", methods=["POST"])
@auth.login_required
def create_note():
    print("create_note called")
    if not request.json:
        abort(400)

    group = request.json.get("group")  # optional
    note = Note(
        title=request.json.get("title"),
        content=request.json.get("content"),
        group=group,
    )
    db.session.add(note)
    db.session.commit()
    return jsonify(note.to_json()), 201


@app.route("/note/<string:title>", methods=["PUT"])
@auth.login_required
def update_note(title):
    print("update note called")
    if not request.json:
        print("Not request.json")
        abort(400)
    _note = Note.query.get(title)
    if _note is None:
        print("Failed to query Note by title")
        abort(404)
    _note.title = request.json.get("title", _note.title)
    print(f"update: parsed new title {_note.title}")

    # todo: catch Exception if title exists

    _note.content = request.json.get("content", _note.content)

    # _note.group = request.json.get("group", _note.group)

    db.session.add(_note)
    db.session.commit()
    return jsonify(_note.to_json())
