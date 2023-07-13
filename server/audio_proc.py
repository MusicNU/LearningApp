import sys, os
sys.path.append(os.path.join(sys.path[0],'melody'))
print(os.path.join(sys.path[0],'melody'))
from rhythmID import rhythm_output


from flask import Flask

app = Flask(__name__)

@app.route('/rhythm', methods=['GET'])
def spectro_output():
    return {"beats":rhythm_output()}


@app.route("/melody")
def get_melody():
    melody = "melody"
    return {"melody": melody}

if __name__ == "__main__":
    app.run(port = 6030, debug=True)