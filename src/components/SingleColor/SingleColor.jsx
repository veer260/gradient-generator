import React from 'react'
import styles from './SingleColors.module.css';
import ColorPicker from '../ColorPicker/ColorPicker';
import { StateContext } from '../../contexts/StateContext/StateContext';
import VisuallyHidden from '../VisuallyHidden/VisuallyHidden';
import { X } from 'react-feather';


function SingleColor({color, colorId, openId, setId, toShow, index}) {
    const {state, dispatch} = React.useContext(StateContext);

    function handleDeleteColor(index) {
        dispatch({
            type: 'DELETE-COLOR',
            index,
            newId: crypto.randomUUID()
        })

    }

    if(toShow == false) {
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
            <button onMouseOver={() => console.log('in button')} onClick={() => {
                if(openId == colorId) {
                    setId('');
                    return;
                }
                setId(colorId);
            }}  className={styles.btn}>
                <div style={{backgroundColor: `${color}`}} className={styles.colorDiv}></div>
                
            </button>
            <button className={styles.closeBtn} onClick={() =>  handleDeleteColor(index)}>
                <X strokeWidth={2} />
            </button>
            
            { 
                openId == colorId && <ColorPicker></ColorPicker>
            }
        </div>       
    )
}

export default SingleColor;
