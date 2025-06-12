import React from 'react'
import { StateContext } from '../../contexts/StateContext/StateContext';
import State from '../../State/State';
import reducer from '../../reducers/stateReducer';

function StateProvider({children}) {
    const [state, dispatch] = React.useReducer(reducer, State);

    const value = React.useMemo(() => {
        return {
            state, dispatch
        }
    })



    return (
        <StateContext.Provider value={value}>
            {children}       
        </StateContext.Provider>
    )
}

export default StateProvider;
