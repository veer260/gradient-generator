import React from 'react';
import styles from './HuePicker.module.css';
import { gradient } from '../../helpers/gradient-generator'
import usePlaceChild from '../../hooks/usePlaceChild';

function HuePicker({color, onHueChange}) {
    const hueRef = React.useRef();
    const triggerRef = React.useRef();
    const pos = usePlaceChild(hueRef);

    React.useEffect(() => {
        const trigger = triggerRef.current;
        if(trigger) {
            trigger.style.left = `${pos.x}px`;
            const newHue = `${Math.trunc((pos.x/150)*360)}`
            onHueChange(newHue);
        }
    },[pos]);

    return (
        <div className={styles.hueContainer}>
            <div className={styles.huePicker} ref={hueRef} style={{'--gradient': `linear-gradient(${gradient})`}}>
                <div ref={triggerRef} className={styles.trigger}></div>
            </div>
        </div>
    )
}

export default HuePicker;
