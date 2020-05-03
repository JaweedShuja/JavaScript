import React, {useReducer} from 'react'
import {View, Text, } from 'react-native'
import CounterComponent from './counterComponent.js'
let INCEASE_COUNTER = 15

const reducer = (state, action) => {
  //state === {red:number, green:number, blue:number}
  //action === {colorToChnage:'red' || 'green' || 'blue', amount:15 || -15}

  switch(action.colorToChange){
    case 'red' :
       return state.red + action.amount > 255 || state.red + action.amount < 0
       ? state
       : {...state, red: state.red + action.amount}
    case 'green' :
        return state.green + action.amount > 255 || state.green + action.amount < 0
        ? state
        : {...state, green: state.green + action.amount}
    case 'blue' :
        return state.blue + action.amount > 255 || state.blue + action.amount < 0
        ? state
        : {...state, blue: state.blue + action.amount}
    default :
      return state;

  }
}

const App = () => {
  
  const [state, dispatch] = useReducer(reducer, {red:0, green:0, blue:0})
  const {red, green, blue} = state;

  return <View>
      <CounterComponent 
      onIncrease={() => dispatch({colorToChange:'red', amount:INCEASE_COUNTER})}
      onDecrease={() => dispatch({colorToChange:'red', amount:-1*INCEASE_COUNTER})}
      color="Red"/>
      <CounterComponent 
      onIncrease={() => dispatch({colorToChange:'green', amount:INCEASE_COUNTER})}
      onDecrease={() => dispatch({colorToChange:'green', amount:-1*INCEASE_COUNTER})}
      color="Green"/>
      <CounterComponent 
      onIncrease={() => dispatch({colorToChange:'blue', amount:INCEASE_COUNTER})}
      onDecrease={() => dispatch({colorToChange:'blue', amount:-1*INCEASE_COUNTER})}
      color="Blue"/>

      <View style={{height:150, width:150, backgroundColor:`rgb(${red},${green},${blue})`}}>

      </View>
  </View>
}

export default App
