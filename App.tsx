import React from 'react';
import theme from './src/theme';
import { ThemeProvider } from 'styled-components';
import { StatusBar } from 'react-native';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { Loading } from '@components/Loading';
import { Routes } from './src/routes/AppRoutes';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';


export default function App() {
  const [fontsLoaded] = useFonts({Roboto_400Regular, Roboto_700Bold});

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor="transparent"
          translucent
        />
        {fontsLoaded ? <Routes/> : <Loading/> }
      </ThemeProvider>
    </Provider>
  );
}


