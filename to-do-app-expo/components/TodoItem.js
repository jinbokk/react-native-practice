import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import CheckboxButtonUnchecked from "../assets/checkbox-unchecked.svg";
import CheckboxButtonChecked from "../assets/checkbox-checked.svg";
import DeleteButton from "../assets/delete.svg";

const TodoItem = () => {
  return (
    <View style={styles.itemContainer}>
      <Pressable
        style={[styles.deleteButton, styles.deleteButtonDone]}
        hitSlop={10}
      >
        <CheckboxButtonUnchecked />
        <CheckboxButtonChecked />
      </Pressable>

      <Text style={[styles.itemText, styles.itemTextChecked]}>Todo_1 test</Text>

      <Pressable
        style={[styles.deleteButton, styles.deleteButtonDone]}
        hitSlop={10}
      >
        <DeleteButton />
      </Pressable>
    </View>
  );
};

export default TodoItem;

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
  },
});
