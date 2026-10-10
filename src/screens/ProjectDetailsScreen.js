import React from 'react';
import {
  ScrollView,
  Text,
  View,
  StyleSheet,
} from 'react-native';

import { PROJECTS } from '../data/portfolio';
import {
  Card,
  PrimaryButton,
  Screen,
  SectionTitle,
} from '../components/UI';

export default function ProjectDetailsScreen({
  route,
  navigation,
}) {
  const project = PROJECTS.find(
    (item) => item.id === route.params?.projectId
  );

  if (!project) {
    return (
      <Screen>
        <View style={styles.notFound}>
          <Text style={styles.notFoundIcon}>!</Text>

          <Text style={styles.title}>
            Project not found
          </Text>

          <Text style={styles.body}>
            This project could not be found. Return to the projects
            page and select a project to view its details.
          </Text>

          <PrimaryButton
            title="Go Back"
            onPress={() => navigation.goBack()}
          />
        </View>
      </Screen>
    );
  }

  return (
    <Screen>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        {/* Project introduction */}
        <View style={styles.hero}>
          <Text style={styles.eyebrow}>
            PROJECT SPOTLIGHT
          </Text>

          <Text style={styles.category}>
            {project.category}
          </Text>

          <Text style={styles.title}>
            {project.title}
          </Text>

          <View style={styles.accentLine} />
        </View>

        {/* Problem statement */}
        <Card style={styles.card}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionNumber}>01</Text>
            <SectionTitle>Problem Statement</SectionTitle>
          </View>

          <Text style={styles.body}>
            {project.problem}
          </Text>
        </Card>

        {/* Contribution */}
        <Card style={styles.card}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionNumber}>02</Text>
            <SectionTitle>My Contribution</SectionTitle>
          </View>

          <Text style={styles.body}>
            {project.contribution}
          </Text>
        </Card>

        {/* Technologies */}
        <Card style={styles.card}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionNumber}>03</Text>
            <SectionTitle>Technologies Used</SectionTitle>
          </View>

          {project.technologies.map((technology) => (
            <View
              key={technology}
              style={styles.technologyRow}
            >
              <View style={styles.bulletDot} />

              <Text style={styles.bullet}>
                {technology}
              </Text>
            </View>
          ))}
        </Card>

        {/* Outcome */}
        <Card style={styles.card}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionNumber}>04</Text>
            <SectionTitle>Outcome / Learning</SectionTitle>
          </View>

          <Text style={styles.body}>
            {project.outcome}
          </Text>
        </Card>

        <View style={styles.footer}>
          <Text style={styles.footerText}>
            BUILT WITH CURIOSITY. IMPROVED THROUGH PRACTICE.
          </Text>

          <PrimaryButton
            title="←  Back to Projects"
            secondary
            onPress={() => navigation.goBack()}
          />
        </View>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingBottom: 25,
  },

  hero: {
    backgroundColor: '#000000',
    borderWidth: 1,
    borderColor: '#FF8080',
    borderRadius: 20,
    padding: 22,
    marginBottom: 20,
  },

  eyebrow: {
    color: '#FF8080',
    fontSize: 10,
    fontWeight: '900',
    letterSpacing: 2,
    marginBottom: 18,
  },

  category: {
    color: '#FF8080',
    fontWeight: '800',
    fontSize: 13,
    marginBottom: 9,
  },

  title: {
    color: '#FFFFFF',
    fontSize: 27,
    lineHeight: 35,
    fontWeight: '900',
    marginBottom: 17,
  },

  accentLine: {
    width: 55,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#FF8080',
  },

  card: {
    backgroundColor: '#000000',
    borderWidth: 1,
    borderColor: '#FF8080',
    borderRadius: 16,
    marginBottom: 15,
  },

  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },

  sectionNumber: {
    color: '#FF8080',
    fontSize: 12,
    fontWeight: '900',
    marginRight: 10,
  },

  body: {
    color: '#FFFFFF',
    fontSize: 14,
    lineHeight: 23,
  },

  technologyRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 7,
  },

  bulletDot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: '#FF8080',
    marginRight: 12,
  },

  bullet: {
    color: '#FFFFFF',
    fontSize: 14,
    flex: 1,
  },

  footer: {
    marginTop: 5,
    paddingTop: 15,
  },

  footerText: {
    color: '#FFFFFF',
    fontSize: 9,
    fontWeight: '800',
    letterSpacing: 1,
    textAlign: 'center',
    marginBottom: 10,
  },

  notFound: {
    flex: 1,
    justifyContent: 'center',
  },

  notFoundIcon: {
    color: '#FF8080',
    fontSize: 44,
    fontWeight: '900',
    marginBottom: 12,
  },
});
