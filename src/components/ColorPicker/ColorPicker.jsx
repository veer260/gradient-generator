import React from 'react';
import styles from './ColorPicker.module.css';

function ColorPicker() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.layer1}></div>
            <div className={styles.layer2}></div>     
        </div>
    )
}

export default ColorPicker;
