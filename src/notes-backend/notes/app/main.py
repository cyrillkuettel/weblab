from flask import Flask
from flask import jsonify, request, abort
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

app = Flask(__name__)
# setup because the python backend uses a different URI than the Angular frontend.
# 4200 is the default Angular port
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


@app.route("/notes", methods=["GET"])
def get_notes():
    notes = Note.query.all()
    print(list(notes))
    if notes:
        return jsonify([n.to_json() for n in notes])
    else:
        return {}


@app.route("/note/<string:title>", methods=["GET"])
def get_note(title):
    note = Note.query.get(title)
    if note is None:
        abort(404)
    return jsonify(note.to_json())


@app.route("/note", methods=["POST"])
def create_note():
    if not request.json:
        abort(400)
    note = Note(
        title=request.json.get("title"),
        content=request.json.get("author"),
        group=request.json.get("price"),
    )
    db.session.add(note)
    db.session.commit()
    return jsonify(note.to_json()), 201


@app.route("/note/<string:title>", methods=["PUT"])
def update_note(title):
    if not request.json:
        print("Not request.json")
        abort(400)
    _note = db.query(Note).get(title)
    if _note is None:
        print("Failed to query Note by title")
        abort(404)

    _note.title = request.json.get("title", _note.title)
    # todo: catch Exception if title exists

    _note.content = request.json.get("content", _note.content)

    # _note.group = request.json.get("group", _note.group)

    db.session.add(_note)
    db.session.commit()
    return jsonify(_note.to_json())
