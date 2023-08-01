import React from 'react';
import { useState, useEffect } from "react";
import Button from '@mui/material/Button';
import Vis from '../Components/pianoroll/entirebar';

const RhythmPage = () => {

    const songLength = 40
    const timing = [0.301859410430839, 0.6965986394557823, 1.0913378684807256, 1.4628571428571429, 1.8808163265306121, 2.2523356009070294, 2.6006349206349206, 2.972154195011338, 3.3436734693877552, 3.7384126984126986, 4.156371882086168, 4.551111111111111, 4.9458503401360545, 5.340589569160998, 5.758548752834467, 6.176507936507937, 6.5712471655328795, 6.965986394557823, 7.383945578231293, 7.801904761904762, 8.219863945578231, 8.568163265306122, 8.962902494331066, 9.357641723356009, 9.752380952380953, 10.147120181405896, 10.541859410430838, 10.913378684807256, 11.3081179138322, 11.702857142857143, 12.120816326530612, 12.538775510204081, 12.979954648526077, 13.374693877551021, 13.769433106575963, 14.164172335600908, 14.605351473922903, 15.023310657596372, 15.441269841269841, 15.81278911564626, 16.207528344671204, 16.555827664399093, 16.904126984126986, 17.252426303854875, 17.600725623582765, 17.972244897959182, 18.3437641723356, 18.738503401360543, 19.13324263038549, 19.52798185941043, 19.922721088435374, 20.29424036281179, 20.66575963718821, 21.037278911564627, 21.43201814058957, 21.826757369614512, 22.221496598639455, 22.639455782312925, 23.057414965986396, 23.49859410430839, 23.893333333333334, 24.288072562358277, 24.706031746031748, 25.10077097505669, 25.495510204081633, 25.913469387755104, 26.308208616780046, 26.70294784580499, 27.12090702947846, 27.492426303854874, 27.88716553287982, 28.281904761904762, 28.676643990929705, 29.071383219954647, 29.442902494331065, 29.814421768707483, 30.209160997732425, 30.603900226757368, 30.95219954648526, 31.32371882086168, 31.695238095238096, 32.066757369614514, 32.43827664399093, 32.80979591836735, 33.18131519274377, 33.55283446712018, 33.94757369614513, 34.365532879818595, 34.78349206349206, 35.131791383219955, 35.50331065759637, 35.898049886621315, 36.29278911564626, 36.664308390022676, 37.05904761904762, 37.430566893424036, 37.82530612244898, 38.22004535147392, 38.66122448979592, 39.12562358276644, 39.497142857142855, 39.86866213151927]
    // const amp = [50, 60, 70, 100, 50, 60, 70]
    const colors = ["red","green","blue","yellow","black","purple","orange","pink"];

    const [params, setParams] = useState({
        //"section": 0,
        "size":50,
        //"beat_times": 0,
        "color":"black",
        "index":0,
        "design": true
        });    

    function getSize(time) {
        if (counter===time){
            params.index = params.index+1
            //return Math.random() * (100 - 40) + 40;
            return 80
        }
        else if (params.size<=25){
            return 25
        }
        else return params.size-0.8

    }

    function getColor(time){
        const num = Math.floor(Math.random() * 8);
        if (counter===time){
            params.index = params.index + 1
            //return Math.random().toString(16).substr(-6);
            return colors[num];
        }
        return params.color
    }

    function setSizeandColor() {
        const time = Math.round(timing[params.index]*100)/100
        //if option is color, set the size to constant and vice versa
        if (params.design == true)
        setParams(previousState => {
            return {...previousState,
                    //section: params.section,
                    //beat_times: 0,
                    color: 'black',
                    size: getSize(time)}}) 
        else
        setParams(previousState => {
            return {...previousState,
                    //section: params.section,
                    //beat_times: 0,
                    color: getColor(time),
                    size: 50}}) 
    }
    

    // https://dev.to/zhiyueyi/how-to-create-a-simple-react-countdown-timer-4mc3
    const [counter, setCounter] = useState(0);

    // https://medium.com/how-to-react/simple-way-to-create-a-stopwatch-in-react-js-bcc0e08e041e
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let timer;
        if (isRunning && counter<songLength){
            setSizeandColor()
            // conditions for timer continue
            timer = (setInterval(() => setCounter(Math.round((counter + .01)*100)/100), 5));
        }
        return () => clearInterval(timer);
    }, [isRunning, counter]);

    const startAndStop = () => {
        setIsRunning(!isRunning);
    };

    const reset = ()=> {
        setCounter(0);
        setParams({
            size: 50,
            color: "black",
            index: 0,
            design: params.design})
        setIsRunning(false);
    }

    const changeDesign = () => {
        setParams(prev => {
            return {...prev,
                    color: "black",
                    design:!params.design}
        })}
    
    const designPrint = ()=> {
        if (params.design){
            return('boomy')
        }
        return('colors')
    }

    return(
        <>
        <div class='center'>
        <svg className="RhythCirc" width="200" height="200" viewBox="0 0 210 210">
            <circle cx="100" cy="100" r={params.size} stroke-width="3" fill={params.color} />
            {/* <circle cx="100" cy="100" r="60" fill="blue" /> */}
        </svg>
        </div >

        <div class='center'>
        <p>{String(params.design)}</p>
        <Button className="button" onClick={startAndStop}> Toggle
        </Button>
        <Button className="button" onClick={reset}> Reset
        </Button>
        <Button className="button" onClick={changeDesign}> Change Design
        </Button>
        </div>
        </>
    )

}

export default RhythmPage
