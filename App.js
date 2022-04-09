import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native'; 
import { useState } from 'react/cjs/react.development';
import CountComponent from './src/CountComponent';





const App = () => {
  
  const [value, setValue] = useState("")
  const [characterCount, setCharacterCount] = useState(0)

  return (
    <SafeAreaView>
      <CountComponent value={value} words={true} digits={true} characters={true}/>
      <View
      style={{
        backgroundColor: "white",
        borderColor: '#000000',
        borderWidth: 1,
        margin:10,
        borderRadius: 10,
        
      }}>
<TextInput style={{textAlignVertical: "top", padding: 5, fontFamily: "Poppins-SemiBold"}}multiline editable numberOfLines={4} value={value} onChangeText={text => setValue(text)}/>
      </View>
      
    </SafeAreaView>
  );
};


export default App;
