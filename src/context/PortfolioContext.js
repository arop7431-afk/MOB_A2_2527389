
import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { INITIAL_PROFILE } from '../data/portfolio';

const PortfolioContext = createContext(null);
const STORAGE_KEY = '@arop_portfolio_profile';

export function PortfolioProvider({ children }) {
  const [profile, setProfile] = useState(INITIAL_PROFILE);
  const [photoUri, setPhotoUri] = useState(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    async function restore() {
      try {
        const saved = await AsyncStorage.getItem(STORAGE_KEY);

        if (saved) {
          const data = JSON.parse(saved);

          if (data.profile) {
            setProfile({
              ...INITIAL_PROFILE,
              ...data.profile,
            });
          }

          setPhotoUri(data.photoUri || null);
        }
      } catch (error) {
        console.warn('Could not restore saved profile.', error);
      } finally {
        setReady(true);
      }
    }

    restore();
  }, []);

  useEffect(() => {
    if (!ready) return;

    async function save() {
      try {
        await AsyncStorage.setItem(
          STORAGE_KEY,
          JSON.stringify({ profile, photoUri })
        );
      } catch (error) {
        console.warn('Could not save profile.', error);
      }
    }

    save();
  }, [profile, photoUri, ready]);

  return (
    <PortfolioContext.Provider
      value={{
        profile,
        setProfile,
        photoUri,
        setPhotoUri,
        ready,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
}

export function usePortfolio() {
  const context = useContext(PortfolioContext);

  if (!context) {
    throw new Error(
      'usePortfolio must be used inside PortfolioProvider'
    );
  }

  return context;
}
