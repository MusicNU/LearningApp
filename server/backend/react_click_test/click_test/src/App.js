import logo from './logo.svg';
import AudioPlayer from 'react-h5-audio-player';
import './App.css';
import { beats_array } from './beats';
import './15step.mp3';
import './click.mp3';
import { useRef } from 'react';

function App() {
  const main_audio = useRef(null)
  var click = new Audio("./click.mp3");
  var i = 0;
  function playClick() {
    if (main_audio.current != null) {
      var duration = main_audio.current.duration;
      main_audio.current.play()
      var frame_duration = duration / beats_array.length

      setInterval(function() {
        if (i >= beats_array.length) {
          return
        } else {
          if (beats_array[i] === 1) {
            click.play();
          }
          i++;
        }
      }, frame_duration * 1000);
    }
  }




  return (
    <div className="App">
      <audio src="./15step.mp3" preload="metadata" ref={main_audio} />
      <button onClick={playClick()}> Play audio and click </button>
    </div>
  );
}

export default App;
