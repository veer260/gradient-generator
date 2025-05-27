import React from 'react';
import styles from './ColorPicker.module.css';
import HuePicker from '../HuePicker/HuePicker';
import usePlaceChild from '../../hooks/usePlaceChild';

function ColorPicker() {
    const [color, setColor] = React.useState({
        hue: "",
        sat: "",
        light: ""
    });

    const wrapperRef = React.useRef();
    const btnRef = React.useRef();
    const btnPos = usePlaceChild(wrapperRef);
    console.log(btnPos);


    function handleHueChange(newHue) {
        setColor({
            ...color,
            hue: newHue
        });
    }


    React.useEffect(() => {
        btnRef.current.style.top = `${btnPos.y}px`;
        btnRef.current.style.left = `${btnPos.x}px`;
        const newColor = {
            hue: '100',
            sat: `${Math.trunc((btnPos.x/150)*100)}`,
            light: `${Math.trunc(100 -(btnPos.y/150)*100)}`
        }
        setColor(newColor);
        return () => {}
    },[btnPos]);

    return (
        <>
         <div className={styles.pickerContainer}>
            <div ref={wrapperRef} className={styles.wrapper}>
                <div className={styles.layer1}></div>
                <div className={styles.layer2}></div> 
                <button ref={btnRef} className={styles.btn} ></button>
            </div>
            
            <HuePicker color={color} onHueChange={handleHueChange} />
        </div>
        </>       
    )
}

export default ColorPicker;



















    // const isDragging = useIsDragging(wrapperRef);
    // React.useEffect(() => {
    //     const elem = wrapperRef.current;

    //     function handleMouseMove(e) {
    //        const {left, top} = elem.getBoundingClientRect();
    //             const x = e.clientX - left;
    //             const y = e.clientY - top;

    //             const newBtnPos = {
    //                 x, y
    //             }
    //             setBtnPos(newBtnPos);
    //     }
    //     if(isDragging) {
    //         elem.addEventListener('mousemove', handleMouseMove);
    //         return () =>{
    //             elem.removeEventListener('mousemove', handleMouseMove);
    //         }
    //     }
    // })

    // React.useEffect(() => {
    // const wrapper = wrapperRef.current;
    //     if(wrapper){
    //         function handleMouseDown(e) {
    //             const {left, top} = wrapper.getBoundingClientRect();
    //             const x = e.clientX - left;
    //             const y = e.clientY - top;

    //             const newBtnPos = {
    //                 x, y
    //             }
    //             setBtnPos(newBtnPos);
    //         }

    //     wrapper.addEventListener('mousedown', handleMouseDown);
        
    //     return () => {
    //         wrapper.removeEventListener('mousedown', handleMouseDown);
    //     }
    //     }
    // }, []);
     // Add wrapperRef to dependencies



         // const isDragging = useIsDragging(wrapperRef);
    // React.useEffect(() => {
    //     const elem = wrapperRef.current;

    //     function handleMouseMove(e) {
    //        const {left, top} = elem.getBoundingClientRect();
    //             const x = e.clientX - left;
    //             const y = e.clientY - top;

    //             const newBtnPos = {
    //                 x, y
    //             }
    //             setBtnPos(newBtnPos);
    //     }
    //     if(isDragging) {
    //         elem.addEventListener('mousemove', handleMouseMove);
    //         return () =>{
    //             elem.removeEventListener('mousemove', handleMouseMove);
    //         }
    //     }
    // })

    // React.useEffect(() => {
    // const wrapper = wrapperRef.current;
    //     if(wrapper){
    //         function handleMouseDown(e) {
    //             const {left, top} = wrapper.getBoundingClientRect();
    //             const x = e.clientX - left;
    //             const y = e.clientY - top;

    //             const newBtnPos = {
    //                 x, y
    //             }
    //             setBtnPos(newBtnPos);
    //         }

    //     wrapper.addEventListener('mousedown', handleMouseDown);
        
    //     return () => {
    //         wrapper.removeEventListener('mousedown', handleMouseDown);
    //     }
    //     }
    // }, []);
     // Add wrapperRef to dependencies