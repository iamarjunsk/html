from flask import Flask, Request,request
import requests

app = Flask(__name__)

@app.route('/post', methods=['GET', 'POST'])
def method_post():
    return request.form

@app.route('/get', methods=['GET','POST'])
def method_get():
    return request.args
@app.route('/add', methods=['GET', 'POST'])
def method_name():
    q=request.form['q']
    a="You entered "+q
    return a
if __name__ == "__main__":
    app.run(debug=True)