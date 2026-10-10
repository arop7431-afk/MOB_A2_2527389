
import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';

import {
  APP_NAME,
  COLORS,
  REGISTRATION_NUMBER,
  STUDENT_NAME,
  VERIFICATION_CODE,
} from '../data/portfolio';

import { Card, Screen, SectionTitle } from '../components/UI';

export default function AboutScreen() {
  return (
    <Screen>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.heading}>About This App</Text>
        <Text style={styles.subtitle}>
          A personal portfolio application built for mobile.
        </Text>

        <Card>
          <Text style={styles.brand}>{APP_NAME}</Text>
          <Text style={styles.tagline}>
            A personal profile. A growing skill set. A future in technology.
          </Text>
        </Card>

        <Card>
          <SectionTitle>Student Information</SectionTitle>

          <Text style={styles.label}>Student name</Text>
          <Text style={styles.value}>{STUDENT_NAME}</Text>

          <Text style={styles.label}>Registration number</Text>
          <Text style={styles.value}>{REGISTRATION_NUMBER}</Text>

          <Text style={styles.label}>Verification code</Text>
          <Text style={styles.value}>{VERIFICATION_CODE}</Text>

          <Text style={styles.label}>Application version</Text>
          <Text style={styles.value}>1.0.0</Text>
        </Card>

        <Card>
          <SectionTitle>Data Use & Privacy</SectionTitle>
          <Text style={styles.body}>
            This application stores the profile fields and selected profile
            image reference locally on the device using AsyncStorage. It does
            not intentionally send this portfolio data to a remote server.
            Camera and photo-library permissions are requested only when the
            corresponding feature is used. Users should avoid entering passwords
            or other sensitive information.
          </Text>
        </Card>

        <Text style={styles.footer}>
          Designed and developed as a mobile application development portfolio.
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
    lineHeight: 21,
    marginBottom: 18,
  },
  brand: {
    fontSize: 28,
    color: COLORS.navy,
    fontWeight: '900',
  },
  tagline: {
    color: COLORS.muted,
    lineHeight: 21,
    marginTop: 9,
  },
  label: {
    color: COLORS.muted,
    fontSize: 12,
    marginTop: 15,
    marginBottom: 4,
  },
  value: {
    color: COLORS.navy,
    fontWeight: '800',
    fontSize: 15,
  },
  body: {
    color: COLORS.muted,
    fontSize: 13,
    lineHeight: 22,
  },
  footer: {
    color: COLORS.muted,
    fontSize: 12,
    lineHeight: 18,
    textAlign: 'center',
    marginVertical: 15,
  },
});
