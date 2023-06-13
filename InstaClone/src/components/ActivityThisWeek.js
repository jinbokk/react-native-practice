import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { FriendsProfileData } from './DataBase';
import { useNavigation } from '@react-navigation/native';

const ActivityThisWeek = () => {
  const navigation = useNavigation();

  return (
    <>
      <Text style={{ fontWeight: 'bold', marginTop: 15 }}>This Week</Text>
      <View
        style={{
          flexDirection: 'row',
          paddingVertical: 10,
          alignItems: 'center',
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          {FriendsProfileData.slice(0, 3).map((data, index) => {
            return (
              <Image
                key={index}
                source={data.profileImage}
                style={[
                  {
                    width: 40,
                    height: 40,
                    borderRadius: 100,
                    borderWidth: 2,
                    borderColor: '#efefef',
                    zIndex: index * -1,
                    position: 'relative',
                    left: 10 * index * -1,
                  },
                ]}
              />
            );
          })}
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            position: 'relative',
            left: -10,
          }}>
          {FriendsProfileData.slice(0, 3).map((data, index) => {
            if (index === 2) {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => {
                    navigation.push('FriendProfile'),
                      {
                        name: data.name,
                        profileImage: data.profileImage,
                        follow: data.follow,
                        post: data.posts,
                        followers: data.followers,
                        follwing: data.following,
                      };
                  }}>
                  <Text style={{ fontWeight: 'bold', fontSize: 13 }}>
                    {data.name}{' '}
                  </Text>
                </TouchableOpacity>
              );
            } else {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => {
                    navigation.push('FriendProfile'),
                      {
                        name: data.name,
                        profileImage: data.profileImage,
                        follow: data.follow,
                        post: data.posts,
                        followers: data.followers,
                        follwing: data.following,
                      };
                  }}>
                  <Text>
                    <Text style={{ fontWeight: 'bold', fontSize: 13 }}>
                      {data.name},{' '}
                    </Text>
                  </Text>
                </TouchableOpacity>
              );
            }
          })}
        </View>
        <Text
          style={{
            position: 'relative',
            left: -10,
            fontSize: 13,
          }}>
          has followed you
        </Text>
      </View>
    </>
  );
};

export default ActivityThisWeek;

const styles = StyleSheet.create({});
