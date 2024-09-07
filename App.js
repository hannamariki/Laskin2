import { StatusBar } from 'expo-status-bar'; 
import React, { useState } from 'react'; 
import {SafeAreaView, StyleSheet, TextInput, Button, View, FlatList, Text} from 'react-native'; 

export default function App() { 
  const [result, setResult] = useState(' '); //tähän tulee tulos
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [history, setHistory] = useState([]); //lisätään lista

  const addTogether = () => { 
    const num1 = parseInt(number1) || 0; 
    const num2 = parseInt(number2) || 0;  
    const lisays = num1 + num2;
    setResult(lisays.toString()); 
    setHistory([...history, { key: `${number1} + ${number2} = ${lisays}` }]); //lisätään listaan tulos
  };

  const minusTogether = () => { 
    const num1 = parseInt(number1) || 0;  
    const num2 = parseInt(number2) || 0; 
    const erotus = num1 - num2;
    setResult(erotus.toString());
    setHistory([...history, { key: `${number1} - ${number2} = ${erotus}` }]);//lisätään listaan erotus
  };

  return ( 
    <SafeAreaView style={styles.container}>   
      <Text style={styles.title}> 
        Result: {result}
      </Text>
      <TextInput
        style={styles.input}
        onChangeText={text => setNumber1(text)} 
        value={number1}
        placeholder="Anna numero"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        onChangeText={text => setNumber2(text)}
        value={number2}
        placeholder="Anna Toinen numero"
        keyboardType="numeric"
      />

      <View>
        <View style={styles.fixToText}> 
          <Button
            title="+"
            onPress={addTogether} 
          />
          <Button
            title="-"
            onPress={minusTogether} 
          /> 
        </View>
      </View>

      <Text style={styles.historyTitle}>History</Text>

      <FlatList
        data={history}
        renderItem={({ item }) => <Text style={styles.historyItem}>{item.key}</Text>} //FatList componentti
      />
    </SafeAreaView>
  ); 
}

const styles = StyleSheet.create({ 
  container: { 
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 16,
    marginTop: 50, 
  },
  input: { 
    height: 40,
    margin: 10,
    borderWidth: 1,
    padding: 10,
    textAlign: "center",
  },
  button: { 
    height: 50,
    margin: 10,
    borderWidth: 1,
    padding: 10,
    textAlign: "left",
  },
  title: { 
    textAlign: 'center',
    marginVertical: 0,
  },
  fixToText: { 
    flexDirection: 'row',
    justifyContent: "space-evenly",
  },

  historyTitle: { 
    textAlign: 'center',
    fontSize: 18,
    marginVertical: 20,
    fontWeight: 'bold',
  },
  historyItem: {
    textAlign: 'center',
    padding: 10,
    fontSize: 16,
  },
});