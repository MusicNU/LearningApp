from __future__ import print_function

import vamp
import librosa
import matplotlib
import matplotlib.pyplot as plt
#just for plotting
import numpy as np
#what's wrong?
#matplotlib.use('TKAgg')
#%matplotlib inline

# tutorial copied from : https://github.com/justinsalamon/melodia_python_tutorial/blob/master/melodia_python_tutorial.ipynb

# You can download it here: http://labrosa.ee.columbia.edu/projects/melody/mirex05TrainFiles.zip
audio_file = 'mirex05/train05.wav'


# # This is how we load audio using Essentia
# loader = es.MonoLoader(filename=audio_file, downmix = 'mix', sampleRate = 44100)
# audio = loader()

# This is how we load audio using Librosa
audio, sr = librosa.load(audio_file, sr=44100, mono=True)

data = vamp.collect(audio, sr, "mtg-melodia:melodia")


#hello
hop, melody = data['vector']
#print(hop)
#print(melody)

#what's wrong?
#timestamps = 8 * 128/44100.0 + np.arange(len(melody)) * (128/44100.0)
timestamps = 8 * 1/100.0 + np.arange(len(melody)) * (1/100.0)
#print(timestamps)
params = {"minfqr": 100.0, "maxfqr": 800.0, "voicing": 0.2, "minpeaksalience": 0.0}

data = vamp.collect(audio, sr, "mtg-melodia:melodia", parameters=params)
hop, melody = data['vector']

mel_array = np.array(melody)
clean_mel = [note for note in mel_array if note > 0]
notes = librosa.hz_to_note(clean_mel)
print(notes)

# Melodia returns unvoiced (=no melody) sections as negative values. So by default, we get:
plt.figure(figsize=(18,6))
plt.plot(timestamps, melody)
plt.xlabel('Time (s)')
plt.ylabel('Frequency (Hz)')

plt.show()