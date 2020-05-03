import React, {useReducer} from 'react'
import {Text, View, Button} from 'react-native'
let SEED = 1;

const reducer = (state, action) => {
  switch(action.type){
    case "increase_counter" :
      return {counter: state.counter + action.payload};
    case "dicrease_counter" :
      return {counter: state.counter - action.payload};  
    default :
      return state;
  }
}

const App = () => {

  const [state, dispatch] = useReducer(reducer, {counter:0})
  const { counter } = state

  return <View>
    <Button 
      onPress={() => dispatch({
        type:"increase_counter", 
        payload:SEED
      })}
      title="Increase"
    />
    <Button 
      onPress={() => dispatch({
        type:"dicrease_counter",
        payload:SEED
      })}
      title="Decrease"
    />
    <Text>{counter}</Text>
  </View>
}

export default App
