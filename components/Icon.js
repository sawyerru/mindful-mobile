import * as React from 'react';
import {Alert, StyleSheet, TouchableOpacity, Text, View} from 'react-native';
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

function Button({title, name, onPressAddNote}) {
  return (
      <TouchableOpacity style={styles.interactionButton} onPress={() => onPressAddNote(name)}>
        <Icon name={name}  size={30} color="#fff" />
      </TouchableOpacity>
  )
}

function myFunc(){
  Alert.alert("Button Pressed");
}
const styles = StyleSheet.create({
  interactionButton: {
    borderWidth:1,
    borderColor:'rgba(0,0,0,0.2)',
    alignItems:'center',
    justifyContent:'center',
    width:70,
    position: 'absolute',
    bottom: 10,
    right: 10,
    height:70,
    backgroundColor:'#2ecc71',
    borderRadius:100,
    alignSelf: 'flex-end'
  }

})
export {Icon, Button}
