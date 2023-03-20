import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View, Text } from 'react-native';

const ViewAllDoctors = () => {
    const [docs, setDocs] = useState([]);

    useEffect(() => {
        axios.get('http://192.168.1.4:8000/hospitalStaff/allDoctors').then((res) => {
            setDocs(res.data);
        }).catch(err => {
            
        })
    }, [])

    return (
        <SafeAreaView>
            <ScrollView style={{ backgroundColor: '#fff' }}>
                {
                    docs.map((item, index) => {
                        return (
                            <View style={styles.listItem}>
                                <Text style={styles.name}>{item.name}</Text>
                                <Text>{item.specialization}</Text>
                            </View>
                        )
                    })
                }
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    listItem: {
        padding: 20,
        borderRadius: 20,
        borderColor: '#1AA7EC',
        borderWidth: 1,
        margin: 10
    },
    name: {
        color: '#1AA7EC',
        fontSize: 17
    }
})

export default ViewAllDoctors;