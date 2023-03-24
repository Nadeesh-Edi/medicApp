import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { API_KEY } from "../../constants/constants";
import DeleteDoctor from "./deleteDoctor";
import CallDoctor from "./callingDoctor";

const ViewAllDoctors = ({ navigation }) => {
  const [doctors, setDoctors] = useState([]);
  const [showDelete, setShowDelete] = useState(false);
  const [selectedId, setSelectedId] = useState(0);

  const [name, setName] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [showCall, setShowCall] = useState(false);
  
  useEffect(() => {
    getDoctorsList();
  }, []);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
        getDoctorsList()
    });

    return unsubscribe;
  }, [navigation])

  const getDoctorsList = () => {
    let appArray = [];
    let datesArr = [];
    axios
      .get(`${API_KEY}/doctorroutes/allDoctors`)
      .then((res) => {
        let doctors = res.data;
        setDoctors(doctors);        
      })
      .catch((err) => {});
  };

  const deleteDoctor = (id) => {
    console.log("delete");
    setSelectedId(id);
    setShowDelete(true);
  };

  const closeDeletePopup = () => {
    setShowDelete(false);
    getDoctorsList();
  };

  const openEditPage = (docID) => {
    navigation.navigate("Edit Doctor", { docID: docID });
  };

  const callDoctor = (phone, name) => {
    setContactNo(phone)
    setName(name);
    setShowCall(true)
  }

  const closeCallPopup = () => {
    setShowCall(false);
  }

  return (
    <SafeAreaView>
      <ImageBackground
        source={{
          uri: "https://png.pngtree.com/background/20210709/original/pngtree-blue-medical-industry-hospital-doctor-poster-background-picture-image_954314.jpg",
        }}
        resizeMode="cover"
        style={styles.backgroundImg}
      >
        <ScrollView>
          {doctors.map((item, index) => {
            return (
              <View style={styles.listItem} key={index}>
                <View style={{ flex: 3, flexDirection: "row" }}>
                  <View style={{ flex: 1 }}>
                    <View>
                    <View style={{ flex: 1, marginTop:45}}>
                      <TouchableOpacity
                        onPress={() => callDoctor(item.contactNo, item.name)}
                      >
                        <Image
                          source={{
                            uri: "https://uxwing.com/wp-content/themes/uxwing/download/communication-chat-call/accept-call-icon.png",
                          }}
                          style={styles.icon}
                        ></Image>
                      </TouchableOpacity>
                  </View>
                    </View>
                  </View>
                  <View style={{ flex: 4 }}>
                    {/* <Text style={styles.spec}>{item.specialization}</Text> */}                    
                    <Text>{"Doctor : " + item.name}</Text>
                    <Text>{"Specialization : " + item.specialization}</Text>
                    <Text>{"Contact No : " + item.contactNo}</Text>
                    <Text></Text>
                    <Text>{ item._id}</Text>
                  </View>
                </View>
                <View
                  style={{
                    flex: 1,
                    alignItems: "flex-end",
                    flexDirection: "row",
                  }}
                >
                  <View style={{ flex: 1 }}>
                    <TouchableOpacity
                      onPress={() => openEditPage(item._id)}
                    >
                      <Image
                        source={{
                          uri: "https://cdn.pixabay.com/photo/2017/06/06/00/33/edit-icon-2375785_1280.png",
                        }}
                        style={styles.icon}
                      ></Image>
                    </TouchableOpacity>
                  </View>
                  <View style={{ flex: 1 }}>
                    <TouchableOpacity
                      onPress={() => deleteDoctor(item._id)}
                    >
                      <Image
                        source={{
                          uri: "https://icon-library.com/images/icon-delete/icon-delete-16.jpg",
                        }}
                        style={styles.icon}
                      ></Image>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            );
          })}
        </ScrollView>
      </ImageBackground>

      <DeleteDoctor
        docID={selectedId}
        isShow={showDelete}
        closePop={closeDeletePopup}
      ></DeleteDoctor>

      <CallDoctor
        phoneNo={contactNo}
        name={name}
        isShow={showCall}
        closePop={closeCallPopup}
      ></CallDoctor>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 20,
    borderRadius: 20,
    borderColor: "#1AA7EC",
    backgroundColor: "#ffffff",
    borderWidth: 1,
    margin: 10,
    flex: 1,
    flexDirection: "row",
    alignItems: 'center'
  },
  spec: {
    color: "#1AA7EC",
    fontSize: 17,
  },
  icon: {
    width: 30,
    height: 30,
  },
  dname: {
    borderRadius: 50,
    backgroundColor: "#e69b00",
    flex: 1,
    margin: 10,
    paddingVertical: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  backgroundImg: {
    height: "100%",
  },
});

export default ViewAllDoctors;
