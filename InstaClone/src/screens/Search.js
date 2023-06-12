import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Image,
  Dimensions,
} from 'react-native';
import React, { useState } from 'react';
import SearchInput from '../components/SearchInput';
import SearchContent from '../components/SearchContent';
import { getStatusBarHeight } from 'react-native-status-bar-height';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Ionic from 'react-native-vector-icons/Ionicons';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const statusBarHeight = getStatusBarHeight();
const Platform = Platform.OS;

const Search = () => {
  const [image, setImage] = useState(null);

  const getImageData = (image) => {
    setImage(image);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <SearchInput />
        <SearchContent getImageData={getImageData} />
      </ScrollView>
      {image ? (
        <View style={styles.modalContainerTop}>
          <StatusBar backgroundColor="#525252" barStyle="dark-content" />
          <View style={styles.modalContainer}>
            <View style={styles.modalHeaderContainer}>
              <Image source={image} style={styles.modalHeaderImage} />
              <View style={{ paddingLeft: 8 }}>
                <Text>User</Text>
              </View>
            </View>
            <Image source={image} style={styles.modalImage} />
            <View style={styles.modalBottomContainer}>
              <Ionic name="ios-heart-outline" style={{ fontSize: 26 }} />
              <Ionic
                name="ios-person-circle-outline"
                style={{ fontSize: 27 }}
              />
              <Feather name="navigation" style={{ fontSize: 23 }} />
            </View>
          </View>
        </View>
      ) : null}
    </SafeAreaView>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: 'white',
    position: 'relative',
  },

  modalContainerTop: {
    position: 'absolute',
    zIndex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(52,52,52,0.8)',
    top: Platform === 'ios' ? statusBarHeight : 0,
  },

  modalContainer: {
    position: 'absolute',
    top: windowHeight / 6,
    left: windowWidth / 18,
    backgroundColor: 'white',
    width: '90%',
    height: 465,
    borderRadius: 15,
    zIndex: 1,
  },

  modalHeaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
  },

  modalHeaderImage: {
    width: 30,
    height: 30,
    borderRadius: 100,
  },

  modalImage: {
    width: '100%',
    height: '80%',
  },

  modalBottomContainer: {
    justifyContent: 'space-around',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
  },
});
