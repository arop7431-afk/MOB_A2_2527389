
import React from 'react';
import {
  Alert,
  Image,
  ScrollView,
  Text,
  StyleSheet,
  View,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';

import { COLORS } from '../data/portfolio';
import { usePortfolio } from '../context/PortfolioContext';
import { Card, PrimaryButton, Screen } from '../components/UI';

export default function MediaScreen() {
  const { photoUri, setPhotoUri } = usePortfolio();

  async function chooseFromGallery() {
    try {
      const permission =
        await ImagePicker.requestMediaLibraryPermissionsAsync();

      if (!permission.granted) {
        Alert.alert(
          'Gallery permission required',
          'Allow photo access in your device settings to select a profile picture.'
        );
        return;
      }

      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ['images'],
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.8,
      });

      if (result.canceled) {
        Alert.alert('Selection cancelled', 'Your current photo was not changed.');
        return;
      }

      if (result.assets && result.assets.length > 0) {
        setPhotoUri(result.assets[0].uri);
        Alert.alert('Photo selected', 'Your profile photo has been updated.');
      }
    } catch (error) {
      Alert.alert('Gallery error', 'Could not open the photo gallery.');
    }
  }

  async function takePhoto() {
    try {
      const permission =
        await ImagePicker.requestCameraPermissionsAsync();

      if (!permission.granted) {
        Alert.alert(
          'Camera permission required',
          'Allow camera access in your device settings to take a profile picture.'
        );
        return;
      }

      const result = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.8,
      });

      if (result.canceled) {
        Alert.alert('Capture cancelled', 'Your current photo was not changed.');
        return;
      }

      if (result.assets && result.assets.length > 0) {
        setPhotoUri(result.assets[0].uri);
        Alert.alert('Photo captured', 'Your profile photo has been updated.');
      }
    } catch (error) {
      Alert.alert(
        'Camera unavailable',
        'Could not open the camera. Try using the gallery instead.'
      );
    }
  }

  function removePhoto() {
    Alert.alert(
      'Remove profile photo?',
      'Your initials will appear instead of your photo.',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Remove',
          style: 'destructive',
          onPress: () => setPhotoUri(null),
        },
      ]
    );
  }

  return (
    <Screen>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.heading}>Profile Photo</Text>
        <Text style={styles.subtitle}>
          Add a professional image or keep the initials placeholder.
        </Text>

        <Card>
          <View style={styles.previewArea}>
            {photoUri ? (
              <Image source={{ uri: photoUri }} style={styles.preview} />
            ) : (
              <View style={styles.placeholder}>
                <Text style={styles.initials}>AM</Text>
              </View>
            )}

            <Text style={styles.previewLabel}>
              {photoUri ? 'Current profile photo' : 'No photo selected'}
            </Text>
          </View>

          <PrimaryButton
            title="Choose from Gallery"
            onPress={chooseFromGallery}
          />

          <PrimaryButton
            title="Take a Photo"
            secondary
            onPress={takePhoto}
          />

          {photoUri ? (
            <PrimaryButton
              title="Remove Photo"
              secondary
              onPress={removePhoto}
            />
          ) : null}
        </Card>

        <Text style={styles.note}>
          Your selected image reference is stored locally. For a production APK,
          copy the image into app-managed storage if you need the image to remain
          available reliably after device restarts or file cleanup.
        </Text>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  heading: {
    color: COLORS.navy,
    fontSize: 25,
    fontWeight: '900',
    marginBottom: 8,
  },
  subtitle: {
    color: COLORS.muted,
    fontSize: 14,
    lineHeight: 21,
    marginBottom: 18,
  },
  previewArea: {
    alignItems: 'center',
    paddingVertical: 18,
  },
  preview: {
    width: 180,
    height: 180,
    borderRadius: 90,
    borderWidth: 4,
    borderColor: COLORS.teal,
  },
  placeholder: {
    width: 180,
    height: 180,
    borderRadius: 90,
    backgroundColor: COLORS.navy,
    borderWidth: 4,
    borderColor: COLORS.teal,
    alignItems: 'center',
    justifyContent: 'center',
  },
  initials: {
    fontSize: 46,
    fontWeight: '900',
    color: COLORS.teal,
  },
  previewLabel: {
    color: COLORS.muted,
    fontSize: 13,
    marginTop: 13,
  },
  note: {
    color: COLORS.muted,
    fontSize: 12,
    lineHeight: 19,
    marginBottom: 20,
  },
});
