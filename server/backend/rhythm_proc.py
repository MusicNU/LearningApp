# import modules
import librosa
import IPython.display as ipd
import matplotlib.pyplot as plt
import numpy as np
import io
import json
from pytube import YouTube


class NumpyArrayEncoder(json.JSONEncoder):
   def default(self, obj):
       if isinstance(obj, np.ndarray):
           return obj.tolist()
       return json.JSONEncoder.default(self, obj)


def rhythm_output(file_name):
   y, sr = librosa.load('mp3_files/{}'.format(file_name + '.mp3'))
   tempo, beats = librosa.beat.beat_track(y=y, sr=sr, units= 'time')
   onset_times = librosa.onset.onset_detect(y=y, sr=sr, units = 'time')  #time series of onsets
   #convert to JSON object
   #beats_json = beats.tolist() # nested lists with same data, indices
   numpyData = {"beats": beats,
                "onsets": onset_times}
   print(numpyData)
   encodedNumpyData = json.dumps(numpyData, cls=NumpyArrayEncoder)  # use dump() to write array into file
   return encodedNumpyData

rhythm_output('Ebow Bb')