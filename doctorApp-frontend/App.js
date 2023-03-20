import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ViewAllDoctors from './src/screens/Doctor/ViewChannelling';
import HomeScreen from './src/screens/Common/HomeScreen';
import AppointmentMenuScreen from './src/screens/Common/AppointmentMenu';
import ViewAllAppointments from './src/screens/Appointments/ViewAllAppointments';
import CreateAppointment from './src/screens/Appointments/CreateAppointment';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main menu"
          component={HomeScreen}
        />
        <Stack.Screen
          name="All Doctors"
          component={ViewAllDoctors}
        />
        <Stack.Screen
          name="Appointments Menu"
          component={AppointmentMenuScreen}
        />
        <Stack.Screen
          name="Appointments"
          component={ViewAllAppointments}
        />
        <Stack.Screen
          name="Create Appointment"
          component={CreateAppointment}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
