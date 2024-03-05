from __future__ import print_function
import vamp
import librosa
import numpy as np
import numpy
import io
import json
import requests
from pytube import YouTube
import os
import subprocess
import boto3 #aws

class NumpyArrayEncoder(json.JSONEncoder):
    def default(self, obj):
        if isinstance(obj, np.ndarray):
            return obj.tolist()
        return json.JSONEncoder.default(self, obj)
    
# note: must run with sudo permissions 
s3 = boto3.client('s3')
bucket_name = 'musicnu'

# TO DO: account for duplicate songs
# TO DO: make data nicer for frontend to see, hop is currently 0.002902494
def melody(video_id):
    # This is how we load audio using Librosa
    audio, sr = librosa.load('mirex05/{}'.format(video_id + '.mp3'), sr=44100, mono=True)
    params = {"minfqr": 100.0, "maxfqr": 800.0, "voicing": 0.2, "minpeaksalience": 0.0}

    data = vamp.collect(audio, sr, "mtg-melodia:melodia", parameters=params)
    hop, melody = data['vector']

    # timestamps = 8 * 128/44100.0 + np.arange(len(melody)) * (128/44100.0)
    # print(timestamps)
    mel_array = np.array(melody)
    clean_mel = [note for note in mel_array if note > 0]
    notes = librosa.hz_to_note(clean_mel)
    numpyData = {"notes": notes}
    file_name = video_id + "_melody" + ".json"
    encodedNumpyData = json.dumps(numpyData, cls=NumpyArrayEncoder)  # use dump() to write array into file
    s3.put_object(Bucket=bucket_name, Key=file_name, Body=encodedNumpyData) #adds to the s3 bucket
    return encodedNumpyData
