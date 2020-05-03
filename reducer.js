import React, {useReducer} from 'react'
import {View, Text, } from 'react-native'
import CounterComponent from './counterComponent.js'
let INCEASE_COUNTER = 15

const reducer = (state, action) => {
  //state === {red:number, green:number, blue:number}
  //action === {type:'change_red' || 'change_green' || 'change_blue', payload:15 || -15}

  switch(action.type){
    case 'change_red' :
       return state.red + action.payload > 255 || state.red + action.payload < 0
       ? state
       : {...state, red: state.red + action.payload}
    case 'change_green' :
        return state.green + action.payload > 255 || state.green + action.payload < 0
        ? state
        : {...state, green: state.green + action.payload}
    case 'change_blue' :
        return state.blue + action.payload > 255 || state.blue + action.payload < 0
        ? state
        : {...state, blue: state.blue + action.payload}
    default :
      return state;

  }
}

const App = () => {
  
  const [state, dispatch] = useReducer(reducer, {red:0, green:0, blue:0})
  const {red, green, blue} = state;

  return <View>
      <CounterComponent 
      onIncrease={() => dispatch({type:'change_red', payload:INCEASE_COUNTER})}
      onDecrease={() => dispatch({type:'change_red', payload:-1*INCEASE_COUNTER})}
      color="Red"/>
      <CounterComponent 
      onIncrease={() => dispatch({type:'change_green', payload:INCEASE_COUNTER})}
      onDecrease={() => dispatch({type:'change_green', payload:-1*INCEASE_COUNTER})}
      color="Green"/>
      <CounterComponent 
      onIncrease={() => dispatch({type:'change_blue', payload:INCEASE_COUNTER})}
      onDecrease={() => dispatch({type:'change_blue', payload:-1*INCEASE_COUNTER})}
      color="Blue"/>

      <View style={{height:150, width:150, backgroundColor:`rgb(${red},${green},${blue})`}}>

      </View>
  </View>
}

export default App
