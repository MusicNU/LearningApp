from __future__ import print_function

import vamp
import librosa
import matplotlib
import matplotlib.pyplot as plt
#just for plotting
import numpy as np
#what's wrong?
# matplotlib.use('tkagg')
# %matplotlib inline

import IPython.display as ipd 
import numpy as np 
import io
import json
import requests
from pytube import YouTube
import os
import subprocess

#tutorial copied from : https://github.com/justinsalamon/melodia_python_tutorial/blob/master/melodia_python_tutorial.ipynb

# You can download it here: http://labrosa.ee.columbia.edu/projects/melody/mirex05TrainFiles.zip


# # This is how we load audio using Essentia
# loader = es.MonoLoader(filename=audio_file, downmix = 'mix', sampleRate = 44100)
# audio = loader()

# This is how we load audio using Librosa
# audio, sr = librosa.load(audio_file, sr=44100, mono=True)

# data = vamp.collect(audio, sr, "mtg-melodia:melodia")


# #hello
# hop = 0.1
# hop, melody = data['vector']
# print(hop) # hop is currently 0.002902494
# # print(melody)

class NumpyArrayEncoder(json.JSONEncoder):
    def default(self, obj):
        if isinstance(obj, np.ndarray):
            return obj.tolist()
        return json.JSONEncoder.default(self, obj)
    
# TO DO: account for duplicate songs
# TO DO: make data nicer for frontend to see, hop is currently 0.002902494
def melody(song):
    # Use Pytube to convert link to mp4
    yt = YouTube(song["link"])
    audio_stream = yt.streams.filter(only_audio=True).first()

    default_filename=audio_stream.title
    print("This is", default_filename)

    audio_stream.download(output_path='mirex05/{}'.format(default_filename))

    subprocess.run([
        'ffmpeg',
        '-i', os.path.join('mirex05/', default_filename),
        os.path.join('mirex05/', default_filename + '.mp3')
    ])

    # This is how we load audio using Librosa
    audio, sr = librosa.load('mirex05/{}/{}'.format(audio_stream.title,audio_stream.title + '.mp4'), sr=44100, mono=True)
    params = {"minfqr": 100.0, "maxfqr": 800.0, "voicing": 0.2, "minpeaksalience": 0.0}

    data = vamp.collect(audio, sr, "mtg-melodia:melodia", parameters=params)
    hop, melody = data['vector']

    # timestamps = 8 * 128/44100.0 + np.arange(len(melody)) * (128/44100.0)
    # print(timestamps)
    mel_array = np.array(melody)
    clean_mel = [note for note in mel_array if note > 0]
    notes = librosa.hz_to_note(clean_mel)
    numpyData = {"notes": notes}
    encodedNumpyData = json.dumps(numpyData, cls=NumpyArrayEncoder)  # use dump() to write array into file
    return encodedNumpyData