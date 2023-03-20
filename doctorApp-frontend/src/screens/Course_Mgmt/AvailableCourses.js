import React from 'react'
import { SafeAreaView, ScrollView, View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import AppBarComponent from '../Common/AppBarComponent';
// import java from '../../../assets/CM_java.png'
import axios from 'axios';
import { useEffect, useState } from 'react';
import CourseStep from './CourseStep';

const AvailableCourses = ({ navigation }) => {

  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8000/course`)
      .then((res) => {
        setCourses(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])

  return (
    <SafeAreaView>
      <ScrollView>

        <View style={styles.container}>
          <Text style={styles.title}>AVAILABLE COURSES</Text>
        </View>

        {

          courses.map((value, index) => {

            return (

              <View style={styles.box} >
                <View><Image source={{ uri: 'https://images.unsplash.com/photo-1579353977828-2a4eab540b9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2FtcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80' }} style={styles.BorderClass1} ></Image></View>

                <View><Text style={styles.label}>{value.name}</Text></View>

                <View>
                  <TouchableOpacity style={styles.defaultButton1}
                    onPress={() =>
                      navigation.navigate('CourseStep', {
                        objectId: value._id
                      })
                    }
                  >
                    <Text style={{ fontWeight: 'bold', fontSize: 16, color: 'black', textAlign: 'center' }}> ENROLL NOW</Text>
                  </TouchableOpacity>
                </View>

              </View>

            )

          })

        }




      </ScrollView>
    </SafeAreaView>

  )
}
const styles = StyleSheet.create({

  title: {

    fontSize: 30,
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
    backgroundColor: '#1fbf3f',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    padding: 10

  },
  container: {
    backgroundColor: 'white',
  },
  label: {
    fontSize: 16,
    marginTop: -80,
    marginLeft: 100,
    fontWeight: "bold",
    textAlign: "center",
    color: 'black'

  },
  box: {

    backgroundColor: 'lightgray',
    height: 150,
    width: 340,
    borderColor: 'black',
    marginTop: 20,
    marginLeft: 10,
    marginRight: 50,
    borderRadius: 10,
    borderWidth: 2,


  },
  defaultButton1: {

    backgroundColor: '#1fbf3f',
    marginTop: -40,
    marginLeft: 130,
    marginRight: 30,
    padding: 5,
    borderRadius: 15,
    fontWeight: 'bold',
    fontSize: 16

  },

  BorderClass1:
  {

    width: 100,
    height: 100,
    borderWidth: 2,
    borderColor: 'darkgray',
    borderRadius: 10,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10
  }





})
export default AvailableCourses;
