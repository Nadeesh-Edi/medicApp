import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  ImageBackground,
} from "react-native";

const DoctorsMenuScreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={{
        uri: "https://png.pngtree.com/background/20210709/original/pngtree-blue-medical-industry-hospital-doctor-poster-background-picture-image_954314.jpg",
      }}
      resizeMode="cover"
      style={styles.backgroundImg}
    >
      <View style={styles.menuContainer}>
        <TouchableOpacity
          style={styles.menuBtn}
          onPress={() => {
            navigation.navigate("Insert Doctor");
          }}
        >
          <Text style={{ color: "#ffffff" }}>ADD NEW DOCTOR</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuBtn}
          onPress={() => {
            navigation.navigate("View Doctors");
          }}
        >
          <Text style={{ color: "#ffffff" }}>VIEW ALL DOCTORS</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  menuBtn: {
    padding: 20,
    borderRadius: 30,
    backgroundColor: "#1AA7EC",
    margin: 10,
    color: "#ffffff",
  },
  menuContainer: {
    marginTop: 50,
    marginLeft: 20,
    marginRight: 20,
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  backgroundImg: {
    height: "100%",
  },
});

export default DoctorsMenuScreen;
