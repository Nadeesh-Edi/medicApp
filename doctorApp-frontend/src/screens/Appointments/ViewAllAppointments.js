import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { API_KEY } from "../../constants/constants";

const ViewAllAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [dates, setDates] = useState([]);
  const [channellingData, setChannellings] = useState([])

  useEffect(() => {
    let appArray = [];
    let datesArr = [];
    axios
      .get(`${API_KEY}/hospitalStaff/viewChannellings`)
      .then((res) => {
        let channelings = res.data;
        setChannellings(channelings);

        channelings.forEach((item) => {
            console.log(item.date);
            datesArr.push({
                date: item.date,
                time: item.startingTime
            })
          item.appointmentList.forEach((apmnt) => {
            appArray.push(apmnt);
          });
        });
        setAppointments(appArray);
        setDates(datesArr);
      })
      .catch((err) => {});
  }, []);

  return (
    <SafeAreaView>
      <ScrollView style={{ backgroundColor: "#fff" }}>
        {appointments.map((item, index) => {
          return (
            <View style={styles.listItem} key={index}>
              <View style={{ flex: 3 }}>
                <Text style={styles.name}>{item.patient.name}</Text>
                <Text>{'Doctor : '+item.doctor.name}</Text>
              </View>
              <View style={{ flex: 1, alignItems: "flex-end", flexDirection: 'row' }}>
                <View style={{ flex: 1 }}>
                  <TouchableOpacity>
                  <Image source={{ uri: 'https://cdn.pixabay.com/photo/2017/06/06/00/33/edit-icon-2375785_1280.png' }} style={styles.icon}></Image>
                  </TouchableOpacity>
                </View>
                <View style={{ flex: 1 }}>
                <TouchableOpacity>
                  <Image source={{ uri: 'https://icon-library.com/images/icon-delete/icon-delete-16.jpg' }} style={styles.icon}></Image>
                  </TouchableOpacity>
                </View>
                {/* <Text>{dates[index].date}</Text>
                <Text>{dates[index].time.hrs + ':' + dates[index].time.mins}</Text> */}
              </View>
            </View>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 20,
    borderRadius: 20,
    borderColor: "#1AA7EC",
    borderWidth: 1,
    margin: 10,
    flex: 1,
    flexDirection: "row",
  },
  name: {
    color: "#1AA7EC",
    fontSize: 17,
  },
  icon: {
    width: 30,
    height: 30
  },
  aptNo: {
    borderRadius: 50,
    backgroundColor: '#e69b00',
    flex: 1
  }
});

export default ViewAllAppointments;
