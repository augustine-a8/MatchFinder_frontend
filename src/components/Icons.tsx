import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';

type PressProps = {
  onPress: () => void;
};

export const ShowPassword = ({onPress}: PressProps) => {
  return <Icon name="eye" size={20} color="#000000" onPress={onPress} />;
};

export const HidePassword = ({onPress}: PressProps) => {
  return <Icon name="eye-slash" size={20} color="#000000" onPress={onPress} />;
};

export const Lock = () => {
  return <Icon name="lock" size={20} color="#000000" />;
};

export const Envelope = () => {
  return <Icon name="envelope" size={20} color="#000000" />;
};

export const Back = ({onPress}: PressProps) => {
  return (
    <Icon name="chevron-left" size={30} color="#000000" onPress={onPress} />
  );
};
