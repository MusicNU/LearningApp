# import os
# import subprocess
# from pytube import YouTube

# link = ("https://www.youtube.com/watch?v=QLpArkPb-YU")

# def link_to_mp3(song):
#      # Use Pytube to convert link to mp4
#     yt = YouTube(song)
#     audio_stream = yt.streams.filter(only_audio=True).first()
#     # audio_stream.download(output_path='mirex05/{}'.format(audio_stream.title))

#     default_filename=audio_stream.title
#     print("This is", default_filename)

#     audio_stream.download(output_path='mirex05/{}'.format(default_filename))

#     subprocess.run([
#         'ffmpeg',
#         '-i', os.path.join('mirex05/', default_filename + '.mp4'),
#         os.path.join('mirex05/', default_filename + '.mp3')
#     ])

# link_to_mp3(link)


import os
import subprocess
from pytube import YouTube

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
        os.path.join(output_folder, default_filename + '.mp3')
    ])

link_to_mp3(link)
