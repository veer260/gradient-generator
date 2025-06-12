import React from 'react';
import styles from "./EasingCurve.module.css";
import useMousePosition from '../../hooks/useMousePosition';
import Knob from '../Knob/Knob';
import { StateContext } from '../../contexts/StateContext/StateContext';
import { BOXSIZE } from '../../constants/Constants';

function EasingCurve() {
    const {state, dispatch} = React.useContext(StateContext);

    const [controlA, setControlA] = React.useState(() => state.curvePoints[1]);
    const [controlB, setControlB] = React.useState(() => state.curvePoints[2]);
    // const [controlB, setControlB] = React.useState({
    //     x: 100, y: 0
    // });
    const [toFollowA, setToFollowA] = React.useState(false);
    const [toFollowB, setToFollowB] = React.useState(false);
    const wrapperRef = React.useRef();
    const coordinates = useMousePosition(wrapperRef);

    React.useEffect(() => {
        dispatch({
            type: 'POINTS-CHANGE',
            points: [controlA, controlB]
        });
        return () => {};
    },[controlA, controlB]);

    return (
        <div className=''>
            <h2>Easing curve</h2>
            <div ref={wrapperRef} className={styles.curveWrapper}>
                <svg height={BOXSIZE} width={BOXSIZE} >
                   
                    <path d={`M ${BOXSIZE-4} 4  L ${controlB.x} ${controlB.y}`} strokeLinecap='round' strokeDasharray="0.33,7" stroke='hsl(180deg 2% 55%)' strokeWidth={3}  ></path>
                    <path d={`M 4 ${BOXSIZE-4}  L ${controlA.x} ${controlA.y} `} strokeLinecap='round' strokeDasharray="0.33,7" stroke='hsl(180deg 2% 55%)' strokeWidth={3}  ></path>
                    <path stroke-linecap="round" strokeWidth={4} fill='transparent' d={`M 4 ${BOXSIZE-4} C ${controlA.x} ${controlA.y} ${controlB.x} ${controlB.y} ${BOXSIZE-4} 4`} stroke="white" > </path>
                </svg>

                <div className={styles.triggerContainer}>
                    <Knob 
                    controlPoints={controlA}
                    coordinates={coordinates} 
                    toFollow={toFollowA} 
                    setToFollow={setToFollowA}
                    containerRef={wrapperRef}
                    setControl={setControlA}
                    />
                    <Knob 
                    controlPoints={controlB}
                    coordinates={coordinates} 
                    toFollow={toFollowB} 
                    setToFollow={setToFollowB}
                    containerRef={wrapperRef}
                    setControl={setControlB}         
                    />
                </div>    
            </div>
            
        </div>
        
    )
}

export default EasingCurve;
