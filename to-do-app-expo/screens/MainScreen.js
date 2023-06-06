import {
  Alert,
  FlatList,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import InputForm from "../components/InputForm";
import TodoItem from "../components/TodoItem";
import { useSelector } from "react-redux";
import { getAuth, signOut } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";

const MainScreen = () => {
  const todos = useSelector((state) => state.todo.todos);
  const todoTasks = todos.filter((item) => item.state === "todo");
  const completedTasks = todos.filter((item) => item.state === "done");
  const auth = getAuth();
  const navigation = useNavigation();

  const handleLogout = async () => {
    try {
      const logout = await signOut(auth);
      console.log("logout result:", logout);
      navigation.replace("Login");
    } catch (error) {
      console.log("Logout error : ", error);
      Alert.alert(
        "Logout Failed",
        "An error occurred during the Logout process. Please try again.",
        [
          {
            text: "OK",
          },
        ],
        {
          cancelable: true,
        }
      );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={"default"} />
      <View style={styles.headerContainer}>
        <Text style={styles.mainTitle}>To Do App (expo)</Text>
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutText}>Log out</Text>
        </TouchableOpacity>
      </View>

      <View>
        <Text style={styles.subTitle}>To Do</Text>
        {todoTasks.length !== 0 ? (
          <FlatList
            data={todoTasks}
            renderItem={({ item }) => <TodoItem {...item} />}
            keyExtractor={(item) => item.id}
          />
        ) : (
          <Text>There are no tasks to do</Text>
        )}
      </View>

      <View style={styles.separator}></View>

      <View>
        <Text style={styles.subTitle}>Done</Text>
        {completedTasks.length !== 0 ? (
          <FlatList
            data={completedTasks}
            renderItem={({ item }) => <TodoItem {...item} />}
            keyExtractor={(item) => item.id}
          />
        ) : (
          <Text>There are no completed tasks</Text>
        )}
      </View>
      <InputForm />
    </SafeAreaView>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === "android" ? 40 : 0,
    marginHorizontal: 20,
  },
  mainTitle: {
    fontSize: 35,
    fontWeight: "bold",
  },
  subTitle: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 15,
  },
  separator: {
    marginTop: 25,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "gray",
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  logoutButton: {
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 7,
    padding: 8,
    borderRadius: 8,
  },
  logoutText: {
    color: "white",
    fontSize: 13,
  },
});
