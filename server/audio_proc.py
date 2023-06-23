import sys, os
sys.path.append(os.path.join(sys.path[0],'melody'))
print(os.path.join(sys.path[0],'melody'))
from rhythmID import find_tempo


from flask import Flask

app = Flask(__name__)

@app.route("/tempo")
def audio_output():
    tempo = find_tempo()
    return {"tempo":tempo}

if __name__ == "__main__":
    app.run(port = 6030, debug=True)


@app.route("/melody")
def get_melody():
    melody = "melody"
    return {"melody": melody}