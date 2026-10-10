
import React from 'react';
import {
  ScrollView,
  Text,
  View,
  Image,
  StyleSheet,
} from 'react-native';

import { usePortfolio } from '../context/PortfolioContext';
import {
  COLORS,
  STUDENT_NAME,
  VERIFICATION_CODE,
} from '../data/portfolio';

import {
  Card,
  PrimaryButton,
  SectionTitle,
} from '../components/UI';

export default function HomeScreen({ navigation }) {
  const { profile, photoUri } = usePortfolio();

  return (
    <ScrollView
      style={styles.page}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.identity}>
        My name is Arop Malual.
      </Text>

      <View style={styles.hero}>
        {photoUri ? (
          <Image
            source={{ uri: photoUri }}
            style={styles.photo}
          />
        ) : (
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>AM</Text>
          </View>
        )}

        <Text style={styles.name}>{STUDENT_NAME}</Text>

        <Text style={styles.headline}>
          {profile.headline}
        </Text>

        <View style={styles.status}>
          <View style={styles.dot} />
          <Text style={styles.statusText}>
            {profile.availability}
          </Text>
        </View>
      </View>

      <Card>
        <SectionTitle>About Me</SectionTitle>
        <Text style={styles.bio}>{profile.bio}</Text>
      </Card>

      <Card>
        <SectionTitle>Professional Focus</SectionTitle>

        <Text style={styles.label}>Primary skill</Text>
        <Text style={styles.value}>
          {profile.primarySkill}
        </Text>

        <View style={styles.codeBox}>
          <Text style={styles.codeLabel}>
            STUDENT VERIFICATION CODE
          </Text>
          <Text style={styles.code}>
            {VERIFICATION_CODE}
          </Text>
        </View>
      </Card>

      <PrimaryButton
        title="Explore My Projects  →"
        onPress={() => navigation.navigate('Projects')}
      />

      <PrimaryButton
        title="Update My Profile"
        secondary
        onPress={() => navigation.navigate('Edit')}
      />

      <Text style={styles.footer}>
        Building skills. Creating solutions.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#000000',
  },

  content: {
    padding: 18,
    paddingBottom: 32,
  },

  identity: {
    fontSize: 17,
    fontWeight: '900',
    color: '#FF8080',
    marginBottom: 18,
  },

  hero: {
    backgroundColor: '#000000',
    borderRadius: 24,
    padding: 24,
    alignItems: 'center',
    marginBottom: 18,
    borderWidth: 1,
    borderColor: '#FF8080',
  },

  avatar: {
    height: 100,
    width: 100,
    borderRadius: 50,
    backgroundColor: '#000000',
    borderWidth: 2,
    borderColor: '#FF8080',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },

  avatarText: {
    fontSize: 30,
    fontWeight: '900',
    color: '#FF8080',
  },

  photo: {
    height: 100,
    width: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#FF8080',
    marginBottom: 16,
  },

  name: {
    fontSize: 25,
    fontWeight: '900',
    color: '#FF8080',
    textAlign: 'center',
  },

  headline: {
    color: '#FFFFFF',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 9,
    lineHeight: 21,
  },

  status: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
    backgroundColor: '#000000',
    borderWidth: 1,
    borderColor: '#FF8080',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
  },

  dot: {
    height: 7,
    width: 7,
    borderRadius: 4,
    backgroundColor: '#FF8080',
    marginRight: 8,
  },

  statusText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '700',
  },

  bio: {
    color: '#FFFFFF',
    lineHeight: 23,
    fontSize: 14,
  },

  label: {
    color: '#FFFFFF',
    fontSize: 13,
  },

  value: {
    color: '#FF8080',
    fontSize: 18,
    fontWeight: '800',
    marginTop: 5,
  },

  codeBox: {
    marginTop: 18,
    padding: 14,
    backgroundColor: '#000000',
    borderWidth: 1,
    borderColor: '#FF8080',
    borderRadius: 12,
  },

  codeLabel: {
    fontSize: 10,
    fontWeight: '800',
    color: '#FFFFFF',
    letterSpacing: 1,
  },

  code: {
    marginTop: 6,
    fontSize: 19,
    color: '#FF8080',
    fontWeight: '900',
    letterSpacing: 1,
  },

  footer: {
    textAlign: 'center',
    color: '#FFFFFF',
    marginTop: 25,
    fontSize: 12,
  },
});
