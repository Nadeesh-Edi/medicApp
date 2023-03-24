import React from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  ImageBackground
} from "react-native";

const AboutUs = ({ navigation }) => {
  
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
        <View style={styles.containerBox}>
            <Text> MEDICAPP Company Limited was established in March 2023 by the co-activity of Medical Channeling Mobile App, 
                   in the Sri Lanka and Black Eye Consulting from Malaysia are managing different sorts of wellbeing administrations 
                   24 hours since it was set up. 
            </Text>  
            <Text>  </Text>   
            <Text> 
                MEDICAPP Healthcare benefit is for the most part go for each phase of Myanmar individuals the individuals who live in 
                different spots to be served in sheltered and simple and viably.
            </Text>  
            <Text>  </Text>  
            <Text>  
                Wellbeing records will be kept by Electronic Record System to fulfill the prerequisites of the patients to 
                diminish the mix-ups and made simple to get our well-being record by the utilization of Electronic Record System 
                while exchanging patients to a Doctor, a Clinic or a Hospital.
            </Text>  
            <Text>  </Text>   
        </View>        
        
      </ScrollView>
      </ImageBackground>

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
    backgroundColor: '#ffffff',
    marginTop:100
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

export default AboutUs;