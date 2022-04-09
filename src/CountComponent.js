import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    View,
    TextInput
  } from 'react-native'; 
import React from 'react'
import { useEffect } from 'react/cjs/react.production.min';

const CountComponent = (props) => {

    let wordsToShow = props.value.split(' ').length;
    const lastChar =  props.value.charAt(props.value.length - 1)
    if(lastChar==' '){ wordsToShow = wordsToShow-1}
    const charactersToShow = props.value.length
    if(charactersToShow == 0){ wordsToShow = 0}
    const numbers = props.value.match(/\d+/g);
    let numToShow = 0
    if (numbers) {
    numToShow = numbers.join("").length;
  }
  return (
    <SafeAreaView>

            <View
      style={{
        backgroundColor: "white",
        margin:10,
        borderRadius: 10,
        elevation: 5,
        padding: 10
        
      }}>
        <View>
        <Text>Paragraph</Text>
        </View>
          <View style={styles.contentBox}>
          <Text style={{fontFamily: "Poppins-SemiBold"}}>{props.value}</Text>
          </View>
          
          <View style={styles.characterCountBox}>
              {props.words? <Text>{wordsToShow} words</Text>: null}
              {props.characters? <Text>{charactersToShow} characters</Text>: null}
              {props.digits? <Text>{numToShow} digits</Text>: null}
          </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  contentBox:{
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderTopColor: "gray",
    borderBottomColor: "gray",
    marginTop: 5,
    marginBottom: 5,
    padding: 10,
    
  },

  characterCountBox:{
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  }
})

export default CountComponent