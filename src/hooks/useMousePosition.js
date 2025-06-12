import React from 'react';
function useMousePosition(containerRef) {
    const [coordinates, setCoordinates] = React.useState({x: 0, y: 0});

    React.useEffect(() => {
        const container = containerRef.current;
        function handleMouseMove(e) {

            const newCordinate = {
                x: e.clientX,
                y: e.clientY,
            }
            setCoordinates(newCordinate);
        }
        container.addEventListener('mousemove', handleMouseMove);
        return  () => {
            container.removeEventListener('mousemove', handleMouseMove);
        }

    },[]);

    return coordinates;
}

export default useMousePosition;