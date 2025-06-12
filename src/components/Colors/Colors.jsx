import React from 'react';
import styles from './Colors.module.css';
import VisuallyHidden from '../VisuallyHidden/VisuallyHidden';
import SingleColor from '../SingleColor/SingleColor';
import { StateContext } from '../../contexts/StateContext/StateContext';

function Colors() {

    const [openId, setOpenId] = React.useState("");
    const {state, dispatch} = React.useContext(StateContext);

    const numOfVisibleColors = state.numOfVisibleColors;
    const colorsArr = state.colors;
    
    function changeId(newId) {
        setOpenId(newId);
    }
    
    return (
        <div className={styles.colorWrapper}>
            <h2>Colors:</h2>
            <div className={styles.colorsContainer}>
                {
                colorsArr.map(({id, hue, sat, light}, index) =>  <SingleColor toShow={index < numOfVisibleColors} index={index} setId={changeId} openId={openId} color={`hsl(${hue}deg ${sat}% ${light}%)`} colorId={id} key={id} />)
                }
            </div>       
        </div>
    )
}

export default Colors;