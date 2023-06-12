import { StyleSheet, Text, View, TextInput } from 'react-native';
import React from 'react';
import Ionic from 'react-native-vector-icons/Ionicons';

const SearchInput = () => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.textInput} placeholder="Search" />
      <Ionic name="search" style={styles.searchIcon} />
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: '94%',
    paddingVertical: 10,
    position: 'relative',
  },

  searchIcon: {
    fontSize: 18,
    opacity: 0.7,
    position: 'absolute',
    left: 15,
    zIndex: 1,
  },

  textInput: {
    width: '100%',
    backgroundColor: '#EBEBEB',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 15,
    paddingVertical: 4,
    paddingLeft: 40,
  },
});
