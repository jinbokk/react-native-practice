import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';
import React from 'react';
import ActivityThisWeek from '../components/ActivityThisWeek';
import ActivityPrevious from '../components/ActivityPrevious';
import ActivityRecommend from '../components/ActivityRecommend';
import { FriendsProfileData } from '../components/DataBase';

const Activity = () => {
  return (
    <SafeAreaView style={{ backgroundColor: 'white' }}>
      <Text style={styles.mainText}>Activity</Text>

      <ScrollView
        contentContainerStyle={{ paddingHorizontal: 15 }}
        showsVerticalScrollIndicator={false}>
        <ActivityThisWeek />
        {/* {FriendsProfileData.slice(0, 3).map((data, index) => {
          return <ActivityThisWeek data={data} key={index} />;
        })} */}

        <Text style={styles.sectionText}>Previous Activity</Text>
        {FriendsProfileData.slice(3, 6).map((data, index) => {
          return <ActivityPrevious data={data} key={index} />;
        })}

        <Text style={styles.sectionText}>Recommendations for You</Text>
        {FriendsProfileData.slice(6, 12).map((data, index) => {
          return <ActivityRecommend data={data} key={index} />;
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Activity;

const styles = StyleSheet.create({
  mainText: {
    fontSize: 18,
    fontWeight: 'bold',
    borderBottomWidth: 0.5,
    borderBottomColor: '#DEDEDE',
    padding: 15,
  },

  sectionText: {
    fontWeight: 'bold',
    paddingVertical: 10,
  },
});
