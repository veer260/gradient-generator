import React from "react";
import useIsDragging from "./useIsDragging";
function usePlaceChild(containerRef) {
    const [pos, setPos] = React.useState({
        x: 50, 
        y: 50
    });
    const isDragging = useIsDragging(containerRef);

    React.useEffect(() => {
        const container = containerRef.current;
        function handleMousedown(e) {
            const left = e.clientX - container.getBoundingClientRect().left;
            const top = e.clientY - container.getBoundingClientRect().top;

            setPos({
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
    }, []);

    React.useEffect(() => {
        const elem = containerRef.current;

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
                    x, y
                }
                setPos(newBtnPos);
        }
        if(isDragging) {
            elem.addEventListener('mousemove', handleMouseMove);
            return () =>{
                elem.removeEventListener('mousemove', handleMouseMove);
            }
        }
    })
    return pos;
}

export default usePlaceChild;