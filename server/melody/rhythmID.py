# import modules
import librosa 
import IPython.display as ipd 
import matplotlib.pyplot as plt
import librosa.display
import numpy as np 
#import librosa.util

def find_tempo():
    # read audio file 
    #y, sr = librosa.load('requiem.wav')
    y, sr = librosa.load(librosa.example('brahms'))

    #finding beat times
    tempo, beats = librosa.beat.beat_track(y=y, sr=sr)
    times = librosa.frames_to_time(beats[:100], sr=sr)
    print(tempo)
    return(tempo)

# #trying to play clicks on top of audio file
# ipd.Audio(y, rate=sr)
# clicks = librosa.clicks(beats, sr=sr)
# #ipd.Audio(y + clicks, rate = sr)


# #plotting beats
# plt.vlines(times, 0, 10, linestyles ="dotted", colors ="k")
# plt.xlim(0, 10)
# plt.ylim(0, 10)
# plt.show()
