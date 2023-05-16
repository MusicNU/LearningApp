function LineSetup(props){
    return ( 
        <>
            <rect class="ruler" width={props.width} height="20" x="0" y="0"></rect>
            <BeatLines measures={props.measures} width={props.width} height={props.height} beats={props.beats}/>
            <MeasureLines measures={props.measures} width={props.width} height={props.height}/>
        </>
    );
}

function MeasureLines(props) {
    //props: tot width, tot height, number of measures (not lines)

    const spacing = props.width / props.measures
    const spaces = new Array(props.measures - 1)
    for (let i = 1; i < props.measures; i++) {
        spaces.push(i * spacing)
    }

    return (
        <>
            {spaces.map(x => {
                return (
                    <line class="beat-line measure" x1={x} y1="0" x2={x} y2={props.height}></line>
                );
            })}
        </>
    );
}

function BeatLines(props) {
    //props: tot width, tot height, number of measures (not lines), number of beats per measure (not lines)
    const numLines = props.measures * props.beats
    const spacing = props.width / numLines
    const spaces = new Array(numLines - 1)
    const beatNums = new Array(numLines)
    if (numLines>=1){
        //fix constant
        beatNums[0] = ["BEAT",6]
    }
    for (let i = 1; i < numLines; i++) {
        spaces.push(i * spacing)
        //fix constant
        beatNums.push([i+1,i*spacing+5])
    }

    return (
        <>
            {spaces.map(x => {
                return (
                    <line class="beat-line" x1={x} y1="0" x2={x} y2={props.height}></line>
                );
            })}
            {beatNums.map(x => {
                return (
                    <text class="ruler-marks" x={x[1]} y="12">{x[0]}</text>
                );
            })}
        </>
    );
}

export default LineSetup;