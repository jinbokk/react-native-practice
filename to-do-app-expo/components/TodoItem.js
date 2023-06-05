import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import CheckboxButtonUnchecked from "../assets/checkbox-unchecked.svg";
import CheckboxButtonChecked from "../assets/checkbox-checked.svg";
import DeleteButton from "../assets/delete.svg";

const TodoItem = (props) => {
  return (
    <View style={styles.itemContainer}>
      <Pressable
        style={[styles.deleteButton, styles.deleteButtonDone]}
        hitSlop={10}
      >
        {props.state === "todo" ? (
          <CheckboxButtonUnchecked />
        ) : (
          <CheckboxButtonChecked />
        )}
      </Pressable>

      <Text style={[styles.itemText, styles.itemTextChecked]}>
        {props.text}
      </Text>

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
  itemText: {
    fontSize: 15,
    lineHeight: 20,
    marginRight: "auto",
    paddingRight: "25",
  },
  itemTextChecked: {
    opacity: 0.4,
    textDecorationLine: "line-through",
  },
  deleteButton: {
    opacity: 0.8,
  },
  deleteButtonDone: {
    color: "gray",
    alignContent: "flex-end",
  },
});
