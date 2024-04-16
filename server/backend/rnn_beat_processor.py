from os import path
from pydub import AudioSegment
from madmom.features.beats import RNNBeatProcessor
import datetime

print("starting conversion")
start_time = datetime.datetime.now()
input_file = "mp3_files/YQHsXMglC9A.mp3"
output_file = "mp3_files/result.wav"

# convert mp3 file to wav file
sound = AudioSegment.from_mp3(input_file)
sound.export(output_file, format="wav")

conversion_end_time = datetime.datetime.now()
print("conversion took:", conversion_end_time - start_time)
processor = RNNBeatProcessor()
print(processor(output_file))
print("beat processing took:", datetime.datetime.now() - conversion_end_time)
