import React from 'react'
import styles from './SingleColors.module.css';
import ColorPicker from '../ColorPicker/ColorPicker';
import { StateContext } from '../../contexts/StateContext/StateContext';
import VisuallyHidden from '../VisuallyHidden/VisuallyHidden';
import { X } from 'react-feather';


function SingleColor({color, colorId, openId, setId, toShow, index}) {
    const {state, dispatch} = React.useContext(StateContext);
    console.log({colorId, openId, setId, index});

    function handleDeleteColor(index) {
        dispatch({
            type: 'DELETE-COLOR',
            index,
            newId: crypto.randomUUID()
        })

    }

    function handleOpenClose() {
                if(openId == colorId) {
                    setId('');
                    return;
                }
                setId(colorId);
    }


    if(toShow == false) {
        if(state.numOfVisibleColors == index) {
            return (
                <div className={styles.wrapper}>
                    <button className={styles.btn} onClick={() => dispatch({
                        type: 'ADD-COLOR'
                    })} >
                        <div className={styles.colorDiv}>+</div>    
                    </button> 
                </div>
            )

        }
        

        return (
        <div className={styles.wrapper}>
            <button className={styles.btn}>
                <div style={{outline: `2px solid rgba(128, 128, 128, 0.295)`}} className={styles.colorDiv}></div>    
            </button> 
        </div>
        )
    }


    return (
        <div className={styles.wrapper}>
            <button onMouseOver={() => console.log('in button')} onClick={handleOpenClose}  className={styles.btn}>
                <div style={{backgroundColor: `${color}`}} className={styles.colorDiv}></div>
                
            </button>
            <button className={styles.closeBtn} onClick={() =>  handleDeleteColor(index)}>
                <X strokeWidth={2} />
            </button>
            
            { 
                openId == colorId && 
                     <ColorPicker index={index} ></ColorPicker>   
            }
        </div>       
    )
}

export default SingleColor;
