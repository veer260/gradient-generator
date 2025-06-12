import React from "react";
import useIsDragging from "./useIsDragging";
function usePlaceChild(containerRef, initialState, triggerRef = undefined) {
    const isDragging = useIsDragging(triggerRef);
    const [pos, setPos] = React.useState(() => {
        return {...initialState,isDragging}
    });


    React.useEffect(() => {
        const container = containerRef.current;
        function handleMousedown(e) {
            const left = e.clientX - container.getBoundingClientRect().left;
            const top = e.clientY - container.getBoundingClientRect().top;

            setPos({
                isDragging,
                x: left,
                y: top
            });
        }
        if(container) {
            container.addEventListener('mousedown', handleMousedown);

            return () => {
                container.removeEventListener('mousedown', handleMousedown);
            }
        }
    }, [isDragging]);

    React.useEffect(() => {
        const elem = containerRef?.current;
        function handleMouseMove(e) {
            const {left, top, width, height} = elem.getBoundingClientRect();        //    if(e.clientX > )
            let x = e.clientX - left;
            let y = e.clientY - top;

            if(x < 0) {
                x = 0;
            }else if( x > width) {
                x = width;
            }
            
            if(y < 0) {
                y = 0;
            }else if( y > height) {
                y = height;
            }

            
            const newBtnPos = {
                isDragging,
                x, y
            }
            setPos(newBtnPos);
        }
        if(isDragging) {
            elem.addEventListener('mousemove', handleMouseMove );
            return () =>{
                elem.removeEventListener('mousemove', handleMouseMove);
            }
        }
    },[isDragging]);

    React.useEffect(() => {
        const elem = containerRef?.current;
        function handleMouseUp(e) {
            const {left, top, width, height} = elem.getBoundingClientRect();        //    if(e.clientX > )
            let x = e.clientX - left;
            let y = e.clientY - top;

            if(x < 0) {
                x = 0;
            }else if( x > width) {
                x = width;
            }
            
            if(y < 0) {
                y = 0;
            }else if( y > height) {
                y = height;
            }

            
            const newBtnPos = {
                isDragging: false,
                x, y
            }
            console.log({newBtnPos});
            setPos(newBtnPos);
        }
            elem.addEventListener('mouseup', handleMouseUp,{ capture: true } );
            return () =>{
                elem.removeEventListener('mouseup', handleMouseUp, { capture: true });
            }
    },[isDragging]);



    React.useEffect(() => {

        const elem = containerRef?.current;
        const trigger = triggerRef?.current;
        function handleMouseMove(e) {
            trigger.style.cursor = 'grabbing';
           
        }
        if(isDragging && trigger) {
            elem.addEventListener('mousemove', handleMouseMove );
            return () =>{
                elem.removeEventListener('mousemove', handleMouseMove);
            }
        }
         else if(trigger) {
            trigger.style.cursor = 'grab';
        }
        
    },[]);
    return pos;
}

export default usePlaceChild;