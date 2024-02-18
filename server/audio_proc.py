import sys, os
sys.path.append(os.path.join(sys.path[0],'melody'))
print(os.path.join(sys.path[0],'melody'))
from rhythmID import rhythm_output
from melodia import melody
from link_to_mp3 import link_to_mp3
from flask import Flask, request
from flask_cors import CORS  # Import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS on the Flask app

@app.route('/rhythm', methods=['POST'])
def spectro_output():
   # return {"result": "we can run"}
   return {"link": request.get_json(),"beats":rhythm_output(link_to_mp3(request.get_json()["link"]))}


@app.route('/melody', methods=['POST'])
def get_melody():
   # return {"result": "we can run"}
   return {"link": request.get_json(),"melody":melody(link_to_mp3(request.get_json()["link"]))}

if __name__ == "__main__":
   app.run(port = 6030, debug=True)

