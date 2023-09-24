import React from 'react';
import {
  View,
  ImageBackground,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Button from '../components/Button';
import IconButton from '../components/IconButton';

import {formatDate} from '../utils/dateUtils';

interface MovieDetailsScreenProps {
  route: {
    params: {
      movieDetail?: any;
    };
  };
}

export const MovieDetailsScreen: React.FC<MovieDetailsScreenProps> = ({
  route,
}) => {
  const {movieDetail} = route.params || {};

  const navigation = useNavigation();

  const onGetTicketsPress = () => {};

  const onWatchTrailerPress = () => {
    // navigation.navigate('VideoPlayerScreen');
  };

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: `https://image.tmdb.org/t/p/w500${movieDetail.poster_path}`,
        }}
        resizeMode="cover"
        style={styles.backgroundImage}>
        <TouchableOpacity
          onPress={handleBackPress}
          style={styles.touchableContainer}>
          <View style={styles.backContainer}>
            <IconButton iconName="back" color={'#fff'} />
            <Text style={styles.watchBackTitle}>Watch</Text>
          </View>
        </TouchableOpacity>
        <Text style={styles.releaseDateText}>
          In Theaters {formatDate(movieDetail.release_date)}
        </Text>
        <View style={styles.buttonContainer}>
          <Button
            label="Get Tickets"
            onPress={onGetTicketsPress}
            buttonStyle={{backgroundColor: '#61C3F2'}}
          />
          <Button
            label="Watch Trailer"
            onPress={onWatchTrailerPress}
            buttonStyle={{backgroundColor: 'transparent'}}
          />
        </View>
      </ImageBackground>
      <View style={styles.infoContainer}>
        <Text style={styles.genresText}>Genres</Text>
        <Button
          label="Genre"
          onPress={() => {}}
          buttonStyle={styles.genreButton}
        />
        <View style={styles.divider} />
        <View>
          <Text style={styles.overviewTitle}>Overview</Text>
          <Text style={styles.overviewPara}>{movieDetail.overview}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  movieTitle: {
    color: '#000',
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 10,
  },

  releaseDateText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 10,
  },
  buttonContainer: {
    marginBottom: 20,
    marginTop: 10,
  },
  infoContainer: {
    flex: 1,
    padding: 20,
  },
  genresText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#202C43',
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    marginVertical: 10,
  },
  overviewTitle: {
    color: '#202C43',
    fontSize: 16,
    fontWeight: '500',
  },
  overviewPara: {
    color: '#8F8F8F',
    fontSize: 12,
    paddingTop: 14,
    fontWeight: '400',
  },
  touchableContainer: {
    position: 'absolute',
    zIndex: 1,
    top: 10,
    left: 15,
    flexGrow: 0,
  },
  backContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  watchBackTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
  },
  genreButton: {
    backgroundColor: '#15D2BC',
    height: 20,
    width: 62,
  },
  genreButtonText: {
    color: 'white',
    fontSize: 12,
  },
});
