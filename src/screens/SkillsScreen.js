
import React from 'react';
import { ScrollView, Text, StyleSheet, View } from 'react-native';

import { COLORS, SKILLS, EDUCATION } from '../data/portfolio';
import { Card, Screen, SectionTitle } from '../components/UI';
import SkillItem from '../components/SkillItem';

export default function SkillsScreen() {
  return (
    <Screen>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.heading}>Skills & Education</Text>
        <Text style={styles.subtitle}>
          Technologies I am learning and using in my software engineering journey.
        </Text>

        <Card>
          <SectionTitle>Technical Skills</SectionTitle>
          {SKILLS.map((skill) => (
            <SkillItem
              key={skill.name}
              name={skill.name}
              level={skill.level}
            />
          ))}
          <Text style={styles.note}>
            Skill percentages are self-assessments, not formal certifications.
          </Text>
        </Card>

        <Card>
          <SectionTitle>Education Timeline</SectionTitle>
          {EDUCATION.map((item, index) => (
            <View key={item.title} style={styles.timelineItem}>
              <View style={styles.timelineMarker}>
                <View style={styles.markerDot} />
                {index !== EDUCATION.length - 1 && (
                  <View style={styles.line} />
                )}
              </View>

              <View style={styles.timelineContent}>
                <Text style={styles.period}>{item.period}</Text>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>
              </View>
            </View>
          ))}
        </Card>
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
    marginBottom: 20,
  },
  note: {
    color: COLORS.muted,
    fontSize: 11,
    lineHeight: 17,
    marginTop: 4,
  },
  timelineItem: {
    flexDirection: 'row',
    minHeight: 105,
  },
  timelineMarker: {
    width: 25,
    alignItems: 'center',
  },
  markerDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: COLORS.teal,
    marginTop: 4,
  },
  line: {
    width: 2,
    flex: 1,
    backgroundColor: COLORS.border,
    marginTop: 4,
  },
  timelineContent: {
    flex: 1,
    paddingBottom: 20,
  },
  period: {
    color: COLORS.teal,
    fontWeight: '800',
    fontSize: 12,
    marginBottom: 5,
  },
  title: {
    color: COLORS.text,
    fontSize: 15,
    fontWeight: '800',
    marginBottom: 6,
  },
  description: {
    color: COLORS.muted,
    fontSize: 13,
    lineHeight: 20,
  },
});
