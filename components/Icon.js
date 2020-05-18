import * as React from 'react';
import {Alert, StyleSheet} from 'react-native';
import {FontAwesome} from '@expo/vector-icons';

function Icon(props) {
  return (
    <FontAwesome
        name={props.name}
        size={props.size}
        color={props.color}
    />
  );
}

function Button(props) {
  return (
      <FontAwesome.Button
        raised
        name={props.name}
        size={props.size}
        backgroundColor={props.backgroundColor}
        style={styles.interactionButton}
        onPress={myFunc}
      />
  )
}

function myFunc(){
  Alert.alert("Button Pressed");
}
const styles = StyleSheet.create({
  interactionButton: {
    padding: 10,
    borderRadius: 25,
    width: 60,
  }

})
export {Icon, Button}
