import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Homepage from './Homepage';
import StudentList from './StudentList';
import AddStudent from './AddStudent';

const Stack = createNativeStackNavigator();

export default function Dashboard() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Homepage">
        <Stack.Screen name="Homepage" component={Homepage} options={{ title: 'Home' }} />
        <Stack.Screen name="StudentList" component={StudentList} options={{ title: 'Student List' }} />
        <Stack.Screen name="AddStudent" component={AddStudent} options={{ title: 'Add Student' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
