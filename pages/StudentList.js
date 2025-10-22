import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import axios from '../config/axiosConfig';

export default function StudentList() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios.get('/students/')
      .then(response => setStudents(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Student List</Text>
      <FlatList
        data={students}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Text style={styles.item}>{item.name} - {item.email}</Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 22,
    marginBottom: 10,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
  },
});
