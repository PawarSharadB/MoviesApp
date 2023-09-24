import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

const MovieCard = React.memo(({title, imageUrl, onPressCard}) => {
  return (
    <TouchableOpacity onPress={onPressCard} style={styles.card}>
      <Image
        resizeMode="cover"
        source={{uri: imageUrl}}
        style={styles.cardImage}
      />
      <View style={styles.overlay}>
        <Text style={styles.cardTitle}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'transparent',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    margin: 20,
  },
  cardImage: {
    width: '100%',
    height: 200,
  },
  overlay: {
    position: 'absolute',
    left: 10,
    fontSize: 16,
    color: '#fff',
    fontWeight: '500',
    bottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
  },
});

export default MovieCard;
