import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React from 'react';

const contentData = [
  {
    id: 0,
    images: [
      require('../../assets/images/post1.jpeg'),
      require('../../assets/images/post2.jpeg'),
      require('../../assets/images/post3.jpeg'),
      require('../../assets/images/post4.jpeg'),
      require('../../assets/images/post5.jpeg'),
      require('../../assets/images/post6.jpeg'),
    ],
  },
  {
    id: 1,
    images: [
      require('../../assets/images/post7.jpeg'),
      require('../../assets/images/post8.jpeg'),
      require('../../assets/images/post9.jpeg'),
      require('../../assets/images/post10.jpeg'),
      require('../../assets/images/post11.jpeg'),
      require('../../assets/images/post12.jpeg'),
    ],
  },
  {
    id: 2,
    images: [
      require('../../assets/images/post13.jpeg'),
      require('../../assets/images/post14.jpeg'),
      require('../../assets/images/post15.jpeg'),
    ],
  },
];

const SearchContent = ({ getImageData }) => {
  return (
    <View>
      {contentData.map((item, index) => {
        return (
          <View key={index}>
            {item.id === 0 ? (
              <View style={styles.container}>
                {item.images.map((imageData, imageIndex) => {
                  return (
                    <TouchableOpacity
                      key={imageIndex}
                      style={styles.contentImageContainer}
                      onPressIn={()=>getImageData(imageData)}
                      onPressOut={()=>getImageData(null)}>
                      <Image source={imageData} style={styles.contentImage} />
                    </TouchableOpacity>
                  );
                })}
              </View>
            ) : null}

            {item.id === 1 ? (
              <View style={styles.container2Top}>
                <View style={styles.container2}>
                  {item.images.slice(0, 4).map((imageData, imageIndex) => {
                    return (
                      <TouchableOpacity
                        key={imageIndex}
                        style={styles.contentImageContainer2}
                        onPressIn={()=>getImageData(imageData)}
                        onPressOut={()=>getImageData(null)}>
                        <Image source={imageData} style={styles.contentImage} />
                      </TouchableOpacity>
                    );
                  })}
                </View>
                <TouchableOpacity
                  style={styles.contentImageContainer}
                  onPressIn={()=>getImageData(item.images[4])}
                  onPressOut={()=>getImageData(null)}>
                  <Image source={item.images[4]} style={styles.contentImage2} />
                </TouchableOpacity>
              </View>
            ) : null}

            {item.id === 2 ? (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <TouchableOpacity
                  style={{ paddingBottom: 2, width: '66.5%' }}
                  onPressIn={()=>getImageData(item.images[2])}
                  onPressOut={()=>getImageData(null)}>
                  <Image
                    source={item.images[2]}
                    style={{ width: '100%', height: 300 }}
                  />
                </TouchableOpacity>
                <View
                  style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    width: '33%',
                    justifyContent: 'space-between',
                  }}>
                  {item.images.slice(0, 2).map((imageData, imageIndex) => {
                    return (
                      <TouchableOpacity
                        key={imageIndex}
                        style={{ paddingBottom: 2, width: '100%' }}
                        onPressIn={()=>getImageData(imageData)}
                        onPressOut={()=>getImageData(null)}>
                        <Image
                          source={imageData}
                          style={{ width: '100%', height: 150 }}
                        />
                      </TouchableOpacity>
                    );
                  })}
                </View>
              </View>
            ) : null}
          </View>
        );
      })}
    </View>
  );
};

export default SearchContent;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%',
  },

  contentImageContainer: {
    width: '33%',
    paddingBottom: 2,
  },

  contentImage: {
    width: '100%',
    height: 150,
  },

  contentImageContainer2: {
    width: '49.5%',
    paddingBottom: 2,
  },

  contentImage2: {
    width: '100%',
    height: 300,
  },

  container2Top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  container2: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '66.5%',
    justifyContent: 'space-between',
  },
});
