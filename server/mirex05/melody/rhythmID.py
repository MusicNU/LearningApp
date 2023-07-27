# import modules
import librosa 
import IPython.display as ipd 
import matplotlib.pyplot as plt
import numpy as np 
import io
import json

class NumpyArrayEncoder(json.JSONEncoder):
    def default(self, obj):
        if isinstance(obj, np.ndarray):
            return obj.tolist()
        return json.JSONEncoder.default(self, obj)

def rhythm_output():
    y, sr = librosa.load(librosa.example('brahms'))
    tempo, beats = librosa.beat.beat_track(y=y, sr=sr, units= 'time')
    #y_beat_times = librosa.frames_to_time(beats, sr=sr)
    ipd.Audio(data= y, rate=sr)
    #convert to JSON object
    #beats_json = beats.tolist() # nested lists with same data, indices
    numpyData = {"array": beats}
    encodedNumpyData = json.dumps(numpyData, cls=NumpyArrayEncoder)  # use dump() to write array into file
    print("Printing JSON serialized NumPy array")
    print(encodedNumpyData)
    return encodedNumpyData

rhythm_output()
