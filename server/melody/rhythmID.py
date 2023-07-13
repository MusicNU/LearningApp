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
    onset_times = librosa.onset.onset_detect(y=y, sr=sr, units = 'time')  #time series of onsets
    #convert to JSON object
    #beats_json = beats.tolist() # nested lists with same data, indices
    numpyData = {"beats": beats,
                 "onsets": onset_times}
    encodedNumpyData = json.dumps(numpyData, cls=NumpyArrayEncoder)  # use dump() to write array into file
    print("Printing JSON serialized NumPy array")
    print(encodedNumpyData)
    print("printing the onset times:", onset_times)
    return encodedNumpyData

rhythm_output()
