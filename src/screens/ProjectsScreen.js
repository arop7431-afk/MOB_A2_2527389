
import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';

import { COLORS, PROJECTS } from '../data/portfolio';
import { Card, PrimaryButton, Screen } from '../components/UI';

export default function ProjectsScreen({ navigation }) {
  return (
    <Screen>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.heading}>Selected Projects</Text>
        <Text style={styles.subtitle}>
          Practical work that connects software development with real-world needs.
        </Text>

        {PROJECTS.map((project, index) => (
          <Card key={project.id}>
            <Text style={styles.number}>
              PROJECT 0{index + 1}
            </Text>
            <Text style={styles.title}>{project.title}</Text>
            <Text style={styles.category}>{project.category}</Text>
            <Text style={styles.problem}>{project.problem}</Text>

            <Text style={styles.techHeading}>TECHNOLOGIES</Text>
            <Text style={styles.technologies}>
              {project.technologies.join('  ·  ')}
            </Text>

            <PrimaryButton
              title="View Project Details  →"
              onPress={() =>
                navigation.navigate('ProjectDetails', { projectId: project.id })
              }
            />
          </Card>
        ))}
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 25,
    color: COLORS.navy,
    fontWeight: '900',
    marginBottom: 8,
  },
  subtitle: {
    color: COLORS.muted,
    lineHeight: 21,
    marginBottom: 18,
  },
  number: {
    color: COLORS.teal,
    fontSize: 11,
    fontWeight: '900',
    letterSpacing: 1.2,
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    color: COLORS.navy,
    fontWeight: '900',
    marginBottom: 6,
  },
  category: {
    fontSize: 12,
    color: COLORS.teal,
    fontWeight: '700',
    marginBottom: 13,
  },
  problem: {
    color: COLORS.muted,
    fontSize: 14,
    lineHeight: 22,
  },
  techHeading: {
    color: COLORS.text,
    fontSize: 10,
    fontWeight: '900',
    marginTop: 18,
    marginBottom: 7,
    letterSpacing: 1,
  },
  technologies: {
    color: COLORS.muted,
    fontSize: 13,
    lineHeight: 20,
  },
});
