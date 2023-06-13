import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  ScrollView,
  Animated,
} from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import FontAwsome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Stories from '../components/Stories';
import Posts from '../components/Posts';

const Home = () => {
  const [scroll, setScroll] = useState(false);
  // const fadeIn = useRef(new Animated.Value(0.2)).current;

  const handleScroll = (event) => {
    if (event.nativeEvent.contentOffset.y > 127) {
      setScroll(true);
      console.log(event.nativeEvent.contentOffset.y);
      // Animated.timing(fadeIn, {
      //   toValue: 0,
      //   duration: 10000,
      //   useNativeDriver: true,
      // }).start();
    } else {
      setScroll(false);
      // Animated.timing(fadeIn, {
      //   toValue: 0.2,
      //   duration: 10000,
      //   useNativeDriver: true,
      // }).start();
    }
  };

  // useEffect(() => {
  //   Animated.timing(fadeIn, {
  //     toValue: 0,
  //     duration: 1000,
  //     useNativeDriver: true,
  //   }).start();
  // }, [fadeIn]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
      <Animated.View
        style={[
          styles.headerContainer,
          scroll
            ? {
                borderBottomWidth: 1,
                borderBottomColor: '#DEDEDE',
                // borderBottomColor: `rgba(0,0,0,${fadeIn})`,
              }
            : null,
        ]}>
        <View>
          <Text style={styles.headerText}>Instagram</Text>
        </View>
        <View style={styles.headerIconContainer}>
          <FontAwsome name="plus-square-o" style={styles.headerPlusIcon} />
          <Feather name="navigation" style={styles.headerDMIcon} />
        </View>
      </Animated.View>

      <ScrollView
        onScroll={(event) => {
          handleScroll(event);
        }}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <Stories />
        </ScrollView>

        <ScrollView horizontal={false} showsVerticalScrollIndicator={false}>
          <Posts />
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 25,
    paddingVertical: 15,
    color: 'black',
  },

  headerText: {
    fontSize: 25,
    fontWeight: 600,
    color: 'black',
  },

  headerIconContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  headerPlusIcon: {
    fontSize: 27,
    marginHorizontal: 20,
    color: 'black',
    position: 'relative',
    top: 2,
  },

  headerDMIcon: {
    fontSize: 24,
    color: 'black',
  },
});
