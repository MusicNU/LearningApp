import librosa
import numpy as np
import matplotlib.pyplot as plt

y, sr = librosa.load('mp3_files/WeAreYoung.mp3')
onset_env = librosa.onset.onset_strength(y=y, sr=sr)
tempo, beats = librosa.beat.beat_track(onset_envelope=onset_env,
                                       sr=sr)
beats2 = librosa.frames_to_time(beats, sr=sr)
print('tempo:', tempo)
# print('beats:', beats2)

hop_length = 512
# fig, ax = plt.subplots(nrows=2, sharex=True)
fig, ax = plt.subplots()
times = librosa.times_like(onset_env, sr=sr, hop_length=hop_length)
# M = librosa.feature.melspectrogram(y=y, sr=sr, hop_length=hop_length)
# librosa.display.specshow(librosa.power_to_db(M, ref=np.max),
                        #  y_axis='mel', x_axis='time', hop_length=hop_length,
                        #  ax=ax[0])

beats2 = np.array([beat for beat in beats2 if beat <= 40])
# ax[0].label_outer()
# ax[0].set(title='Mel spectrogram')
ax.plot(times[:3000], librosa.util.normalize(onset_env)[:3000],
         label='Onset strength')
ax.vlines(times[beats2], 0, 1, alpha=0.5, color='r',
           linestyle='--', label='Beats')
ax.legend()
plt.show()