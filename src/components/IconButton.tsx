import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  GestureResponderEvent,
} from 'react-native';
import {SearchIcon, CloseIcon, BackIcon} from '../Assets';

const IconComponents: Record<string, React.ReactNode> = {
  search: <SearchIcon />,
  close: <CloseIcon />,
  back: <BackIcon />,
};

interface IconButtonProps {
  iconName: string;
  onPress: (event: GestureResponderEvent) => void;
}

const IconButton: React.FC<IconButtonProps> = ({iconName, onPress}) => {
  const iconComponent = IconComponents[iconName];

  if (!iconComponent) {
    return null;
  }

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {iconComponent}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default IconButton;
