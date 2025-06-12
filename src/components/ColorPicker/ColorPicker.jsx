import React from 'react';
import styles from './ColorPicker.module.css';
import HuePicker from '../HuePicker/HuePicker';
import usePlaceChild from '../../hooks/usePlaceChild';
import { StateContext } from '../../contexts/StateContext/StateContext';


function ColorPicker({index}) {
    const {state, dispatch} = React.useContext(StateContext);

     const [color, setColor] = React.useState(() => {
        // console.log({state});
        return {
         hue: state?.colors[index]?.hue || 0,
    sat: state.colors[index]?.sat || 50,
    light: state.colors[index]?.light || 50,
  }

     } 
   );


    const wrapperRef = React.useRef();
    const btnRef = React.useRef();
    // console.log({x: ((color.sat)/100)*150, y: 150 - (color.light/100)*150});
    
    const btnPos = usePlaceChild(wrapperRef, {
        x: ((color.sat)/100)*150, 
        y: 150 - (color.light/100)*150
    }, btnRef);

    function handleHueChange(newHue) {
        setColor({
            ...color,
            hue: newHue
        });
         dispatch({
            type: "CHANGE-COLOR",
            color: {
                ...color,
                hue: newHue,
            },
            index
        }); 
    }

    React.useEffect(() => {
        btnRef.current.style.top = `${btnPos.y}px`;
        btnRef.current.style.left = `${btnPos.x}px`;
        const newColor = {
            ...color,
            sat: Math.trunc((btnPos.x/150)*100),
            light: Math.trunc(100 -(btnPos.y/150)*100)
        }
        setColor(newColor);
          dispatch({
            type: "CHANGE-COLOR",
            color: {
                ...newColor,
            },
            index
        })
       
        return () => {}
    },[btnPos]);


    return (
        <>
         <div className={styles.pickerContainer}>
            <div ref={wrapperRef} className={styles.wrapper}>
                <div className={styles.layer1}></div>
                <div style={{
                    '--hue': `${color.hue}deg`,
            }} className={styles.layer2}></div> 
                <button ref={btnRef}  className={styles.btn} ></button>
            </div>        
            <HuePicker color={color} onHueChange={handleHueChange} />
        </div>
        </>       
    )
}

export default ColorPicker;




