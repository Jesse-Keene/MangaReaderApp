import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableHighlight,
  Modal,
  TouchableOpacity,
  TextInput,
} from "react-native";

interface HeaderProps {
  title: string;
  chapter: number;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {
    console.log("Sign in attempt with:", username);
    setModalVisible(false);
  };

  return (
    <View style={styles.header}>
      <StatusBar backgroundColor="#2c3e50" barStyle="light-content" />
      <Text style={styles.title}>{title}</Text>

      <TouchableHighlight
        onPress={() => setModalVisible(true)}
        underlayColor="#34495e"
      >
        <Text style={{ color: "#fff", fontSize: 30 }}>☰</Text>
      </TouchableHighlight>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>Sign In</Text>

            <TextInput
              style={styles.input}
              placeholder="Username"
              value={username}
              onChangeText={setUsername}
              autoCapitalize="none"
            />

            <TextInput
              style={styles.input}
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />

            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={[styles.button, styles.signInButton]}
                onPress={handleSignIn}
              >
                <Text style={styles.textStyle}>Sign In</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.button, styles.cancelButton]}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.textStyle}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    backgroundColor: "#2c3e50",
    padding: 15,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  title: {
    color: "#FFF",
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
    marginRight: 230,
  },
  modaltitle: {
    color: "#FFF",
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
    marginRight: 230,
  },
  chapter: {
    color: "#ecf0f1",
    fontSize: 16,
    marginTop: 5,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
  },
  modalView: {
    width: "80%",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    flex: 1,
    borderRadius: 8,
    padding: 12,
    elevation: 2,
    marginHorizontal: 5,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 16,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "left",
    fontWeight: "bold",
    fontSize: 23,
  },
  input: {
    width: 250,
    height: 40,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 16,
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 10,
  },
  signInButton: {
    backgroundColor: "#2ecc71",
    marginRight: 10,
  },
  cancelButton: {
    backgroundColor: "#e74c3c",
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#2c3e50",
  },
});

export default Header;
