import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import ListIcon from "../assets/list.svg";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = getAuth();
  const navigation = useNavigation();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log("OnAuthStateChanged User : ", user);
      if (user) {
        navigation.replace("Main");
      }
    });
  }, []);

  const handleSignUp = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      console.log("Sign up Complete : ", user);
      Toast.show({
        type: "success",
        text1: "Registration Successful",
        text2: `Registration has been completed for ${email}`,
      });
    } catch (error) {
      Alert.alert(
        "Registration Failed",
        "An error occurred during the registration process. Please try again.",
        [
          {
            text: "OK",
            // onPress: () => console.log("OK Pressed"),
          },
        ],
        {
          cancelable: true,
          // onDismiss: () =>
          //   Alert.alert(
          //     "Notification",
          //     "The alert was dismissed by tapping outside of the alert dialog."
          //   ),
        }
      );
    }
  };

  const handleLogin = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      console.log("Login Complete : ", user);
    } catch (error) {
      Alert.alert(
        "Login Failed",
        "An error occurred during the Login process. Please try again.",
        [
          {
            text: "OK",
            // onPress: () => console.log("OK Pressed"),
          },
        ],
        {
          cancelable: true,
          // onDismiss: () =>
          //   Alert.alert(
          //     "Notification",
          //     "The alert was dismissed by tapping outside of the alert dialog."
          //   ),
        }
      );
    }
  };

  return (
    <View style={styles.container}>
      <ListIcon style={styles.icon} />
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="E-mail"
          // inputMode="email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={styles.input}
          secureTextEntry
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.buttonOutline]}
          onPress={handleSignUp}
        >
          <Text style={[styles.buttonText, styles.buttonOutlineText]}>
            Sign up
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    marginBottom: 30,
  },
  inputContainer: {
    width: "80%",
  },
  input: {
    width: "100%",
    marginBottom: 8,
    paddingLeft: 15,
    height: 50,
    borderRadius: 10,
    backgroundColor: "white",
  },
  buttonContainer: {
    alignItems: "center",
    marginTop: 30,
    width: "50%",
  },
  button: {
    width: "100%",
    padding: 10,
    backgroundColor: "black",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 8,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  buttonOutline: {
    backgroundColor: "white",
    marginTop: 10,
  },
  buttonOutlineText: {
    color: "black",
  },
});
