import React, {useState, useEffect, useCallback} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Platform,
  Text,
  StatusBar,
  FlatList,
  View,
} from 'react-native';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import SearchInput from '../components/SearchInput';
import Card from '../components/MovieCard';
import IconButton from '../components/IconButton';

export const WatchScreen = () => {
  const {navigate} = useNavigation();

  const {upcomingMovies, status, error} = useSelector(state => state.movies);

  const [searchText, setSearchText] = useState('');
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [showSearch, setShowSearch] = useState(false);

  const filterMovies = useCallback(() => {
    const filtered = (upcomingMovies?.results || []).filter(movie =>
      movie.title.toLowerCase().includes(searchText.toLowerCase()),
    );
    setFilteredMovies(filtered);
  }, [searchText, upcomingMovies?.results]);

  useEffect(() => {
    filterMovies();
  }, [filterMovies, upcomingMovies]);

  const onCancel = () => {
    setSearchText('');
    setShowSearch(false);
  };

  const handleCardPress = data => {
    navigate('MovieDetails', {movieDetail: data});
  };

  const renderItem = ({item}) => (
    <Card
      key={item.id}
      title={item.title}
      imageUrl={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
      onPressCard={() => handleCardPress(item)}
    />
  );

  const handleSearch = () => {
    setShowSearch(!showSearch);
  };

  if (status === 'loading') {
    return (
      <View style={styles.centeredContainer}>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (status === 'failed') {
    return (
      <View style={styles.centeredContainer}>
        <Text>Error: {error}</Text>
      </View>
    );
  }

  if (
    !upcomingMovies ||
    !upcomingMovies.results ||
    upcomingMovies.results.length === 0
  ) {
    return (
      <View style={styles.centeredContainer}>
        <Text>No upcoming movies available.</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      {showSearch ? (
        <SearchInput
          onSearch={text => {
            setSearchText(text);
            filterMovies();
          }}
          value={searchText}
          onCancel={onCancel}
        />
      ) : (
        <View style={styles.watchContainer}>
          <Text style={styles.watchTitle}>Watch</Text>
          <IconButton iconName="search" onPress={handleSearch} />
        </View>
      )}

      <FlatList
        data={filteredMovies}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  watchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    alignItems: 'center',
  },
  watchTitle: {
    color: '#202C43',
    fontSize: 16,
    fontWeight: '500',
  },
  centeredContainer: {flex: 1, alignItems: 'center', justifyContent: 'center'},
});
