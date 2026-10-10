import React, { useEffect, useState } from 'react';
import {
  Alert,
  ScrollView,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import { usePortfolio } from '../context/PortfolioContext';
import {
  Card,
  Field,
  PrimaryButton,
  Screen,
} from '../components/UI';

const AVAILABILITY_OPTIONS = [
  'Open to opportunities',
  'Available for internships',
  'Currently learning',
  'Not available currently',
];

export default function EditorScreen() {
  const { profile, setProfile } = usePortfolio();

  const [headline, setHeadline] = useState(profile.headline);
  const [bio, setBio] = useState(profile.bio);
  const [primarySkill, setPrimarySkill] = useState(
    profile.primarySkill
  );
  const [availability, setAvailability] = useState(
    profile.availability
  );
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setHeadline(profile.headline);
    setBio(profile.bio);
    setPrimarySkill(profile.primarySkill);
    setAvailability(profile.availability);
  }, [profile]);

  function validate() {
    const nextErrors = {};

    if (
      headline.trim().length < 5 ||
      headline.trim().length > 80
    ) {
      nextErrors.headline =
        'Headline must contain 5–80 characters.';
    }

    if (
      bio.trim().length < 20 ||
      bio.trim().length > 400
    ) {
      nextErrors.bio =
        'Bio must contain 20–400 characters.';
    }

    if (primarySkill.trim().length < 2) {
      nextErrors.primarySkill =
        'Enter a skill with at least 2 characters.';
    }

    if (!AVAILABILITY_OPTIONS.includes(availability)) {
      nextErrors.availability =
        'Please select an availability option.';
    }

    setErrors(nextErrors);

    return Object.keys(nextErrors).length === 0;
  }

  function saveProfile() {
    if (!validate()) {
      Alert.alert(
        'Check your information',
        'Correct the fields marked in light red before saving.'
      );
      return;
    }

    setProfile({
      ...profile,
      headline: headline.trim(),
      bio: bio.trim(),
      primarySkill: primarySkill.trim(),
      availability,
    });

    Alert.alert(
      'Profile updated',
      'Your profile has been saved on this device.'
    );
  }

  return (
    <Screen>
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={styles.content}
      >
        <Text style={styles.eyebrow}>PERSONALISE YOUR PORTFOLIO</Text>

        <Text style={styles.heading}>Edit Your Profile</Text>

        <Text style={styles.subtitle}>
          Make your portfolio reflect who you are, what you do,
          and the opportunities you are looking for.
        </Text>

        <Card style={styles.card}>
          <Text style={styles.sectionHeading}>
            Professional information
          </Text>

          <Text style={styles.sectionDescription}>
            Update the details visitors see on your home screen.
          </Text>

          <Field
            label="Professional headline"
            value={headline}
            onChangeText={(value) => {
              setHeadline(value);
              if (errors.headline) {
                setErrors((previous) => ({
                  ...previous,
                  headline: undefined,
                }));
              }
            }}
            placeholder="e.g. Software Engineering Student"
            maxLength={80}
            error={errors.headline}
          />

          <Field
            label="Short biography"
            value={bio}
            onChangeText={(value) => {
              setBio(value);
              if (errors.bio) {
                setErrors((previous) => ({
                  ...previous,
                  bio: undefined,
                }));
              }
            }}
            placeholder="Tell people about your interests and goals..."
            multiline
            maxLength={400}
            error={errors.bio}
          />

          <Field
            label="Primary skill"
            value={primarySkill}
            onChangeText={(value) => {
              setPrimarySkill(value);
              if (errors.primarySkill) {
                setErrors((previous) => ({
                  ...previous,
                  primarySkill: undefined,
                }));
              }
            }}
            placeholder="e.g. HTML, CSS, Java"
            maxLength={40}
            error={errors.primarySkill}
          />

          <Text style={styles.label}>Availability</Text>

          <Text style={styles.helper}>
            Choose the option that best describes your current status.
          </Text>

          {AVAILABILITY_OPTIONS.map((option) => {
            const selected = availability === option;

            return (
              <TouchableOpacity
                key={option}
                activeOpacity={0.8}
                accessibilityRole="radio"
                accessibilityState={{ selected }}
                onPress={() => {
                  setAvailability(option);
                  setErrors((previous) => ({
                    ...previous,
                    availability: undefined,
                  }));
                }}
                style={[
                  styles.option,
                  selected && styles.selectedOption,
                ]}
              >
                <Text
                  style={[
                    styles.radio,
                    selected && styles.selectedRadio,
                  ]}
                >
                  {selected ? '●' : '○'}
                </Text>

                <Text
                  style={[
                    styles.optionText,
                    selected && styles.selectedText,
                  ]}
                >
                  {option}
                </Text>

                {selected && (
                  <Text style={styles.selectedLabel}>
                    SELECTED
                  </Text>
                )}
              </TouchableOpacity>
            );
          })}

          {errors.availability ? (
            <Text style={styles.errorText}>
              {errors.availability}
            </Text>
          ) : null}

          <PrimaryButton
            title="Validate & Save Profile"
            onPress={saveProfile}
          />

          <Text style={styles.saveNote}>
            Your changes are saved through your portfolio context.
          </Text>
        </Card>

        <Text style={styles.hintTitle}>YOUR PRIVACY MATTERS</Text>

        <Text style={styles.hint}>
          Your profile is intended to be stored locally using
          AsyncStorage. Do not enter passwords or other sensitive
          information.
        </Text>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingBottom: 25,
  },

  eyebrow: {
    color: '#FF8080',
    fontSize: 10,
    fontWeight: '900',
    letterSpacing: 2,
    marginBottom: 10,
  },

  heading: {
    color: '#FF8080',
    fontSize: 27,
    fontWeight: '900',
    marginBottom: 8,
  },

  subtitle: {
    color: '#FFFFFF',
    fontSize: 14,
    lineHeight: 22,
    marginBottom: 22,
  },

  card: {
    backgroundColor: '#000000',
    borderColor: '#FF8080',
    borderWidth: 1,
  },

  sectionHeading: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '900',
    marginBottom: 7,
  },

  sectionDescription: {
    color: '#FFFFFF',
    fontSize: 12,
    lineHeight: 19,
    marginBottom: 22,
  },

  label: {
    color: '#FFFFFF',
    fontWeight: '800',
    fontSize: 14,
    marginTop: 3,
    marginBottom: 7,
  },

  helper: {
    color: '#FFFFFF',
    fontSize: 12,
    lineHeight: 18,
    marginBottom: 12,
  },

  option: {
    minHeight: 49,
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderRadius: 11,
    borderWidth: 1,
    borderColor: '#FF8080',
    marginBottom: 9,
    backgroundColor: '#000000',
    flexDirection: 'row',
    alignItems: 'center',
  },

  selectedOption: {
    backgroundColor: '#FF8080',
    borderColor: '#FF8080',
  },

  radio: {
    color: '#FFFFFF',
    fontSize: 18,
    marginRight: 11,
  },

  selectedRadio: {
    color: '#000000',
  },

  optionText: {
    color: '#FFFFFF',
    fontSize: 13,
    flex: 1,
  },

  selectedText: {
    color: '#000000',
    fontWeight: '900',
  },

  selectedLabel: {
    color: '#000000',
    fontSize: 9,
    fontWeight: '900',
    marginLeft: 6,
  },

  errorText: {
    color: '#FF8080',
    fontSize: 12,
    marginTop: 2,
    marginBottom: 8,
  },

  saveNote: {
    color: '#FFFFFF',
    fontSize: 11,
    lineHeight: 17,
    textAlign: 'center',
    marginTop: 12,
  },

  hintTitle: {
    color: '#FF8080',
    fontSize: 11,
    fontWeight: '900',
    letterSpacing: 1.5,
    marginTop: 18,
    marginBottom: 7,
  },

  hint: {
    color: '#FFFFFF',
    fontSize: 12,
    lineHeight: 19,
    marginBottom: 10,
  },
});
