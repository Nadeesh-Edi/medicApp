import React from 'react'
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.menuContainer}>
            <TouchableOpacity style={styles.menuBtn}>
                <Text style={{ color: '#ffffff' }}>Doctor Menu</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuBtn} onPress={() => {
                navigation.navigate('Appointments Menu')
            }}>
                <Text style={{ color: '#ffffff' }}>Appointment Menu</Text>
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

export default HomeScreen;