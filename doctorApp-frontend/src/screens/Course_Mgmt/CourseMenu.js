import React from "react";
import { AppBar } from "@react-native-material/core";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import AppBarComponent from "../Common/AppBarComponent";
// import courses from '../../../assets/courses.png';
// import course1 from '../../../assets/course1.png';
// import course2 from '../../../assets/courses2.png';

const CourseMenu = ({ navigation }) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.view}>
          <View style={styles.container}>
            <Text style={styles.myTitle}>COURSES</Text>
          </View>

          <View>
            <Image
              source={{
                uri: "https://topkit.org/wp-content/uploads/2018/07/Sample-Course.png",
              }}
              style={styles.img}
            ></Image>
          </View>
          <TouchableOpacity>
            <View>
              <Image
                source={{
                  uri: "https://topkit.org/wp-content/uploads/2018/07/Sample-Course.png",
                }}
                style={styles.BorderClass1}
              ></Image>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("AvailableCourses")}
          >
            <View>
              <Image
                source={{
                  uri: "https://topkit.org/wp-content/uploads/2018/07/Sample-Course.png",
                }}
                style={styles.BorderClass2}
              ></Image>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View>
              <Text style={styles.defaultButton1}>GO BACK</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  view: {
    marginTop: 25,
  },
  img: {
    width: "90%",
    marginLeft: 20,
    marginTop: 20,
    height: 200,
    borderWidth: 1,
    borderWidth: 4,
    borderColor: "black",
  },
  myTitle: {
    fontSize: 30,
    textAlign: "center",
    color: "black",
    fontWeight: "bold",
    backgroundColor: "#1fbf3f",
    marginTop: 0,
    marginLeft: 20,
    marginRight: 20,
    borderColor: "black",
    borderWidth: 1,
  },
  container: {
    backgroundColor: "white",
  },
  defaultButton1: {
    backgroundColor: "#1fbf3f",
    marginTop: 90,
    marginLeft: 50,
    marginRight: 30,
    padding: 5,
    borderRadius: 15,
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
  },
  label: {
    fontSize: 16,
    marginTop: 80,
    marginLeft: -100,
    fontWeight: "bold",
    textAlign: "center",
    color: "black",
  },
  label1: {
    fontSize: 16,
    marginTop: 60,
    fontWeight: "bold",
    textAlign: "center",
    color: "black",
    marginLeft: 20,
  },
  BorderClass1: {
    width: 150,
    height: 150,
    borderWidth: 2,
    borderColor: "darkgray",
    borderRadius: 10,
    marginTop: 30,
    marginLeft: 15,
    marginRight: 10,
  },
  BorderClass2: {
    width: 150,
    height: 150,
    borderWidth: 2,
    borderColor: "darkgray",
    borderRadius: 10,
    marginTop: -150,
    marginLeft: 190,
    marginRight: 10,
  },
});

export default CourseMenu;
