// App.tsx
import React from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigator from './TabNavigator';
import {PaperProvider} from 'react-native-paper';

import store from './src/store';
import {fetchUpcomingMovies} from './src/redux/slices/moviesSlice'; // Import your async thunk

const App = () => {
  React.useEffect(() => {
    store.dispatch(fetchUpcomingMovies());
  }, []);

  return (
    <Provider store={store}>
      <PaperProvider>
        <NavigationContainer>
          <TabNavigator />
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  );
};

export default App;
