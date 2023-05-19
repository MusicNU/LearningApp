import '../App.css';
import Note from '../Components/pianoroll/Note';
import LineSetup from '../Components/pianoroll/LineSetup';
import Tracker from '../Components/pianoroll/musictracker'
const Vis = () => {
    //let the function take an input
    const list = ['A','B','C','D','E','F','G','A','B','C','D','E','F','G','A','B'];
    const listnumbers = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
    const dict_heights = {'A':0,'B':1,'C':2,'D':3,'E':4,'F':5,'G':6};
    const num_notes = Object.keys(dict_heights).length
    const tot_width = 640;
    const tot_height = 150-20;
    const num_bars = 16;
    const note_width = tot_width/num_bars;
    const notes_y = list.map((e) => 20+dict_heights[e]/num_notes * tot_height)
    const notes_x = listnumbers.map((e)=> e/num_bars * tot_width)

  return (
    <>
    <style>
      {`
        .scroll-container {
          overflow-x: auto;
          overflow-y: hidden;
          border: 1px solid #0003;
        }
        .timeline {
          height: 150px;
          background-color: #414251;
        }
        /* String foreground = "#ddd"; */
        .playhead {
    /*        fill: #82838C; */
          fill: orange;
        }
        .timeline #note-hint {
          position: absolute;
          display: flex;
          background-color: #87c44e;
          font-size: 12px;
          padding: 8px 12px;
          right: 20px;
          color: white;
          font-family: sans-serif;
          line-height: 150%;
          box-sizing: border-box;
          border-radius: 4px;
          opacity: 0;
          transition: opacity 0.25s;
          pointer-events: none;
          user-select: none;
          -webkit-user-select: none;
          -moz-user-select: none;
        }
        .timeline #note-hint.show { opacity: 1.0; }
        #note-hint .note-box {
          display: flex;
          margin-right: 10px;
        }
        #note-hint .note-name {
          font-family: serif;
          font-size: 22px;
          line-height: 22px;
        }
        #note-hint .note-decorators {
          display: flex;
          flex-direction: column;
          text-align: center;
          line-height: 12px;
          font-size: 12px;
        }
        #note-hint .note-info {
          font-size: 13px;
          line-height: 24px;
        }
        .status-message-container {
          position: absolute;
          top: 0;
          bottom: 15px;
          left: 0;
          width: 100%;
          background: rgba(0, 0, 0, 0.3);
          box-sizing: border-box;
        }
        .status-message-container.hidden { display: none; }
        .status-message {
          font-size: 100%;
          font-weight: 500;
          position: absolute;
          padding: 1.5em;
          bottom: 0;
          left: 0;
          color: white;
          user-select: none;
        }
        .timeline-waveform { fill: rgba(255, 255, 255, 0.7); }
        .waveform-fails, .waveform-loading {
          fill: rgba(255, 255, 255, 0.85);
          text-anchor: start;
          dominant-baseline: middle;
          font-family: 'Proxima Nova', sans-serif;
          font-size: 16px;
          font-weight: 400;
          pointer-events: none;
          user-select: none;
          -webkit-user-select: none;
          -moz-user-select: none;
        }
        .timeline-note { fill: #2f9aef; }
        .timeline-note:hover { fill: white !important; }
        .timeline-note.highlighted { fill: white !important; }
        .guitar .timeline-note { fill: #f0c229; }
        .bass .timeline-note { fill: #ec5eb2; }
        .marimba .timeline-note { fill: #f6843f; }
        .piano .timeline-note { fill: #2f9aef; }
        .drums .timeline-note,
        .drumkit .timeline-note { fill: #86c44e; }
    
        .guitar .timeline-waveform { fill: #f0c229; }
        .bass .timeline-waveform { fill: #ec5eb2; }
        .marimba .timeline-waveform { fill: #f6843f; }
        .piano .timeline-waveform { fill: #2f9aef; }
        .drums .timeline-waveform,
        .drumkit .timeline-waveform { fill: #86c44e; }
    
   
    `}
    </style>
     <div className="scroll-container">
      <div class="timeline" style={{width: 638}}>
        <svg className="container-bass" version="1.1" viewBox="0 0 640 150">
          <g>
            <g>
            {listnumbers.map((e)=> <rect class="timeline-note" width={note_width} height="4.79" x={notes_x[e]} y={notes_y[e]}></rect>)}
              <LineSetup measures='4' width='640' height='150' beats='4'/>
            </g>
            <Tracker></Tracker>
          </g></svg>

              
      </div>
  </div>
    </>
   
  )
}

export default Vis;