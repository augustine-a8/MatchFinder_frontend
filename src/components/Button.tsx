import React from 'react';
import {Pressable, Text, StyleSheet} from 'react-native';

type ButtonProps = {
  title: string;
  onPressHandler: (event: any) => void;
};

export default function Button({title, onPressHandler}: ButtonProps) {
  return (
    <Pressable onPress={onPressHandler} style={styles.button}>
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    width: '100%',
    backgroundColor: '#000000',
    padding: 15,
    borderRadius: 5,
    marginTop: 20,
  },
  title: {color: '#ffffff', textAlign: 'center'},
});
