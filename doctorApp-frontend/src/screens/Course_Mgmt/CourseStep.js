import React, { useEffect, useState } from 'react';
import { AppBar, Text } from '@react-native-material/core';
import { SafeAreaView, ScrollView, StyleSheet, View, Image, TouchableOpacity } from 'react-native';
// import steps from '../../../assets/steps.png';
import AppBarComponent from '../Common/AppBarComponent';
import axios from 'axios';

const CourseStep = ({ route,navigation }) => {

  const id = route.params.objectId;

  const [content, setContent] = useState([]);
  const [course, setCourse] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8000/course/${id}`)
      .then((res) => {
        setContent(res.data.course);
        // console.log(res.data.course);
        // console.log(res.data);
        // console.log(id);
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])

  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Image source={{ uri: 'https://dcfwfuaf91uza.cloudfront.net/online/wp-content/uploads/Sample-Class-for-Liberty-University-Online.jpg' }} style={styles.BorderClass}></Image>
        </View>
        {

          content.map((value, index) => {

            return (
              <View style={styles.box2}>
                <View style={styles.box1}>
                  <Text style={styles[value.content_no]}>{value.content_no}</Text>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate('CourseIntro', {
                        objectId:id,
                        stepId:value.content_no
                      })
                    }
                  >
                    <View style={styles.box3}>
                      <Text style={styles.titleLabel}>{value.title}</Text>
                    </View>
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


  BorderClass:
  {

    width: 340,
    height: 200,
    borderWidth: 2,
    borderColor: 'black',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10
  },

  box1: {

    backgroundColor: '#34a1eb',
    height: 80,
    width: 80,
    borderColor: 'black',
    marginLeft: 10,
    marginRight: 20,
    borderWidth: 2,
    marginTop: 10,



  },

  box2: {

    backgroundColor: 'white',
    height: 110,
    width: 340,
    borderColor: 'black',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 20,
    borderWidth: 2,


  },

  box3: {

    backgroundColor: 'gray',
    height: 78,
    width: 230,
    borderColor: 'black',
    marginTop: - 79,
    marginLeft: 85,
    borderRadius: 2,
    borderWidth: 2,

  },

  label: {

    fontSize: 60,
    color: 'black',
    textAlign: 'center'


  },

  titleLabel: {
    marginTop: 20,
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center'
  },

  1: {
    backgroundColor: 'green',
    fontSize: 60,
    color: 'black',
    textAlign: 'center',
  },
  2: {
    backgroundColor: 'blue',
    fontSize: 60,
    color: 'black',
    textAlign: 'center'
  },
  3: {
    backgroundColor: 'yellow',
    fontSize: 60,
    color: 'black',
    textAlign: 'center'
  },
  4: {
    backgroundColor: 'pink',
    fontSize: 60,
    color: 'black',
    textAlign: 'center'
  },
  5: {
    backgroundColor: 'orange',
    fontSize: 60,
    color: 'black',
    textAlign: 'center'
  }

})

export default CourseStep