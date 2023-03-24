import React, { useEffect, useState } from "react";
import axios from "axios";
import { StyleSheet, TouchableOpacity, Text, View, Modal } from "react-native";
import { API_KEY } from "../../constants/constants";

const DeleteDoctor = ({ docID, isShow, closePop }) => {
  const [openSuccess, setOpeenSuccess] = useState(false);
  const [openError, setOpenError] = useState(false);

  const deleteDoctor = () => {
    console.log(docID);

    axios
      .put(`${API_KEY}/doctorroutes/deleteDoctor`, {
        docID: docID,
      })
      .then((res) => {
        setOpeenSuccess(true);

        setTimeout(() => {
          setOpeenSuccess(false);
          closePop();
        }, 1500);
      })
      .catch((err) => {
        setOpenError(true);

        setTimeout(() => {
          setOpenError(false);
          closePop();
        }, 1500);
      });
  };

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
            <Text>Are you sure you want to delete this appointment?</Text>
            <View style={{ paddingTop: 20, flex: 1, flexDirection: "row" }}>
              <View style={{ flex: 1 }}>
                <TouchableOpacity onPress={deleteDoctor}>
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
            <Text style={{ color: "#07da63" }}>Successfully Deleted</Text>
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
            <Text style={{ color: "#FF0000" }}>Deletion failed</Text>
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

export default DeleteDoctor;
