import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, { Fragment, useRef, useState } from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionic from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const postData = [
  {
    postTitle: 'John',
    postPersonImage: require('../../assets/images/profile1.jpeg'),
    postImage: require('../../assets/images/post1.jpeg'),
    likes: 765,
    isLiked: false,
    bookmark: false,
    comment:
      'Presenting a snapshot of me completely absorbed in the world of coding, diligently working on my reliable laptop to bring my ideas to life.',
    uploaded: '10 min ago',
  },
  {
    postTitle: 'Tonny',
    postPersonImage: require('../../assets/images/profile2.jpeg'),
    postImage: require('../../assets/images/post2.jpeg'),
    likes: 345,
    isLiked: false,
    bookmark: false,
    comment:
      'Delighting in the tranquil embrace of the sea, I captured the gentle ebb and flow of the calm waves, creating a serene moment frozen in time.',
    uploaded: '15 min ago',
  },
  {
    postTitle: 'Jaeho',
    postPersonImage: require('../../assets/images/profile5.jpeg'),
    postImage: require('../../assets/images/post3.jpeg'),
    likes: 734,
    isLiked: false,
    bookmark: false,
    comment:
      'Offering a unique perspective, this photo showcases the intriguing side profile of a subway, revealing its sleek design and capturing the vibrant energy of urban life.',
    uploaded: '23 min ago',
  },
  {
    postTitle: 'Daniel',
    postPersonImage: require('../../assets/images/profile3.jpeg'),
    postImage: require('../../assets/images/post4.jpeg'),
    likes: 875,
    isLiked: false,
    bookmark: false,
    comment:
      'Witness the enchanting beauty of a night sky adorned with a multitude of sparkling stars, reminding us of the vastness and mystery that lies beyond our reach.',
    uploaded: '42 min ago',
  },
  {
    postTitle: 'Sojeong',
    postPersonImage: require('../../assets/images/profile4.jpeg'),
    postImage: require('../../assets/images/post5.jpeg'),
    likes: 553,
    isLiked: false,
    bookmark: false,
    comment:
      "Immersed in nature's magnificence, I captured the majestic beauty of a distant mountain peak, adorned with swirling clouds, creating a breathtaking vista that ignites a sense of adventure.",
    uploaded: '56 min ago',
  },
  // {
  //   postTitle: 'Daniel',
  //   postPersonImage: require('../../assets/images/profile3.jpeg'),
  //   postImage: require('../../assets/images/post6.jpeg'),
  //   likes: 324,
  //   isLiked: false,
  //   bookmark: false,
  //   comment:
  //     "I captured the powerful crashing waves, as they relentlessly embrace the shore, painting a vivid picture of nature's raw beauty.",
  //   uploaded: '2 hours ago',
  // },
];

const Posts = () => {
  return postData.map((item, index) => (
    <PostItem key={index} index={index} item={item} />
  ));
};

