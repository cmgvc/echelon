import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function DashboardScreen() {
  const todayWorkout = {
    title: 'Lower Body Strength',
    exercises: [
      { name: 'Squats', sets: 3, reps: 10 },
      { name: 'Lunges', sets: 3, reps: 12 },
      { name: 'Glute Bridge', sets: 2, reps: 15 },
    ],
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Your Day</Text>
      <Text style={styles.subtext}>Based on your cycle and sleep, here’s what we recommend:</Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>{todayWorkout.title}</Text>
        {todayWorkout.exercises.map((ex, idx) => (
          <Text key={idx} style={styles.exercise}>
            {ex.name} — {ex.sets} sets x {ex.reps} reps
          </Text>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    paddingHorizontal: 24,
    paddingBottom: 100,
    backgroundColor: '#ffffff',
  },
  heading: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 6,
    color: '#222222',
  },
  subtext: {
    fontSize: 16,
    color: '#666666',
    marginBottom: 30,
  },
  card: {
    backgroundColor: '#fff0f4',
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 10,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 12,
    color: '#d6336c',
  },
  exercise: {
    fontSize: 16,
    color: '#444444',
    marginBottom: 8,
  },
});
