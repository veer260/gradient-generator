import React from 'react'
import styles from './Gradient.module.css';
import { StateContext } from '../../contexts/StateContext/StateContext';
import { generateMainGradient } from '../../helpers/main-gradient-generator';


function Gradient() {
        const {state, dispatch} = React.useContext(StateContext);
        const colorsArr = state.colors;
        let gradient = generateMainGradient(colorsArr, state.numOfVisibleColors, state.curvePoints);
    return (
        <div className={styles.gradientWrapper}>
             <div className={styles.gradient} style={{'--main-gradient': `linear-gradient(${state.angle}deg in oklch, ${gradient}`
            }} >   
            </div>
        </div>
       
    )
}

export default Gradient;
