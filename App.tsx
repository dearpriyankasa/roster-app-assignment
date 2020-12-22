import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import useCachedResources from './hooks/useCachedResources';
import { Provider } from 'react-redux';
import { configureStore } from "./configureStore";
import { RosterList } from './components/ListComponent';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const store = configureStore();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Provider store={store}>
          <RosterList />
        </Provider>
      </SafeAreaProvider>
    );
  }
}
