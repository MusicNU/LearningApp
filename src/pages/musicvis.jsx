import '../App.css'

const num_divisions = 5
const line1 = {A:[0,2]}
const Vis = () => {
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
    
        .ruler {
          fill: #2E303F;
        }
    
        .ruler-marks {
          fill: #ccc;
          text-anchor: start;
          dominant-baseline: middle;
          font-family: 'Proxima Nova', sans-serif;
          font-size: 11px;
          font-weight: 200;
          pointer-events: none;
          user-select: none;
          -webkit-user-select: none;
          -moz-user-select: none;
        }
    
        .beat-line {
          stroke: #ccc;
          stroke-opacity: 0.1;
          stroke-width: 1.0;
        }
        .beat-line.measure {
          stroke: #ccc;
          stroke-opacity: 0.3;
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
              <rect class="ruler" width="640" height="20" x="0" y="0"></rect>
              <text className="ruler-marks" x="9" y="10">BEAT</text>
              <text className="ruler-marks" x="45" y="10">2</text>
              <line className="beat-line" x1="40" y1="0" x2="40" y2="150"></line><text class="ruler-marks" x="85" y="10">3</text><line class="beat-line" x1="80" y1="0" x2="80" y2="150"></line><text class="ruler-marks" x="125" y="10">4</text><line class="beat-line" x1="120" y1="0" x2="120" y2="150"></line><text class="ruler-marks" x="165" y="10">5</text><line class="beat-line measure" x1="160" y1="0" x2="160" y2="150"></line><text class="ruler-marks" x="205" y="10">6</text><line class="beat-line" x1="200" y1="0" x2="200" y2="150"></line><text class="ruler-marks" x="245" y="10">7</text><line class="beat-line" x1="240" y1="0" x2="240" y2="150"></line><text class="ruler-marks" x="285" y="10">8</text><line class="beat-line" x1="280" y1="0" x2="280" y2="150"></line><text class="ruler-marks" x="325" y="10">9</text><line class="beat-line measure" x1="320" y1="0" x2="320" y2="150"></line><text class="ruler-marks" x="365" y="10">10</text><line class="beat-line" x1="360" y1="0" x2="360" y2="150"></line><text class="ruler-marks" x="405" y="10">11</text><line class="beat-line" x1="400" y1="0" x2="400" y2="150"></line><text class="ruler-marks" x="445" y="10">12</text><line class="beat-line" x1="440" y1="0" x2="440" y2="150"></line><text class="ruler-marks" x="485" y="10">13</text><line class="beat-line measure" x1="480" y1="0" x2="480" y2="150"></line><text class="ruler-marks" x="525" y="10">14</text><line class="beat-line" x1="520" y1="0" x2="520" y2="150"></line><text class="ruler-marks" x="565" y="10">15</text><line class="beat-line" x1="560" y1="0" x2="560" y2="150"></line><text class="ruler-marks" x="605" y="10">16</text><line class="beat-line" x1="600" y1="0" x2="600" y2="150"></line></g><rect class="timeline-note" width="158" height="4.791666666666667" x="0" y="29.583333333333336"></rect><rect class="timeline-note" width="158" height="4.791666666666667" x="159.99999999599999" y="130.20833333333334"></rect><rect class="timeline-note" width="158" height="4.791666666666667" x="319.999999996" y="20"></rect><rect class="timeline-note" width="118" height="4.791666666666667" x="479.999999996" y="24.791666666666668"></rect><rect class="timeline-note" width="38" height="4.791666666666667" x="599.999999996" y="24.791666666666668"></rect><path d="M -1 150 l 0 -130 l -6 -6 l 0 -15 l 14 0 l 0 15 l -6 6 l 0 150 Z" class="playhead"></path></g></svg>
      </div>
  </div>
    </>
   
  )
}

export default Vis;