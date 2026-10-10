
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { PortfolioProvider } from './src/context/PortfolioContext';
import AppNavigator from './src/navigation/AppNavigator';

export default function App() {
  return (
    <PortfolioProvider>
      <StatusBar
        style="light"
        backgroundColor="#000000"
      />
      <AppNavigator />
    </PortfolioProvider>
  );
}
