from flask import Flask
from flask import jsonify, request, abort
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///:memory:"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

db = SQLAlchemy(app)
class Note(db.Model):
    __tablename__ = "notes"

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    content = db.Column(db.String(1000), nullable=False)
    group = db.Column(db.String(100), nullable=True)

    def to_json(self):
        return {
            "id": self.id,
            "title": self.title,
            "content": self.content,
            "group": self.group if self.group else "",
        }


with app.app_context():
    db.create_all()


@app.route("/note/list", methods=["GET"])
def get_notes():
    notes = Note.query.all()
    if notes:
        return jsonify([note.to_json() for note in notes])
    else:
        return {}


@app.route("/note/<int:id>", methods=["GET"])
def get_note(id):
    note = db.query(Note).get(id)
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


@app.route("/note/<int:id>", methods=["PUT"])
def update_note(id):
    if not request.json:
        abort(400)
    note = db.query(Note).get(id)
    if note is None:
        abort(404)
    note.title = request.json.get("title", note.title)
    note.content = request.json.get("content", note.content)
    note.group = request.json.get("group", note.group)

    db.session.commit()
    return jsonify(note.to_json())