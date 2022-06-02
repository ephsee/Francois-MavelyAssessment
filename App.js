import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { AccessibilityInfo ,StyleSheet, Text, View } from 'react-native';

export default function App() {

  console.reportErrorsAsExceptions = false;

  const [apiData, setApiData] = useState('')

  // useEffect(()=>{
  //   fetch('https://mavely.top/', {mode: 'no-cors'}) // graphql
  //   .then(r=>r.json())
  //   .then(setApiData)
  // },[])

  useEffect(() => {
    // declare the async data fetching function
    const fetchData = async () => {
      // get the data from the api
      const data = await fetch('https://mavely.top/')
      .then(r=>r.json())
      .then(setApiData)
      // convert data to json
      // const json = await data.json();
      // return json;
    }
  })

    console.log(apiData)

//   useEffect(() => {
//     fetch('https://mavely.top/', {mode: 'no-cors'})
//     .then(r => {
//       if (r.ok) {
//           r.json().then(setApiData)
//       }
//   })
// }, [])

  return (
    <View style={styles.container}>
      <Text>Maverly Search Assessment</Text>
      <StatusBar style="auto" />
    </View>
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
