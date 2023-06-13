import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  SafeAreaView,
} from 'react-native';
import Ionic from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

import ProfileBody from '../components/ProfileBody';
import ProfileButton from '../components/ProfileButton';
import FriendItem from '../components/FriendItem';
import { FriendsProfileData } from '../components/DataBase';

const FriendProfile = ({ route, navigation }) => {
  const { name, profileImage, post, followers, following } = route.params;
  return (
    <SafeAreaView
      style={{
        width: '100%',
        backgroundColor: 'white',
      }}>
      <View style={{ padding: 10 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionic name="arrow-back" style={{ fontSize: 20, color: 'black' }} />
          </TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '92%',
            }}>
            <Text style={{ fontSize: 15, marginLeft: 10, fontWeight: 'bold' }}>
              {name}
            </Text>
            <Feather
              name="more-vertical"
              style={{ fontSize: 20, color: 'black' }}
            />
          </View>
        </View>

        <ProfileBody
          name={name}
          profileImage={profileImage}
          post={post}
          followers={followers}
          following={following}
        />

        <ProfileButton id={1} />

        <Text
          style={{
            paddingTop: 30,
            paddingBottom: 10,
            fontSize: 15,
            fontWeight: 'bold',
          }}>
          Recommendations for You
        </Text>
      </View>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}>
        {name === FriendProfile.name
          ? null
          : FriendsProfileData.map((data, index) => (
              <FriendItem key={index} data={data} name={name} />
            ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default FriendProfile;
