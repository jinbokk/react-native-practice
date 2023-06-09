import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/slices/todoSlice";

const InputForm = () => {
  const [currentValue, setCurrentValue] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (currentValue !== "") {
      dispatch(addTodo(currentValue));
      setCurrentValue("");
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.addFormContainer}
    >
      <TextInput
        style={styles.inputField}
        placeholder="Please write down your tasks"
        value={currentValue}
        onChangeText={setCurrentValue}
        onSubmitEditing={handleSubmit}
      />
      <Pressable style={styles.addButton} onPress={handleSubmit}>
        <Text style={styles.addButtonText}>+</Text>
      </Pressable>
    </KeyboardAvoidingView>
  );
};

export default InputForm;

const styles = StyleSheet.create({
  addFormContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: "auto",
    marginBottom: 30,
    paddingHorizontal: 20,
    backgroundColor: "#f7f8fa",
  },
  inputField: {
    flex: 1,
    height: 40,
    padding: 5,
    marginRight: 20,
    borderRadius: 5,
    borderColor: "rgba(0,0,0,0.2)",
    borderWidth: 1,
    color: "black",
    fontSize: 15,
    textAlignVertical: "center",
  },
  addButton: {
    width: 40,
    height: 40,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  addButtonText: {
    color: "white",
    fontSize: 25,
  },
});
