import React from 'react'
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';

const AppointmentMenuScreen = ({ navigation }) => {
    return (
        <View style={styles.menuContainer}>
            <TouchableOpacity style={styles.menuBtn} onPress={() => {
                navigation.navigate('Create Appointment')
            }}>
                <Text style={{ color: '#ffffff' }}>CREATE APPOINTMENT</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuBtn} onPress={() => {
                navigation.navigate('Appointments')
            }}>
                <Text style={{ color: '#ffffff' }}>VIEW APPOINTMENTS</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    menuBtn: {
        padding: 20,
        borderRadius: 30,
        backgroundColor: '#1AA7EC',
        margin: 10,
        color: '#ffffff'
    },
    menuContainer: {
        marginTop: 50,
        marginLeft: 20,
        marginRight: 20,
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default AppointmentMenuScreen;