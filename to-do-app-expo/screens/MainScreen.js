import { Platform, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import InputForm from "../components/InputForm";
import TodoItem from "../components/TodoItem";

const MainScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={"default"} />
      <Text style={styles.mainTitle}>To Do App (expo)</Text>

      <View>
        <Text style={styles.subTitle}>To Do</Text>
        <TodoItem />
      </View>

      <View style={styles.separator}></View>

      <View>
        <Text style={styles.subTitle}>Done</Text>
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
    paddingBottom: 20,
  },
  subTitle: {
    fontSize: 25,
    fontWeight: "bold",
  },
  separator: {
    marginTop: 25,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "gray",
  },
});
