import chroma from 'chroma-js';
import { cubic } from './calcPercentage'; 
import { BOXSIZE } from '../constants/Constants';

// export function getGradient(colorsArr, steps, noOfColors) {
//     let gradient = '';
//     // const noOfColors = colorsArr.length;
//     const middleSteps = steps - noOfColors;
//     const noOfGaps = noOfColors-1;
//     const eachStep = Math.trunc(middleSteps/noOfGaps);
// //   console.log({eachStep});
//     let extras = middleSteps % noOfGaps;
//     const stepsArr = [];
//     for(let i =0; i < noOfGaps; i++) {
//         stepsArr[i] = extras > 0 ? eachStep+1 : eachStep;
//         extras -= 1;
//     }

//     let curr;
//     let next;

//     for(let i = 0; i < noOfColors-1; i++) {
//         curr = colorsArr[i];
//         next = colorsArr[i+1];
//         const hueStep = next.hue > curr.hue ? Math.trunc((next.hue - curr.hue)/stepsArr[i]) : Math.trunc((next.hue + 360 - curr.hue)/stepsArr[i]) ;
//         // const satStep = curr.sat > next.sat ? Math.trunc((curr.sat - next.sat)/stepsArr[i]) : Math.trunc((next.sat - curr.sat)/stepsArr[i]);
//         // const satStep = curr.sat > next.sat ? Math.trunc((curr.sat - next.sat)/stepsArr[i]) : Math.trunc((next.sat - curr.sat)/stepsArr[i]);
//         // const hueStep =  Math.trunc((next.hue - curr.hue)/stepsArr[i]);
//         const satStep = Math.trunc((next.sat - curr.sat)/stepsArr[i]);
//         const lightStep = Math.trunc((next.light - curr.light)/stepsArr[i]);

//         gradient += `hsl(${(curr.hue)%360}deg ${(curr.sat)%100}% ${(curr.light)%100}%),`; 
//         let hue = curr.hue;
//         let sat = curr.sat;
//         let light = curr.light;


//         for(let j = 0; j < stepsArr[i]; j++) {
//             gradient += `hsl(${(hue + hueStep)%360}deg ${(sat + satStep)%100}%  ${(light + lightStep)%100}%),`;
//             hue += hueStep;        
//             sat += satStep;        
//             light += lightStep;        
//         }
//     }

//    gradient += `hsl(${(next.hue)%360}deg ${(next.sat)%100}% ${(next.light)%100}%)`; 

//     console.log({gradient});

//     return gradient;
// }



export function generateMainGradient(colorsArr, numOfVisibleColors, curvePoints) {
    const colors = [];
    const [P0, P1, P2, P3] = curvePoints;
    const getPercent = cubic(P0, P1, P2, P3);
    // console.log({P0, P1, P2, P3});
    const percentages = [];

    for(let t = 0; t <= 1; t = t + 1 / 11){
        percentages.push(getPercent(t)*100/BOXSIZE);
    }

    // console.log(percentages);
    // console.log(getPercent(0.5));


    for(let i = 0; i < numOfVisibleColors; i++) {
        colors.push(`hsl(${colorsArr[i].hue}deg ${colorsArr[i].sat}% ${colorsArr[i].light}%)`)
    }

    const result = chroma.scale(colors).mode('lch').colors(12);

    let gradient = '';
    for(let i = 0; i<result.length-1; i++){
        gradient += `${result[i].toUpperCase()} ${Math.trunc(percentages[i])}%,`
    }
    gradient += `${result[result.length -1]} 100%`;

    return gradient;
}





// export function getGradient(colorsArr, steps, noOfColors) {
//   let gradient = '';
//   const middleSteps = steps - noOfColors;
//   const noOfGaps = noOfColors - 1;
//   const eachStep = Math.floor(middleSteps / noOfGaps);
//   let extras = middleSteps % noOfGaps;

//   // Distribute remaining steps
//   const stepsBetweenColors = Array(noOfGaps).fill(eachStep);
//   for (let i = 0; i < extras; i++) {
//     stepsBetweenColors[i]++;
//   }

//   for (let i = 0; i < noOfColors - 1; i++) {
//     const start = colorsArr[i];
//     const end = colorsArr[i + 1];
//     const stepsInSegment = stepsBetweenColors[i] + 1; // Include start and end

//     // Add start color
//     gradient += `hsl(${start.hue}deg ${start.sat}% ${start.light}%),`;

//     // Interpolate intermediate colors
//     for (let j = 1; j < stepsInSegment; j++) {
//       const ratio = j / stepsInSegment;
//       const hue = interpolateHue(start.hue, end.hue, ratio);
//       const sat = interpolate(start.sat, end.sat, ratio);
//       const light = interpolate(start.light, end.light, ratio);

//       gradient += `hsl(${Math.round(hue)}deg ${Math.round(sat)}% ${Math.round(light)}%),`;
//     }
//   }

//   // Add last color
//   gradient += `hsl(${colorsArr[noOfColors - 1].hue}deg ${colorsArr[noOfColors - 1].sat}% ${colorsArr[noOfColors - 1].light}%)`;

//   return gradient;
// }

// // Linear interpolation for saturation/lightness
// function interpolate(start, end, ratio) {
//   return start + (end - start) * ratio;
// }

// // Hue interpolation with wraparound
// function interpolateHue(start, end, ratio) {
//   const diff = ((end - start + 180) % 360) - 180;
//   return (start + diff * ratio + 360) % 360;
// }