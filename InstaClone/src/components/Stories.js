import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';

const storyData = [
  {
    id: 1,
    name: 'My Story',
    image: require('../../assets/images/userProfile.jpeg'),
    uploaded: '5 min ago',
  },
  {
    id: 2,
    name: 'John',
    image: require('../../assets/images/profile1.jpeg'),
    uploaded: '12 min ago',
  },
  {
    id: 3,
    name: 'Tonny',
    image: require('../../assets/images/profile2.jpeg'),
    uploaded: '18 min ago',
  },
  {
    id: 4,
    name: 'Daniel',
    image: require('../../assets/images/profile3.jpeg'),
    uploaded: '32 min ago',
  },
  ,
  {
    id: 5,
    name: 'Sojeong',
    image: require('../../assets/images/profile4.jpeg'),
    uploaded: '45 min ago',
  },
  ,
  {
    id: 6,
    name: 'Jaeho',
    image: require('../../assets/images/profile5.jpeg'),
    uploaded: '1h ago',
  },
];

const Stories = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {storyData.map((item, index) => {
        return (
          <TouchableOpacity
            key={index}
            style={styles.storyContainer}
            onPress={() =>
              navigation.push('Status', {
                name: item.name,
                image: item.image,
                uploaded: item.uploaded,
              })
            }>
            {item.id === 1 ? (
              <View style={styles.myStoryBadgeContainer}>
                <Entypo name="circle-with-plus" style={styles.myStoryBadge} />
              </View>
            ) : null}

            <View style={styles.storyImageContainer}>
              <Image source={item.image} style={styles.storyImage} />
            </View>

            <View>
              <Text style={styles.storyText}>{item.name}</Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default Stories;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },

  storyContainer: {
    padding: 10,
  },

  myStoryBadgeContainer: {
    position: 'absolute',
    bottom: 30,
    right: 10,
    zIndex: 10,
  },

  myStoryBadge: {
    fontSize: 20,
    color: '#405de6',
    backgroundColor: '#efefef',
    borderRadius: 10,
  },

  storyImageContainer: {
    width: 68,
    height: 68,
    backgroundColor: 'white',
    borderWidth: 1.8,
    borderRadius: 100,
    borderColor: '#c13584',
    justifyContent: 'center',
    alignItems: 'center',
  },

  storyImage: {
    resizeMode: 'cover',
    width: '92%',
    height: '92%',
    borderRadius: 100,
    backgroundColor: 'white',
  },

  storyText: {
    fontSize: 12,
    color: 'gray',
    textAlign: 'center',
    paddingTop: 4,
  },
});
