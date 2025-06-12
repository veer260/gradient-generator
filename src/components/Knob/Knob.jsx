import React from 'react';
import styles from './Knob.module.css';
import { BOXSIZE } from '../../constants/Constants';

function Knob({coordinates, toFollow, setToFollow, containerRef, setControl, controlPoints }) {
    const knobRef = React.useRef();

    React.useEffect(() => {
        const knobElem = knobRef.current;

        if(toFollow && containerRef.current) {
            const {left, top} = containerRef.current.getBoundingClientRect();
            let fromLeft = coordinates.x - left;
            if(fromLeft < 0) {
                fromLeft = 0;
            }else if( fromLeft > BOXSIZE) {
                fromLeft = BOXSIZE;
            }
            let fromTop = coordinates.y - top;
            if(fromTop < 0) {
                fromTop = 0;
            }else if( fromTop > BOXSIZE) {
                fromTop = BOXSIZE;
            }
            knobElem.style.left =  `${fromLeft}px`;
            knobElem.style.top = `${fromTop}px`;
            setControl({
                x: fromLeft,
                y: fromTop
            });
        }
    }, [toFollow, coordinates]);
    return (
        <button 
            style={{left: `${controlPoints.x}px`, top: `${controlPoints.y}px` }}
            ref={knobRef}
            className={styles.knob}
            onMouseDown={() => setToFollow(true)} 
            onMouseUp={() => setToFollow(false)}>   
        </button>
    )
}

export default Knob;
