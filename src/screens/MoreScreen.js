
import React from 'react';
import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { COLORS } from '../data/portfolio';
import { Screen } from '../components/UI';

const OPTIONS = [
  {
    title: 'Profile Photo',
    description: 'Choose, replace, or remove your photo',
    icon: 'camera-outline',
    route: 'ProfilePhoto',
  },
  {
    title: 'About This App',
    description: 'Student information and verification',
    icon: 'information-circle-outline',
    route: 'AboutInfo',
  },
];

export default function MoreScreen({ navigation }) {
  return (
    <Screen>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        {/* Header */}
        <View style={styles.hero}>
          <View style={styles.iconCircle}>
            <Ionicons
              name="apps-outline"
              size={30}
              color="#FF8080"
            />
          </View>

          <Text style={styles.heading}>More to explore.</Text>

          <Text style={styles.subtitle}>
            Manage your profile and discover application information.
          </Text>
        </View>

        {/* Navigation options */}
        {OPTIONS.map((item) => (
          <TouchableOpacity
            key={item.route}
            activeOpacity={0.8}
            onPress={() => navigation.navigate(item.route)}
            style={styles.option}
          >
            <View style={styles.optionIcon}>
              <Ionicons
                name={item.icon}
                size={24}
                color="#FF8080"
              />
            </View>

            <View style={styles.optionContent}>
              <Text style={styles.optionTitle}>
                {item.title}
              </Text>

              <Text style={styles.optionDescription}>
                {item.description}
              </Text>
            </View>

            <Ionicons
              name="chevron-forward"
              size={20}
              color="#FF8080"
            />
          </TouchableOpacity>
        ))}

        {/* Footer */}
        <View style={styles.footer}>
          <View style={styles.footerLine} />

          <Text style={styles.footerTitle}>
            AROPPORTFOLIO
          </Text>

          <Text style={styles.footerText}>
            A personal portfolio built with curiosity and code.
          </Text>

          <View style={styles.versionBadge}>
            <Text style={styles.version}>
              VERSION 1.0.0
            </Text>
          </View>
        </View>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingBottom: 24,
  },

  hero: {
    backgroundColor: '#000000',
    padding: 24,
    borderRadius: 23,
    borderWidth: 1,
    borderColor: '#FF8080',
    marginBottom: 22,
  },

  iconCircle: {
    width: 58,
    height: 58,
    borderRadius: 18,
    backgroundColor: '#000000',
    borderWidth: 1,
    borderColor: '#FF8080',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },

  heading: {
    fontSize: 27,
    fontWeight: '900',
    color: '#FF8080',
    marginBottom: 8,
  },

  subtitle: {
    color: '#FFFFFF',
    fontSize: 14,
    lineHeight: 22,
  },

  option: {
    backgroundColor: '#000000',
    borderColor: '#FF8080',
    borderWidth: 1,
    borderRadius: 17,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 13,
  },

  optionIcon: {
    width: 48,
    height: 48,
    borderRadius: 15,
    backgroundColor: '#000000',
    borderWidth: 1,
    borderColor: '#FF8080',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 13,
  },

  optionContent: {
    flex: 1,
    paddingRight: 6,
  },

  optionTitle: {
    fontSize: 15,
    color: '#FFFFFF',
    fontWeight: '800',
    marginBottom: 5,
  },

  optionDescription: {
    fontSize: 12,
    lineHeight: 18,
    color: '#FFFFFF',
  },

  footer: {
    marginTop: 24,
    padding: 20,
    alignItems: 'center',
  },

  footerLine: {
    width: '100%',
    height: 1,
    backgroundColor: '#FF8080',
    marginBottom: 22,
  },

  footerTitle: {
    color: '#FF8080',
    fontSize: 12,
    fontWeight: '900',
    letterSpacing: 2,
  },

  footerText: {
    color: '#FFFFFF',
    fontSize: 12,
    lineHeight: 19,
    textAlign: 'center',
    marginTop: 8,
  },

  versionBadge: {
    borderWidth: 1,
    borderColor: '#FF8080',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 7,
    marginTop: 13,
  },

  version: {
    color: '#FF8080',
    fontSize: 10,
    fontWeight: '900',
    letterSpacing: 1,
  },
});
