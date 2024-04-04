import os
import subprocess
from pytube import YouTube
import pytube
import ssl

ssl._create_default_https_context = ssl._create_stdlib_context

link = "https://www.youtube.com/watch?v=YQHsXMglC9A"

def link_to_mp3(song):
    # Use Pytube to convert link to mp4
    yt = YouTube(song)
    audio_stream = yt.streams.filter(only_audio=True).first()

    # Create the output folder if it doesn't exist
    output_folder = 'mp3_files'
    os.makedirs(output_folder, exist_ok=True)

    youtube_id = pytube.extract.video_id(song)

    if os.path.exists(os.path.join(output_folder, f"{youtube_id}.mp3")):
        print(youtube_id)
        return str(youtube_id)

    audio_stream.download(output_path=output_folder, filename=f"{youtube_id}.mp4")

    subprocess.run([
        'ffmpeg',
        '-i', os.path.join(output_folder, youtube_id + '.mp4'),
        os.path.join(output_folder, youtube_id + '.mp3')
    ])

    mp4_file = youtube_id + '.mp4'

    if os.path.exists(os.path.join(output_folder, mp4_file)):
        os.remove(os.path.join(output_folder, mp4_file))
    print(youtube_id)
    return str(youtube_id)

link_to_mp3(link)