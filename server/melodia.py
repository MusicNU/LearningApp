from __future__ import print_function

import vamp
import librosa
import matplotlib.pyplot as plt
#what's wrong?
# %matplotlib inline

#tutorial copied from : https://github.com/justinsalamon/melodia_python_tutorial/blob/master/melodia_python_tutorial.ipynb

# You can download it here: http://labrosa.ee.columbia.edu/projects/melody/mirex05TrainFiles.zip
audio_file = 'mirex05/train05.wav'


# # This is how we load audio using Essentia
# loader = es.MonoLoader(filename=audio_file, downmix = 'mix', sampleRate = 44100)
# audio = loader()

# This is how we load audio using Librosa
audio, sr = librosa.load(audio_file, sr=44100, mono=True)

data = vamp.collect(audio, sr, "mtg-melodia:melodia")