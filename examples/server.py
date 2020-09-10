from flask import Flask, Request,request
import requests

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def method_name():
    if request.method=="POST":
        name=request.form.get('fname')
        print(request.form)
        return request.form
    else:
        name=request.args.get('fname')
        return "Hai "+name
if __name__ == "__main__":
    app.run(debug=True)