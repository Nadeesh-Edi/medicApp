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

const CreateAppointment = ({ navigation }) => {
  const [aptNo, setAptNo] = useState(0);
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [docs, setDocs] = useState([]);
  const [selectedDoc, setSelectedDoc] = useState({});
  const [aptTime, setAptTime] = useState("");
  const [openSuccess, setOpeenSuccess] = useState(false);
  const [openError, setOpenError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const getDoctors = () => {
    axios
      .get(`${API_KEY}/hospitalStaff/allDoctors`)
      .then((res) => {
        setDocs(res.data);
      })
      .catch((err) => {
        openErrorPopup();
      });
  };

  const validateInputs = () => {
    if (aptNo == 0) {
      openErrorPopup('Appointment number cannot be 0')
    } else if (name == "") {
      openErrorPopup('Name cannot be empty');
    } else if (age == 0) {
      openErrorPopup('Age cannot be 0')
    } else if (phone == "") {
      openErrorPopup('Contact number cannot be empty')
    } else if (email == "") {
      openErrorPopup('Email cannot be empty')
    } else if (Object.keys(selectedDoc) == 0) {
      openErrorPopup('Please select a doctor')
    } else {
      validateAppointmentNo()
    }
  }

  const validateAppointmentNo = () => {
    axios.get(`${API_KEY}/patientRoutes/getAppointmentById/${aptNo}`).then((res) => {
      if (Object.keys(res.data) !== 0) {
        openErrorPopup('Appointment number already exists')
      } else {
        createNewAppointment();
      }
    }).catch(err => {
      createNewAppointment();
    })
  }

  const createNewAppointment = () => {
    console.log('in create');
    const patient = {
      name: name,
      age: age,
      contactNo: phone,
      email: email,
    };
    const doctor = {
      name: selectedDoc.name,
      specialization: selectedDoc.specialization,
    };

    const passData = {
      appointmentNo: aptNo,
      doctor: doctor,
      patient: patient,
    };

    axios
      .post(`${API_KEY}/patientRoutes/makeAppointment`, passData)
      .then((res) => {
          openSuccessPopup();
      })
      .catch((err) => {
        openErrorPopup('Creation failed');
      });
  };

  // Open success popup
  const openSuccessPopup = () => {
    setOpeenSuccess(true);

    setTimeout(() => {
      setOpeenSuccess(false);
      navigation.goBack();
    }, 1500);
  };

  // Open error popup
  const openErrorPopup = (msg) => {
    setErrorMsg(msg)
    setOpenError(true);

    setTimeout(() => {
      setOpenError(false);
    }, 1500);
  };

  useEffect(() => {
    getDoctors();
  }, []);

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
        <Text style={styles.titleText}>Appointment number</Text>
        <View style={styles.containerBox}>
          <TextInput
            style={styles.inputField}
            onChangeText={setAptNo}
            value={String(aptNo)}
            keyboardType={"numeric"}
            numericvalue
            placeholder="Enter Appointment number"
          ></TextInput>
        </View>
        <Text style={styles.titleText}>Patient Details</Text>
        <View style={styles.containerBox}>
          <TextInput
            style={styles.inputField}
            onChangeText={setName}
            value={name}
            placeholder="Enter patient name"
          ></TextInput>
          <TextInput
            style={styles.inputField}
            onChangeText={setAge}
            value={String(age)}
            keyboardType={"numeric"}
            numericvalue
            placeholder="Enter patient age"
          ></TextInput>
          <TextInput
            style={styles.inputField}
            onChangeText={setPhone}
            value={phone}
            placeholder="Enter patient contact number"
          ></TextInput>
          <TextInput
            style={styles.inputField}
            onChangeText={setEmail}
            value={email}
            placeholder="Enter patient email"
          ></TextInput>
        </View>
        <Text style={styles.titleText}>Doctor Details</Text>
        <View style={styles.containerBox}>
          <SelectDropdown
            data={docs}
            onSelect={(selectedItem, index) => {
              setSelectedDoc(selectedItem);
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem.name;
            }}
            rowTextForSelection={(item, index) => {
              return item.name;
            }}
            buttonStyle={styles.selectionBox}
            dropdownStyle={styles.selectionBox}
          ></SelectDropdown>
        </View>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <View style={{ flex: 1 }}></View>
          <View style={{ flex: 8 }}>
            <TouchableOpacity
              style={styles.menuBtn}
              onPress={() => {
                validateInputs();
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
            <Text style={{ color: "#FF0000" }}>{errorMsg}</Text>
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
    fontSize: 17,
    marginLeft: 15,
    marginTop: 10,
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

export default CreateAppointment;
