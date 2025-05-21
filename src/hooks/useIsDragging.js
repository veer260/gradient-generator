import React from "react";
function useIsDragging(elementRef) {
    const [isDragging, setIsDragging] = React.useState(false);

    React.useEffect(() => {
        const element = elementRef.current;
        function handleMouseDown() {
                setIsDragging(true);
        }
        if(element) {
            element.addEventListener('mousedown', handleMouseDown)
            return () => {
              element.removeEventListener('mousedown', handleMouseDown);  
            }
        }

    },[]);

    React.useEffect(() => {
        const element = elementRef.current;

        function handleMouseUp() {
            console.log('handlemouseup called');
            setIsDragging(false);
        }
          if(element) {
            element.addEventListener('mouseup', handleMouseUp)
            return () => {
              element.removeEventListener('mouseup', handleMouseUp);  
            }
        }

    },[]);
    return isDragging;

}

export default useIsDragging;