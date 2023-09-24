import React from 'react';
import {
  TouchableOpacity,
  Text,
  ViewStyle,
  TextStyle,
  StyleSheet,
} from 'react-native';

interface ButtonProps {
  label: string;
  onPress: () => void;
  buttonStyle?: ViewStyle;
  labelStyle?: TextStyle;
  type?: 'default' | 'genre'; // Add a type prop
}

const Button: React.FC<ButtonProps> = ({
  label,
  onPress,
  buttonStyle,
  labelStyle,
  type = 'default',
}) => {
  const buttonSize =
    type === 'genre'
      ? {width: 40, height: 20, borderRadius: '50%'}
      : {width: 243, height: 50};

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, buttonSize, buttonStyle]}>
      <Text style={[styles.buttonText, labelStyle]}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'blue',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#61C3F2',
    borderWidth: 1,
    marginTop: 10,
    paddingHorizontal: 10,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '600',
  },
});

export default Button;
