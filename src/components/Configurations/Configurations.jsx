import React from 'react'
import styles from './Configurations.module.css';
import AngleKnob from '../AngleKnob/AngleKnob';
import EasingCurve from '../EasingCurve/EasingCurve';

function Configurations() {
    return (
        <div className={styles.configWrapper}>
            <AngleKnob />
            <EasingCurve />
            
            
        </div>
    )
}

export default Configurations
