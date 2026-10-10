
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from '../data/portfolio';

export default function SkillItem({ name, level }) {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.level}>{level}%</Text>
      </View>

      <View style={styles.track}>
        <View style={[styles.fill, { width: `${level}%` }]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 19,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  name: {
    color: COLORS.text,
    fontWeight: '700',
  },
  level: {
    color: COLORS.teal,
    fontWeight: '800',
  },
  track: {
    height: 8,
    borderRadius: 10,
    backgroundColor: '#E7ECF3',
    overflow: 'hidden',
  },
  fill: {
    height: '100%',
    backgroundColor: COLORS.teal,
    borderRadius: 10,
  },
});
