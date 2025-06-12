import { produce } from "immer";
function reducer(currState, action) {
    return produce(currState, (draftState) => {
        switch(action.type) {
            case 'ADD-COLOR': {
                draftState.numOfVisibleColors += 1;
                break;
            }
            case 'DELETE-COLOR': {
                draftState.colors.splice(action.index, 1);
                draftState.numOfVisibleColors -=1;
                draftState.colors.push({
                    hue: 300,
                    sat: 40,
                    light: 55,
                    id: action.newId
                });
                break;
            }
            case "CHANGE-COLOR": {
                
                draftState.colors[action.index].hue = action.color.hue;
                draftState.colors[action.index].sat = action.color.sat;
                draftState.colors[action.index].light = action.color.light;
                break;
            }

            case "CHANGE-ANGLE": {
                draftState.angle = action.newAngle;
                break;
            }

            case "POINTS-CHANGE": {
                draftState.curvePoints[1] = action.points[0];
                draftState.curvePoints[2] = action.points[1];
                break;
            }
        }
    })

}

export default reducer;