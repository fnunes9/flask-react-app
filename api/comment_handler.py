from flask import jsonify
from flask_restful import Resource, reqparse

comments = [
   {
      'id': 1,
      'text': 'Primeiro comentario'
   }
]

class Comment(Resource):
    def get(self):
        response = jsonify(comments)
        return response
        
    def post(self):
        # abre os dados do post
        parser = reqparse.RequestParser()

        # registra e extrai o parametro 'text' da requisicao
        parser.add_argument('text', type=str, required=True)
        args = parser.parse_args(strict=True)
        
        comment = {'id': len(comments) + 1, 'text': args['text']}
        comments.append(comment)
        return comment