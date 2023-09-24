import React, {useState} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import IconButton from './IconButton';

interface SearchInputProps {
  onSearch: (searchText: string) => void;
  onCancel: () => void;
}

const SearchInput: React.FC<SearchInputProps> = ({onSearch, onCancel}) => {
  const [searchText, setSearchText] = useState<string>('');

  const handleTextChange = text => {
    setSearchText(text);
    onSearch(searchText);
  };

  const clearSearch = () => {
    setSearchText('');
    onCancel();
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchInputContainer}>
        <IconButton iconName="search" />
        <TextInput
          style={styles.input}
          placeholder="TV shows, movies and more"
          value={searchText}
          onChangeText={handleTextChange}
        />
        {!!searchText && <IconButton iconName="close" onPress={clearSearch} />}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    backgroundColor: '#EFEFEF',
  },
  searchInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    fontSize: 14,
    height: 52,
    paddingVertical: 8,
    fontWeight: '400',
    borderRadius: 999, // Use a large value to create a circular border
    paddingHorizontal: 16, // Add horizontal padding to the input
  },
});

export default SearchInput;
