import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';

const PostData = [
  {
    postTitle: 'John',
    postPersonImage: require('../../assets/images/profile1.jpeg'),
    postImage: require('../../assets/images/post1.jpeg'),
    likes: 765,
    isLiked: false,
  },
  {
    postTitle: 'Tonny',
    postPersonImage: require('../../assets/images/profile2.jpeg'),
    postImage: require('../../assets/images/post2.jpeg'),
    likes: 345,
    isLiked: false,
  },
  {
    postTitle: 'Jaeho',
    postPersonImage: require('../../assets/images/profile5.jpeg'),
    postImage: require('../../assets/images/post3.jpeg'),
    likes: 734,
    isLiked: false,
  },
  {
    postTitle: 'Daniel',
    postPersonImage: require('../../assets/images/profile3.jpeg'),
    postImage: require('../../assets/images/post4.jpeg'),
    likes: 875,
    isLiked: false,
  },
  {
    postTitle: 'Sojeong',
    postPersonImage: require('../../assets/images/profile4.jpeg'),
    postImage: require('../../assets/images/post5.jpeg'),
    likes: 553,
    isLiked: false,
  },
  {
    postTitle: 'Daniel',
    postPersonImage: require('../../assets/images/profile3.jpeg'),
    postImage: require('../../assets/images/post6.jpeg'),
    likes: 324,
    isLiked: false,
  },
];

const Posts = () => {
  return (
    <>
      {PostData.map((item, index) => {
        return (
          <View key={index} style={styles.postContainer}>
            <View style={styles.postHeaderContainer}>
              <View style={styles.postUserContainer}>
                <Image source={item.postPersonImage} style={styles.userImage} />
                <Text style={styles.userName}>{item.postTitle}</Text>
              </View>
              <View style={styles.threeDotButtonContainer}>
                <Entypo
                  name="dots-three-horizontal"
                  style={styles.threeDotButton}
                />
              </View>
            </View>

            <View style={styles.postImageContainer}>
              <Image source={item.postImage} style={styles.postImage} />
            </View>

            <View style={styles.postActionContainer}></View>

            <View style={styles.postCommentContainer}></View>
          </View>
        );
      })}
    </>
  );
};

export default Posts;

const styles = StyleSheet.create({
  postContainer: {
    width: '100%',
    marginBottom: 20,
  },

  postHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 50,
    paddingHorizontal: 20,
    marginBottom: 10,
  },

  postUserContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  userImage: {
    width: 45,
    height: 45,
    borderRadius: 100,
  },

  userName: {
    color: 'black',
    fontSize: 15,
    fontWeight: 600,
    paddingLeft: 8,
  },

  threeDotButtonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  threeDotButton: {
    fontSize: 18,
    color: 'black',
  },

  postImageContainer: {
    height: 400,
  },

  postImage: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
  },
});
