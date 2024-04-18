from os import path
from pydub import AudioSegment
from madmom.features.beats import RNNBeatProcessor
import datetime
import numpy as np

print("starting conversion")
start_time = datetime.datetime.now()
input_file = "mp3_files/9bahTUVLXZw.mp3"
output_file = "mp3_files/result"
partitions = 6

# convert mp3 file to wav file
sound = AudioSegment.from_mp3(input_file)
window_size = len(sound) // partitions
for partition in range(partitions):
    window = sound[partition * window_size : (partition + 1) * window_size]
    window.export(output_file + str(partition) + ".wav", format="wav")

conversion_end_time = datetime.datetime.now()
print("conversion took:", conversion_end_time - start_time)
processor = RNNBeatProcessor()
beat_probabilities = processor(output_file + "0.wav")
print(max(beat_probabilities))
csv = np.where(beat_probabilities > 0.7, 1, 0)
row_nums = np.arange(len(csv))
csv = np.hstack((row_nums, csv))
np.savetxt("beats_res.csv", csv, fmt="%d", delimiter=",")

print("beat processing took:", datetime.datetime.now() - conversion_end_time)
