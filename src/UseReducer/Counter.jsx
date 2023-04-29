import React from 'react';
import { useReducer } from 'react';

const reducerFn = (state, action) => {
    if (action.type === "inc") {
        return {
            ...state,
            count: state.count + action.countValue
        }
    } else if (action.type === "dec") {
        return {
            ...state,
            count: state.count - action.countValue
        }
    } else if(action.type === "reset"){
        return {
            ...state,
            count:action.payload
        }
    }
    return state
}

const Counter = () => {

    const [state, dispatch] = useReducer(reducerFn, { count: 0 })
    return (
        <div style={{ backgroundColor: "red", boxShadow: "0px 0px 10px black", width: "400px", height: "150px", margin: "100px auto", padding: "20px" }}>
            <h2>Count value is {state.count}</h2>
            <button onClick={() => dispatch({
                type: "inc",
                countValue: 5
            })}>Increase Count</button>&nbsp;&nbsp;&nbsp;
            <button onClick={() => dispatch({
                type: "dec",
                countValue: 2
            })}>Decrease Count</button>&nbsp;&nbsp;&nbsp;
            <button onClick={() => dispatch({
                type:"reset",
                payload:0
            })}>Reset Count</button>
        </div>
    );
}

export default Counter;
