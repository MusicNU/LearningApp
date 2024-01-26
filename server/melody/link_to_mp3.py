import os
import subprocess
from pytube import YouTube
import pytube

link = "https://www.youtube.com/watch?v=QLpArkPb-YU"

def link_to_mp3(song):
    # Use Pytube to convert link to mp4
    yt = YouTube(song)
    audio_stream = yt.streams.filter(only_audio=True).first()

    # Create the output folder if it doesn't exist
    output_folder = 'mirex05'
    os.makedirs(output_folder, exist_ok=True)

    default_filename = audio_stream.title

    audio_stream.download(output_path=output_folder)

    subprocess.run([
        'ffmpeg',
        '-i', os.path.join(output_folder, default_filename + '.mp4'),
        os.path.join(output_folder, pytube.extract.video_id(song) + '.mp3')
    ])

    mp4_file = default_filename + '.mp4'

    if os.path.exists(os.path.join(output_folder, mp4_file)):
        os.remove(os.path.join(output_folder, mp4_file))
    print(pytube.extract.video_id(song))
    return str(pytube.extract.video_id(song))
   
# link_to_mp3(link)
