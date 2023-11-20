from flask import Flask
from api.resources import YourResource  # Import your API resources
from flask_restful import Api
from flask_restful import Resource
from flask import request

app = Flask(__name__)

api = Api(app)

# Set up API routes
app.add_url_rule('/api/your_endpoint', view_func=YourResource.as_view('your_resource'))
@app.route('/')
def hello_world():
    return 'Hello, World!'


class FileUpload(Resource):
    def post(self):
        uploaded_file = request.files['file']
        # Add logic to save and process the file
        return {'message': 'File uploaded successfully'}, 201
    
api.add_resource(FileUpload, '/upload')

if __name__ == '__main__':
    app.run(debug=True)

 

