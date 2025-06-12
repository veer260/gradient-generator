import React from 'react';
import styles from './AngleKnob.module.css';
import usePlaceChild from '../../hooks/usePlaceChild';
import { StateContext } from '../../contexts/StateContext/StateContext';
import { BOXSIZE } from '../../constants/Constants';

function AngleKnob() {
    const containerRef = React.useRef();
    const triggerRef = React.useRef();
    const {state, dispatch} = React.useContext(StateContext);

    const pos = usePlaceChild(containerRef, {x: 0, y: 0}, containerRef);
    const x = pos.x;
    const y = pos.y;
    let angleDeg = (Math.atan((-BOXSIZE/2 + y)/(BOXSIZE/2 -x)) * 180) / Math.PI;
    if(y > BOXSIZE/2 && x < BOXSIZE/2) { //Quadrant 3
        angleDeg += 180;
    }else if(y < BOXSIZE/2 && x < BOXSIZE/2) { //Quadrant 2
        angleDeg = 180 + angleDeg;
    }else if(y > BOXSIZE/2 && x > BOXSIZE/2) { // Quadrant 4
        angleDeg += 360;
    }

    const pathString = React.useMemo(() => {
        return `M ${BOXSIZE/2} 0 v ${BOXSIZE} M ${BOXSIZE} ${BOXSIZE/2} h -${BOXSIZE}`
    }, [BOXSIZE]);

    React.useEffect(() => {
        dispatch({
            type: "CHANGE-ANGLE",
            newAngle: Math.trunc(angleDeg)
        })
        return () => {};
    },[pos]);


    return (
        <div className={styles.wrapper}>
            <h2>Angle: {state.angle}deg</h2>
            <div ref={containerRef} className={styles.knobContainer}>
                <div className={styles.svgWrapper}>
                    <svg height={BOXSIZE} width={BOXSIZE} >
                        <circle r="25" cx={BOXSIZE/2} cy={BOXSIZE/2} strokeDasharray="0.3,6" stroke="hsl(180deg 2% 25%)" stroke-linecap="round" fill="transparent"  strokeWidth={2} />
                        <circle r="50" cx={BOXSIZE/2} cy={BOXSIZE/2} strokeDasharray="0.3,6" stroke="hsl(180deg 2% 25%)" stroke-linecap="round" fill="transparent"  strokeWidth={2} />
                        <circle r="75" cx={BOXSIZE/2} cy={BOXSIZE/2} strokeDasharray="0.3,6" stroke="hsl(180deg 2% 25%)" stroke-linecap="round" fill="transparent"  strokeWidth={2} />
                        <circle r="100" cx={BOXSIZE/2} cy={BOXSIZE/2} strokeDasharray="0.3,6" stroke="hsl(180deg 2% 25%)" stroke-linecap="round" fill="transparent"  strokeWidth={2} />
                        <path d={pathString} stroke="var(--gray-300)" strokeWidth={2}/>
                        <circle r="125" cx={BOXSIZE/2} cy={BOXSIZE/2}  fill="transparent" stroke="var(--gray-700)" strokeWidth={2} />

                    </svg>
                </div>
                <div ref={triggerRef} style={{'--angle': `-${state.angle}deg`}} className={styles.trigger}>
                    <div className={styles.hand}></div>
                    <div className={styles.circle}></div>
                </div>

            </div>
            
        </div>
    )
}

export default React.memo(AngleKnob);
