import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Animated,
  Platform,
} from 'react-native';
import React, { useEffect, useRef } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionic from 'react-native-vector-icons/Ionicons';
import { getStatusBarHeight } from 'react-native-status-bar-height';

const StatusBarHeight = getStatusBarHeight();

const Status = ({ route, navigation }) => {
  const { name, image, uploaded } = route.params;
  /**
   * * 공식문서대로, animation 객체는 리랜더링을 방지하기 위해, 직접 값을 변경하지 않도록 useRef 훅을 사용하여 접근 및 수정을 한다.
   */
  const progressAnimation = useRef(new Animated.Value(0)).current;
  const progressInterpolate = progressAnimation.interpolate({
    inputRange: [0, 5],
    outputRange: ['0%', '100%'],
  });

  useEffect(() => {
    Animated.timing(progressAnimation, {
      toValue: 5,
      duration: 5000,
      useNativeDriver: false,
    }).start(() => {
      navigation.goBack();
    });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'black'} barStyle={'light-content'} />

      <View style={styles.progressBarContainer}>
        <Animated.View
          style={{
            height: 2,
            width: progressInterpolate,
            backgroundColor: 'white',
          }}></Animated.View>
      </View>

      <View style={styles.storyHeaderContainer}>
        <View style={styles.userProfileContainer}>
          <Image source={image} style={styles.userImage} />
          <Text style={styles.userName}>{name}</Text>
          <Text style={styles.uploaded}>{uploaded}</Text>
        </View>
        <TouchableOpacity
          style={styles.closeButtonContainer}
          onPress={() => {
            navigation.goBack();
          }}>
          <Ionic name="close" style={styles.closeButton} />
        </TouchableOpacity>
      </View>

      <Image source={image} style={styles.storyContent} />
    </SafeAreaView>
  );
};

export default Status;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    height: '100%',
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: Platform.OS === 'ios' ? StatusBarHeight : 15,
  },

  progressBarContainer: {
    width: '100%',
    borderTopWidth: 1,
    borderColor: 'gray',
  },

  storyHeaderContainer: {
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: '10%',
  },

  userProfileContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  userImage: {
    borderRadius: 100,
    backgroundColor: 'white',
    width: 35,
    height: 35,
    resizeMode: 'cover',
  },

  userName: {
    color: 'white',
    fontSize: 15,
    paddingLeft: 8,
    fontWeight: 700,
  },

  uploaded: {
    fontSize: 10,
    color: 'white',
    opacity: 0.4,
    fontWeight: 600,
    paddingLeft: 8,
    top: 1,
  },

  closeButton: {
    color: 'white',
    opacity: 0.6,
    fontSize: 25,
  },

  storyContent: {
    width: '100%',
    height: '70%',
    resizeMode: 'cover',
  },
});
