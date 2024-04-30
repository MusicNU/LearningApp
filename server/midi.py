import mido
import base64
import io

# Preload MIDI files and store them in a dictionary
midi_files = {
    1: mido.MidiFile('1.mid'),
    2: mido.MidiFile('2.midi'),
    3: mido.MidiFile('3.midi'),
    4: mido.MidiFile('4.midi')
}

def midi_to_data(midi):

    input_midi_file = midi_files[midi] #the inputted number will load the correct midi

    # Create a new MIDI file for output, copying the ticks_per_beat from the input to preserve timing
    output_midi_file = mido.MidiFile(ticks_per_beat=input_midi_file.ticks_per_beat)

    # Create a track in the output MIDI file
    output_track = mido.MidiTrack()
    output_midi_file.tracks.append(output_track)

    # Initialize a default tempo (500000 microseconds per beat corresponds to 120 BPM)
    default_tempo = 500000
    tempo = default_tempo

    # Process each track in the input file
    for track in input_midi_file.tracks:
        for message in track:
            if message.is_meta and message.type == 'set_tempo':
                tempo = message.tempo  # Preserve the original tempo
                output_track.append(message)  # Copy tempo message to output
            elif message.type in ['note_on', 'note_off']:
                # Convert delta times and append messages
                new_time = int(message.time)
                new_message = message.copy(time=new_time)
                output_track.append(new_message)
            else:
                # Copy all other messages as they are
                output_track.append(message)

    # Check if no tempo was found and set default tempo if necessary
    if tempo == default_tempo:
        output_track.append(mido.MetaMessage('set_tempo', tempo=default_tempo))

    # Save the MIDI data to a bytes buffer instead of a file
    midi_buffer = io.BytesIO()
    output_midi_file.save(file=midi_buffer)
    midi_buffer.seek(0)  # Reset buffer position to the beginning

    # Read the buffer's content and encode it in base64
    midi_data = midi_buffer.read()
    encoded_data = base64.b64encode(midi_data)

    # Convert the base64 bytes to a string to print or use
    base64_string = encoded_data.decode('utf-8')
    print(base64_string)
    return base64_string

# midi_to_data(1)