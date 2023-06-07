import {StyleSheet, Text, View, StatusBar, ScrollView} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import FontAwsome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Stories from '../components/Stories';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
      <View style={styles.headerContainer}>
        <View>
          <Text style={styles.headerText}>Instagram</Text>
        </View>
        <View style={styles.headerIconContainer}>
          <FontAwsome name="plus-square-o" style={styles.headerPlusIcon} />
          <Feather name="navigation" style={styles.headerDMIcon} />
        </View>
      </View>

      <ScrollView>
        <Stories />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 15,
    color: 'black',
  },

  headerText: {
    fontSize: 25,
    fontWeight: 500,
    color: 'black',
  },

  headerIconContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  headerPlusIcon: {
    fontSize: 27,
    marginHorizontal: 10,
    color: 'black',
    position: 'relative',
    top: 2,
  },

  headerDMIcon: {
    fontSize: 24,
    marginHorizontal: 10,
    color: 'black',
  },
});