const PostItem = ({ index, item }) => {
  const [like, setLike] = useState(false);
  const [bookmark, setBookmark] = useState(false);
  const [readMore, setReadMore] = useState(false);

  /**
   * ? 좋아요 버튼이나 북마크 버튼 등, 리렌더링이 일어날때 배열 또한 값이 재할당 되는 문제가 발생하여, useRef 훅을 사용하여 리렌더링을 방지하였음
   */
  const randomProfileImage = useRef(
    postData
      .map((item) => {
        return {
          imageSource: item.postPersonImage,
          userName: item.postTitle,
        };
      })
      .sort(() => 0.5 - Math.random())
      .slice(0, 3),
  ).current;

  return (
    <>
      <View
        key={index}
        style={[
          styles.postContainer,
          index + 1 === postData.length ? { marginBottom: 40 } : null,
        ]}>
        <View style={styles.postHeaderContainer}>
          <View style={styles.postUserContainer}>
            <Image source={item.postPersonImage} style={styles.userImage} />
            <Text style={styles.userName}>{item.postTitle}</Text>
          </View>
          <View style={styles.threeDotButtonContainer}>
            <TouchableOpacity>
              <Entypo
                name="dots-three-horizontal"
                style={styles.threeDotButton}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.postImageContainer}>
          <Image source={item.postImage} style={styles.postImage} />
        </View>

        <View style={styles.postActionContainerTop}>
          <View style={styles.postActionContainer}>
            <TouchableOpacity
              onPress={() => {
                setLike((prev) => !prev);
              }}>
              <AntDesign
                name={like ? 'heart' : 'hearto'}
                style={[
                  styles.postActionIcon,
                  { color: like ? '#d65656' : 'black' },
                ]}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Ionic
                name="ios-chatbubble-outline"
                style={styles.postActionIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Feather name="navigation" style={styles.postActionIcon} />
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity
              onPress={() => {
                setBookmark((prev) => !prev);
              }}>
              <FontAwesome
                name={bookmark ? 'bookmark' : 'bookmark-o'}
                style={[styles.postActionIcon, { color: 'black' }]}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.postCommentContainerTop}>
          <View style={styles.postLikesContainer}>
            <View style={styles.likedUserImgContainer}>
              {randomProfileImage.map((random, index) => {
                if (index + 1 === randomProfileImage.length) {
                  return (
                    <Fragment key={index}>
                      <Image
                        source={random.imageSource}
                        style={[
                          styles.likedUserImg,
                          {
                            zIndex: index * -1,
                            position: 'relative',
                            left: 10 * index * -1,
                          },
                        ]}
                      />
                      <Text style={styles.postLikesText}>
                        Liked by {randomProfileImage[0].userName} and{' '}
                        <Text style={styles.postLikesNum}>
                          {like ? item.likes + 1 : item.likes} others
                        </Text>
                      </Text>
                    </Fragment>
                  );
                } else {
                  return (
                    <Image
                      key={index}
                      source={random.imageSource}
                      style={[
                        styles.likedUserImg,
                        {
                          zIndex: index * -1,
                          position: 'relative',
                          left: 10 * index * -1,
                        },
                      ]}
                    />
                  );
                }
              })}
            </View>
          </View>

          <View>
            <Text
              numberOfLines={readMore ? null : 2}
              style={styles.postCommentText}>
              {item.comment}
            </Text>
            <TouchableOpacity onPress={() => setReadMore((prev) => !prev)}>
              {readMore ? null : (
                <Text style={styles.readMoreText}>Read more</Text>
              )}
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.addCommentContainer}>
          <Image
            source={require('../../assets/images/userProfile.jpeg')}
            style={styles.likedUserImg}
          />
          <Text style={{ paddingLeft: 8, opacity: 0.5 }}>Add a comment...</Text>
          <TouchableOpacity
            style={{
              justifyContent: 'flex-end',
              marginLeft: 'auto',
              marginRight: 10,
            }}>
            <Text style={{ fontSize: 13, fontWeight: 600, color: '#2a77b8' }}>
              Post
            </Text>
          </TouchableOpacity>
        </View>

        <View>
          <Text style={styles.postUploadedText}>{item.uploaded}</Text>
        </View>
      </View>
    </>
  );
};

export default Posts;

const styles = StyleSheet.create({
  postContainer: {
    width: '100%',
    marginTop: 20,
    paddingTop: 11,
    borderTopColor: 'lightgray',
    borderTopWidth: 1,
  },

  postHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 45,
    paddingHorizontal: 15,
    marginBottom: 10,
  },

  postUserContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  userImage: {
    width: 37,
    height: 37,
    borderRadius: 100,
  },

  userName: {
    color: 'black',
    fontSize: 15,
    fontWeight: 600,
    paddingLeft: 8,
    opacity: 0.8,
  },

  threeDotButtonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 5,
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

  postActionContainerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 5,
    alignItems: 'center',
    height: 50,
    paddingHorizontal: 10,
  },

  postActionContainer: {
    width: '33%',
    maxWidth: 120,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  postActionIcon: {
    fontSize: 23,
    paddingRight: 10,
    color: 'black',
  },

  postCommentContainerTop: {
    paddingHorizontal: 15,
    flexDirection: 'column',
    alignItems: 'flex-start',
  },

  postLikesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },

  likedUserImgContainer: {
    flexDirection: 'row',
  },

  likedUserImg: {
    width: 35,
    height: 35,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: '#efefef',
  },

  postLikesNum: {
    color: 'black',
    alignSelf: 'center',
    fontWeight: 600,
    right: 10,
  },

  postLikesText: {
    color: 'gray',
    alignSelf: 'center',
    fontWeight: 500,
    fontSize: 13,
    right: 10,
  },

  postCommentText: {
    fontSize: 14,
    lineHeight: 19,
    color: 'gray',
  },

  readMoreText: {
    color: 'gray',
    fontSize: 13,
    fontWeight: 700,
    opacity: 0.8,
    marginTop: 5,
  },

  addCommentContainer: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    padding: 15,
  },

  postUploadedText: {
    alignSelf: 'flex-start',
    paddingHorizontal: 15,
    fontSize: 12,
  },
});
