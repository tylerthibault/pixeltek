from flask_app import app
from flask import render_template, redirect, session, request


@app.route('/')
def index():
    return render_template('/index.html')

@app.route("/msg/sent")
def msg_sent():
    return render_template("/pages/msg_sent.html")

@app.route("/services/<service>")
def services(service):
    return render_template("/pages/services.html")