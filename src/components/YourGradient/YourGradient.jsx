import React from 'react'
import { StateContext } from '../../contexts/StateContext/StateContext'
import { generateMainGradient } from '../../helpers/main-gradient-generator';
import styles from './YourGradient.module.css'

function YourGradient() {
    const {state, dispatch} = React.useContext(StateContext);
    const gradient = generateMainGradient(state.colors, state.numOfVisibleColors, state.curvePoints);
    const gradientArr = gradient.split(',');
    const incompleArr = gradientArr.slice(0, gradientArr.length-1);
    return (
        <div className={styles.gradientCodeContainer}>
            <span>{`.gradient { `} </span>
            <br />
            <span> &nbsp; &nbsp; background-image: linear-gradient(</span>
            <br />
            <span> &nbsp; &nbsp; {`${state.angle}deg`},</span>
            <br />
            <span></span>
            {
                incompleArr.map((item) => {
                    return (
                        <>
                            <span>&nbsp; &nbsp; {item},</span>
                            <br />
                        </>
                    )

                })
            }
            <span>&nbsp; &nbsp; {gradientArr[gradientArr.length-1]}</span>
            <br />
            )
        </div>
    )
}

export default YourGradient
