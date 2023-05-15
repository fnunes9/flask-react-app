from flask import Flask, send_from_directory
from flask_restful import Api
from flask_cors import CORS # comentar para deploy
from api.comment_handler import Comment

app = Flask(__name__, static_url_path='', static_folder='frontend/public')
CORS(app) # comentar para deploy
api = Api(app)

@app.route("/")
def home():
   return send_from_directory(app.static_folder,'index.html')

api.add_resource(Comment, '/api/comments')

if __name__ == '__main__':
   app.run(debug=True, host='0.0.0.0', port=5000)