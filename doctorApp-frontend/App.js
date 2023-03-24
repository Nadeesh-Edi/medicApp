import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// import ViewAllDoctors from './src/screens/Doctor/ViewChannelling';
import HomeScreen from './src/screens/Common/HomeScreen';
import AppointmentMenuScreen from './src/screens/Common/AppointmentMenu';
import ViewAllAppointments from './src/screens/Appointments/ViewAllAppointments';
import CreateAppointment from './src/screens/Appointments/CreateAppointment';
import EditAppointment from './src/screens/Appointments/EditAppointment';

import DoctorsMenuScreen from './src/screens/Common/DoctorsMenu';
import NewDoctor from './src/screens/Doctor/addNewDoctor';
import ViewAllDoctors from './src/screens/Doctor/viewAllDoctors';
import EditDoctor from './src/screens/Doctor/editDoctor';
import AboutUs from './src/screens/Doctor/aboutUs';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main menu"
          options={{ headerShown: false }}
          component={HomeScreen}
        />
        {/* <Stack.Screen
          name="All Doctors"
          component={ViewAllDoctors}
        /> */}
        <Stack.Screen
          name="Appointments Menu"
          options={{ headerShown: false }}
          component={AppointmentMenuScreen}
        />
        <Stack.Screen
          name="Appointments"
          component={ViewAllAppointments}
          options={{ headerStyle: {
            backgroundColor: '#1AA7EC'
          } }}
        />
        <Stack.Screen
          name="Create Appointment"
          component={CreateAppointment}
          options={{ headerStyle: {
            backgroundColor: '#1AA7EC'
          } }}
        />
        <Stack.Screen
          name="Edit Appointment"
          component={EditAppointment}
          options={{ headerStyle: {
            backgroundColor: '#1AA7EC'
          } }}
        />

        <Stack.Screen
          name="Doctors Menu"
          options={{ headerShown: false }}
          component={DoctorsMenuScreen}
        />
        <Stack.Screen
          name="Insert Doctor"
          options={{ headerStyle: {
            backgroundColor: '#1AA7EC'
          } }}
          component={NewDoctor}
        />

        <Stack.Screen
          name="View Doctors"
          options={{ headerStyle: {
            backgroundColor: '#1AA7EC'
          } }}
          component={ViewAllDoctors}
        />        

        <Stack.Screen
          name="Edit Doctor"
          options={{ headerStyle: {
            backgroundColor: '#1AA7EC'
          } }}
          component={EditDoctor}
        /> 

        <Stack.Screen
          name="About Us"
          options={{ headerStyle: {
            backgroundColor: '#1AA7EC'
          } }}
          component={AboutUs}
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
