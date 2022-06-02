import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { AccessibilityInfo, StyleSheet, Text, View, TextInput, SafeAreaView} from 'react-native';

export default function App() {

  console.reportErrorsAsExceptions = false;

  const [text, setText] = useState('')
  const [number, setNumber] = useState('') 

  // const [apiData, setApiData] = useState('')

  // useEffect(() => {
  //   // declare the async data fetching function
  //   const fetchData = async () => {
  //     // get the data from the api
  //     const data = await fetch('https://mavely.top/')
  //     .then(r=>r.json())
  //     .then(setApiData)
  //     console.log(apiData)
  //     // convert data to json
  //     // const json = await data.json();
  //     // return json;
  //   }
  // },[]);

  const onChangeText = (e) => {
    setText(e.target.value)
  }

  const onChangeNumber = (e) => {
    setNumber(e.target.value)
  }

  console.log(text)
  console.log(number)

  return (
    <>
    <View style={styles.container}>
      <Text>Maverly Search Assessment</Text>
      <StatusBar style="auto" />
    </View>

    
    <TextInput
      style={styles.container}
      onChangeText={(e)=> onChangeText(e)}
      placeholder='something text'
      type='text'
    />
    <TextInput
      style={styles.container}
      onChangeText={(e)=> onChangeNumber(e)}
      placeholder="something number"
      keyboardType="numeric"
      type='number'
    />
    
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
