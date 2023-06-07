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

const storyData = [
  {
    id: 1,
    name: 'My Story',
    image: require('../../assets/images/userProfile.jpeg'),
  },
  {
    id: 2,
    name: 'John',
    image: require('../../assets/images/profile1.jpeg'),
  },
  {
    id: 3,
    name: 'Tonny',
    image: require('../../assets/images/profile2.jpeg'),
  },
  {
    id: 4,
    name: 'Daniel',
    image: require('../../assets/images/profile3.jpeg'),
  },
  ,
  {
    id: 5,
    name: 'Sojeong',
    image: require('../../assets/images/profile4.jpeg'),
  },
  ,
  {
    id: 6,
    name: 'Jaeho',
    image: require('../../assets/images/profile5.jpeg'),
  },
];

const Stories = () => {
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      {storyData.map((item, index) => {
        return (
          <TouchableOpacity key={index} style={styles.storyContainer}>
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
    </ScrollView>
  );
};

export default Stories;

const styles = StyleSheet.create({
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
    backgroundColor: 'white',
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
