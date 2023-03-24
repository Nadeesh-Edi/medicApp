import React, { useEffect, useState } from "react";
import { StyleSheet, TouchableOpacity, Text, View, Modal, Linking } from "react-native";
import call from 'react-native-phone-call'

const CallConfirmPopup = ({ phoneNo, name, isShow, closePop }) => {
  const [openError, setOpenError] = useState(false);

  const makeCall = () => {
    const supported = Linking.canOpenURL('tel:'+phoneNo);

    if (supported) {
      Linking.openURL('tel:'+phoneNo);
      closePop()
    } else {
      setOpenError(true)

      setTimeout(() => {
        setOpenError(false)
      }, 1500)
    }
  }

  return (
    <View>
      <Modal animationType="slide" transparent={true} visible={isShow}>
        <View style={styles.centeredView}>
          <View
            style={{
              backgroundColor: "#ffffff",
              padding: 40,
              borderRadius: 25,
              height: "23%",
            }}
          >
            <Text>Are you sure you want to call {name}?</Text>
            <View style={{ paddingTop: 20, flex: 1, flexDirection: "row" }}>
              <View style={{ flex: 1 }}>
                <TouchableOpacity onPress={makeCall}>
                  <Text style={{ color: "#1e2f97", textAlign: "center" }}>
                    Confirm
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={{ flex: 1 }}>
                <TouchableOpacity
                  onPress={() => {
                    closePop();
                  }}
                >
                  <Text style={{ color: "#FF0000", textAlign: "center" }}>
                    Cancel
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>

      {/* Modal for error */}
      <Modal animationType="fade" transparent={true} visible={openError}>
        <View style={styles.centeredView}>
          <View
            style={{
              backgroundColor: "#ffffff",
              padding: 40,
              borderRadius: 25,
            }}
          >
            <Text style={{ color: "#FF0000" }}>Error Calling</Text>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 52,
  },
});

export default CallConfirmPopup;
