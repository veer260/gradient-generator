import React from 'react'
import styles from './SingleColors.module.css';
import ColorPicker from '../ColorPicker/ColorPicker';

function SingleColor({color, colorId, openId, setId}) {
    return (
        <div className={styles.wrapper}>
            <button onClick={() => setId(colorId)}>
                <div className={styles.colorDiv}></div>
            </button>
            {/* <div></div> */}
            { openId == colorId && <ColorPicker></ColorPicker> }


        </div>
             
                
    )
}

export default SingleColor;
