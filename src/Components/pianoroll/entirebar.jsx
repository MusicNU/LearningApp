import '../../App.css';
import LineSetup from './LineSetup';
import Tracker from './musictracker';

const Vis = (props) => {
    //let the function take an input
    //const list = ['A','B','C','D','E','F','G','A','B','C','D','E','F','G','A','B'];
    const list = props.list
    //const list2 = ['A','B','C','A','B','C','A','B','C','A','B','C','A','B','C','A'];
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