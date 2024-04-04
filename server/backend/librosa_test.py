import librosa

y, sr = librosa.load(librosa.ex('trumpet'))
print(librosa.onset.onset_detect(y=y, sr=sr, units='time'))