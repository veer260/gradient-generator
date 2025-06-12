const DEFAULT_COLOR = 'hsl(50deg 100% 50%)';
export const generateSparkle = (color = DEFAULT_COLOR) => {
    return {
        createdAt: Date.now(),
        id: String(random(10000, 99999)),
        color,
        size: random(10, 15),

        style: {
            zIndex: 2,
            top: random(-30,40) + '%',
            left: random(-10,90) + '%',
            // top: '-50%',
            // left: '100%',
            
        }

    }
}


const random = (min, max) => {
    return Math.floor(Math.random()*(max-min)) + min;
}