import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Jackson's Habit Tracker</Text>
      <Text style={styles.habit}>Cups of Coffee</Text>
      <Text style={styles.count}>{count}</Text>
      <View style={styles.buttonRow}>
        <Button title="-" onPress={() => setCount(count - 1)} />
        <Button title="+" onPress={() => setCount(count + 1)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    marginBottom: 20,
  },
  habit: {
    fontSize: 18,
  },
  count: {
    fontSize: 40,
    marginVertical: 20,
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 10,
  },
});
