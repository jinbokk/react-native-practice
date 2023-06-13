import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import React from 'react';
import ProfileBody from '../components/ProfileBody';
import ProfileButton from '../components/ProfileButton';
import Entypo from 'react-native-vector-icons/Entypo';

const Profile = () => {
  let circles = [];
  let numberOfCircles = 10;

  for (let index = 0; index < numberOfCircles; index++) {
    circles.push(
      <View key={index}>
        {index === 0 ? (
          <View
            style={{
              width: 60,
              height: 60,
              borderRadius: 100,
              borderWidth: 1,
              opacity: 0.6,
              marginHorizontal: 5,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Entypo
              name="plus"
              style={{ fontSize: 40, color: 'black', opacity: 0.8 }}
            />
          </View>
        ) : (
          <View
            style={{
              width: 60,
              height: 60,
              borderRadius: 100,
              backgroundColor: 'black',
              opacity: 0.1,
              marginHorizontal: 5,
            }}></View>
        )}
      </View>,
    );
  }

  return (
    <SafeAreaView style={{ width: '100%', backgroundColor: 'white' }}>
      <View style={{ width: '100%', padding: 15 }}>
        <ProfileBody
          name="Jinbok"
          accountName="Jinbok"
          profileImage={require('../../assets/images/userProfile.jpeg')}
          followers="259"
          following="265"
          post="13"
        />
        <ProfileButton
          id={0}
          name="Jinbok"
          accountName="Jinbok"
          profileImage={require('../../assets/images/userProfile.jpeg')}
        />
      </View>

      <View>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingVertical: 5,
            paddingHorizontal: 10,
          }}>
          {circles}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
