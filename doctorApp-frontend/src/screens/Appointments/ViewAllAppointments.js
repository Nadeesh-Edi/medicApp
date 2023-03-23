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
import DeleteConfirmPopup from "./DeleteConfirmPopup";

const ViewAllAppointments = ({ navigation }) => {
  const [appointments, setAppointments] = useState([]);
  const [dates, setDates] = useState([]);
  const [channellingData, setChannellings] = useState([]);
  const [showDelete, setShowDelete] = useState(false);
  const [selectedId, setSelectedId] = useState(0);

  useEffect(() => {
    getAppointments();
  }, []);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getAppointments()
    });

    return unsubscribe;
  }, [navigation])

  const getAppointments = () => {
    let appArray = [];
    let datesArr = [];
    axios
      .get(`${API_KEY}/hospitalStaff/viewChannellings`)
      .then((res) => {
        let channelings = res.data;
        setChannellings(channelings);

        channelings.forEach((item) => {
          datesArr.push({
            date: item.date,
            time: item.startingTime,
          });
          item.appointmentList.forEach((apmnt) => {
            appArray.push(apmnt);
          });
        });
        setAppointments(appArray);
        setDates(datesArr);
      })
      .catch((err) => {});
  };

  const deleteAppointment = (id) => {
    console.log("delete");
    setSelectedId(id);
    setShowDelete(true);
  };

  const closeDeletePopup = () => {
    setShowDelete(false);
    getAppointments();
  };

  const openEditPage = (aptNo) => {
    navigation.navigate("Edit Appointment", { aptNo: aptNo });
  };

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
          {appointments.map((item, index) => {
            return (
              <View style={styles.listItem} key={index}>
                <View style={{ flex: 3, flexDirection: "row" }}>
                  <View style={{ flex: 1 }}>
                    <View style={styles.aptNo}>
                      <Text>{item.appointmentNo}</Text>
                    </View>
                  </View>
                  <View style={{ flex: 4 }}>
                    <Text style={styles.name}>{item.patient.name}</Text>
                    <Text>{"Doctor : " + item.doctor.name}</Text>
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
                      onPress={() => openEditPage(item.appointmentNo)}
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
                      onPress={() => deleteAppointment(item._id)}
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
      <DeleteConfirmPopup
        appId={selectedId}
        isShow={showDelete}
        closePop={closeDeletePopup}
      ></DeleteConfirmPopup>
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
  name: {
    color: "#1AA7EC",
    fontSize: 17,
  },
  icon: {
    width: 30,
    height: 30,
  },
  aptNo: {
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

export default ViewAllAppointments;
