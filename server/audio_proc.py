import sys, os
sys.path.append(os.path.join(sys.path[0],'melody'))
print(os.path.join(sys.path[0],'melody'))
from rhythmID import rhythm_output
from melodia import melody
from flask import Flask, request


app = Flask(__name__)


@app.route('/rhythm', methods=['POST'])
def spectro_output():
   return {"link": request.get_json(),"beats":rhythm_output(request.get_json())}


@app.route('/melody', methods=['POST'])
def get_melody():
   return {"link": request.get_json(),"melody":melody(request.get_json())}

if __name__ == "__main__":
   app.run(port = 6030, debug=True)

