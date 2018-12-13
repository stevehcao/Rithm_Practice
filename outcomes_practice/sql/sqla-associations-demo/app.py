from flask import Flask, render_template
from flask_debugtoolbar import DebugToolbarExtension
from models import Employee, Department, db, connect_db

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///employees'
app.config['SQLALCHEMY_ECHO'] = True
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SECRET_KEY'] = "abc123"

connect_db(app)

toolbar = DebugToolbarExtension(app)


@app.route("/phones")
def phone_list():
    """Get list of users & dept phones.

    This version will be a 'n+1 query' --- it will query once for all
    users, and then for each department.
    """

    emps = Employee.query.all()
    return render_template("phones.html", emps=emps)


@app.route("/phones-eager")
def phone_list_eager():
    """Get list of users & dept phones.

    This version will be a single query because of the eager
    joined load.
    """

    emps = Employee.query.options(db.joinedload('dept')).all()
    return render_template("phones.html", emps=emps)
