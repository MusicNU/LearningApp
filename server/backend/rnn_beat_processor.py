from os import path
from pydub import AudioSegment
from madmom.features.beats import RNNBeatProcessor

input_file = "mp3_files/YQHsXMglC9A.mp3"
output_file = "mp3_files/result.wav"

# convert mp3 file to wav file
sound = AudioSegment.from_mp3(input_file)
sound.export(output_file, format="wav")

processor = RNNBeatProcessor()
print(processor(output_file))
