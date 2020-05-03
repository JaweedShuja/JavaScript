import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

const App = () => {
  return(
    <View style={{flex:1, backgroundColor:'lightblue'}}>
    <View style={styles.container}>
      <View style={styles.box}>

      </View>
      <View style={styles.box}>

      </View>
      <View style={styles.box}>

      </View>
      <View style={styles.box}>

      </View>

      

      
    </View>
    <View style={{flex:1, justifyContent:'flex-end'}}>
     <Text>Hello</Text> 
    <View style={styles.nav}>

      </View>
      </View>
    </View>
  );
}

export default App

const styles = StyleSheet.create({
  container:{
    borderWidth:1,
    borderColor:'black',
    margin:5,
    flexDirection:'row',
    justifyContent:'space-around',
    
  },
  box:{
    height:75, 
    width:75, 
    borderColor:'black', 
    borderWidth:1
  },
  nav:{
    borderWidth:1, 
    borderColor:'black',
    height:50,
    margin:5,

  }
})
