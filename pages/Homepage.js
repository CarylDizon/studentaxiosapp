import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Homepage({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to StudentAxiosApp</Text>
      <Button title="View Students" onPress={() => navigation.navigate('StudentList')} />
      <Button title="Add Student" onPress={() => navigation.navigate('AddStudent')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    marginBottom: 30,
  },
});
