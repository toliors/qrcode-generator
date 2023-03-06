import React, { useState } from 'react';
import { SafeAreaView, View, StyleSheet, TextInput, Button } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

export default function App() {

  const [inputText, setInputText] = useState('');
  const [qrValue, setQrValue] = useState('');

  return (
    <SafeAreaView style = {{flex: 1}}>
      <View style = {styles.container}>
        <QRCode value = {qrValue ? qrValue: 'santos futebol clube'} size = {269}/>
      </View>
      <View style = {styles.container}>
        <TextInput
          style = {styles.textInput}
          placeholder = 'Enter text here'
          value = {inputText}
          onChangeText = {(inputText) => setInputText(inputText)}
        />
        <Button onPress = {() => setQrValue(inputText)} title = 'Generate QR Code'/>
      </View>
    </SafeAreaView>
  );
  
}

const styles = StyleSheet.create({

  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},

  textInput: {
    height: 40,
    padding: 20,
    marginHorizontal: 50,
    borderWidth: 2,
    borderRadius: 20
  }

});
