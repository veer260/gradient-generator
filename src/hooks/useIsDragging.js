import React from "react";
function useIsDragging(elementRef) {
    const [isPressed, setIsPressed] = React.useState(false);
    const [isDragging, setIsDragging] = React.useState(false);

    React.useEffect(() => {
        const element = elementRef?.current;
        function handleMouseDown() {
          console.log('handle mouse down in isdragging');
          setIsPressed(true);
        }
        if(element) {
            element.addEventListener('mousedown', handleMouseDown)
            return () => {
              element.removeEventListener('mousedown', handleMouseDown);  
            }
        }
    },[]);
     React.useEffect(() => {
        const element = elementRef?.current;
        function handleMouseMove() {
                if(isPressed) {
                  setIsDragging(true);
                };
        }
        if(element) {
            element.addEventListener('mousemove', handleMouseMove)
            return () => {
              element.removeEventListener('mousemove', handleMouseMove);  
            }
        }

    },[isPressed]);

    React.useEffect(() => {
        const element = elementRef?.current;
        console.log(element);

        function handleMouseUp() {
            console.log('handlemouseup called');
            setIsPressed(false);
            setIsDragging(false);
        }
          if(element) {
            element.addEventListener('mouseup', handleMouseUp, {capture: true} )
            return () => {
              element.removeEventListener('mouseup', handleMouseUp, {capture: true});  
            }
        }
    },[]);
    return isDragging;
}

export default useIsDragging;