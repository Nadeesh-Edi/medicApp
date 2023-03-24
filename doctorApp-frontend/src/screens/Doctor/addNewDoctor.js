import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import {
  TextInput,
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Modal,
  ImageBackground
} from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import { API_KEY } from "../../constants/constants";

const NewDoctor = ({ navigation }) => {
  const [name, setName] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [openSuccess, setOpeenSuccess] = useState(false);
  const [openError, setOpenError] = useState(false);

 const addNewDoctor = () => {
    const doctor = {
      name: name,
      specialization: specialization,
      contactNo: contactNo
    };

    axios
      .post(`${API_KEY}/doctorroutes/addDoctor`, doctor)
      .then((res) => {
        openSuccessPopup();
      })
      .catch((err) => {
        openErrorPopup();
      });
  };

  const openSuccessPopup = () => {
    setOpeenSuccess(true);

    setTimeout(() => {
      setOpeenSuccess(false);
      navigation.goBack();
    }, 1500);
  };

  const openErrorPopup = () => {
    setOpenError(true);

    setTimeout(() => {
      setOpenError(false);
    }, 1500);
  };

  // useEffect(() => {
  //   getDoctors();
  // }, []);

  return (
    <View>
      <ImageBackground
      source={{
        uri: "https://png.pngtree.com/background/20210709/original/pngtree-blue-medical-industry-hospital-doctor-poster-background-picture-image_954314.jpg",
      }}
      resizeMode="cover"
      style={styles.backgroundImg}
    >
      <ScrollView>
        <Text style={styles.titleText}>Doctor Details</Text>
        <View style={styles.containerBox}>
          <TextInput
            style={styles.inputField}
            onChangeText={setName}
            value={name}
            placeholder="Enter Doctor Name"
          ></TextInput>
          <TextInput
            style={styles.inputField}
            onChangeText={setSpecialization}
            value={specialization}
            placeholder="Enter Doctor Specialization"
          ></TextInput>
          <TextInput
            style={styles.inputField}
            onChangeText={setContactNo}
            value={contactNo}
            placeholder="Enter patient contact number"
          ></TextInput>          
        </View>
        
        <View style={{ flex: 1, flexDirection: "row" }}>
          <View style={{ flex: 1 }}></View>
          <View style={{ flex: 8 }}>
            <TouchableOpacity
              style={styles.menuBtn}
              onPress={() => {
                addNewDoctor();
              }}
            >
              <Text
                style={{ color: "#ffffff", textAlign: "center", fontSize: 17 }}
              >
                Submit
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1 }}></View>
        </View>
      </ScrollView>
      </ImageBackground>

      {/* Modal for success */}
      <Modal animationType="fade" transparent={true} visible={openSuccess}>
        <View style={styles.centeredView}>
          <View
            style={{
              backgroundColor: "#ffffff",
              padding: 40,
              borderRadius: 25,
            }}
          >
            <Text style={{ color: "#07da63" }}>Successfully created</Text>
          </View>
        </View>
      </Modal>

      {/* Modal for error */}
      <Modal animationType="slide" transparent={true} visible={openError}>
        <View style={styles.centeredView}>
          <View
            style={{
              backgroundColor: "#ffffff",
              padding: 40,
              borderRadius: 25,
            }}
          >
            <Text style={{ color: "#FF0000" }}>Creation failed</Text>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  inputField: {
    padding: 10,
    borderRadius: 20,
    borderColor: "#1AA7EC",
    borderWidth: 1,
    margin: 10,
  },
  containerBox: {
    padding: 10,
    borderRadius: 20,
    borderColor: "#1AA7EC",
    borderWidth: 2,
    margin: 10,
    backgroundColor: '#ffffff'
  },
  titleText: {
    fontSize: 25,
    marginLeft: 15,
    marginTop: 10,
    marginLeft:120,
    marginTop:80,
    marginBottom:20
  },
  menuBtn: {
    padding: 20,
    borderRadius: 30,
    backgroundColor: "#1AA7EC",
    marginTop: 10,
    marginBottom: 30,
    color: "#ffffff",
    borderColor: '#ffffff',
    borderWidth: 1
  },
  centeredView: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 52,
  },
  selectionBox: {
    padding: 10,
    borderRadius: 20,
    borderColor: "#1AA7EC",
    borderWidth: 1,
    margin: 10,
    backgroundColor: '#ffffff'
  },
  backgroundImg: {
    height: '100%'
  }
});

export default NewDoctor;