import { BOXSIZE } from "../constants/Constants";

const State = {
    numOfVisibleColors: 2,
    colors: [{
        hue: 250,
        sat: 70,
        light: 50,
        id: 1
    }, {
        hue: 300,
        sat: 70,
        light: 30,
        id: 2

    },{
         hue: 250,
        sat: 70,
        light: 50,
        id: 3
    },{
         hue: 250,
        sat: 70,
        light: 50,
        id: 4
    },{
         hue: 250,
        sat: 70,
        light: 50,
        id: 5
    }],
    angle: 0,

    curvePoints: [
    {
        x: 8,
        y: BOXSIZE+8 
    },
    {
        x: 0,
        y: 0
    },
    {
        x: 0,
        y: 0
    },
    {
        x: BOXSIZE-8,
        y: 8
    }
]  
}

export default State;