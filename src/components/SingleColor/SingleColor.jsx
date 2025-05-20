import React from 'react'
import styles from './SingleColors.module.css';
import ColorPicker from '../ColorPicker/ColorPicker';

function SingleColor({color, colorId, openId, setId}) {
    // const [isPickerVisible, setIsPickerVisible] = React.useState(false);
    
    function handleClick() {
        setIsPickerVisible(!isPickerVisible);
    }

    return (
             <button onClick={() => setId(colorId)}>
                <div className={styles.colorDiv}></div>
                {openId == colorId && <ColorPicker></ColorPicker>}
            </button> 
                
    )
}

export default SingleColor;
