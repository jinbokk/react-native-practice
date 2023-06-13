import { View, Text, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const ActivityPrevious = ({ data }) => {
  const navigation = useNavigation();
  const [follow, setFollow] = useState(data.follow);
  const [close, setClose] = useState(false);

  return (
    <>
      {close ? null : (
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingVertical: 11,
            width: '100%',
          }}>
          <TouchableOpacity
            onPress={() =>
              navigation.push('FriendProfile', {
                name: data.name,
                profileImage: data.profileImage,
                follow: follow,
                post: data.posts,
                followers: data.followers,
                following: data.following,
              })
            }
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              maxWidth: '64%',
            }}>
            <Image
              source={data.profileImage}
              style={{
                width: 45,
                height: 45,
                borderRadius: 100,
                marginRight: 10,
              }}
            />
            <Text style={{ fontSize: 13, width: '90%' }}>
              To see <Text style={{ fontWeight: 'bold' }}>{data.name}</Text>{' '}
              photos and videos, please follow him on Instagram.
            </Text>
          </TouchableOpacity>

          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <TouchableOpacity
              onPress={() => setFollow(!follow)}
              style={{ width: follow ? 90 : 68 }}>
              <View
                style={{
                  width: '100%',
                  height: 30,
                  borderRadius: 5,
                  backgroundColor: follow ? null : '#3493D9',
                  borderWidth: follow ? 1 : 0,
                  borderColor: follow ? '#DEDEDE' : null,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={{ color: follow ? 'black' : 'white' }}>
                  {follow ? 'Following' : 'Follow'}
                </Text>
              </View>
            </TouchableOpacity>
            {follow ? null : (
              <TouchableOpacity
                onPress={() => setClose(true)}
                style={{ paddingHorizontal: 10 }}>
                <AntDesign
                  name="close"
                  style={{ fontSize: 14, color: 'black', opacity: 0.8 }}
                />
              </TouchableOpacity>
            )}
          </View>
        </View>
      )}
    </>
  );
};

export default ActivityPrevious;
