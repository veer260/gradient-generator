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
        }
    })

}

export default reducer;