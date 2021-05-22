import React from 'react';
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';
// import {FontAwesome} from '@expo/vector-icons';

class PostSave extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.Post}>
          <View style={styles.PostInfo}>
            <View style={styles.title}>
              <Text>행복한 이기주의자</Text>
            </View>
            <View style={styles.date}>
              <Text>2021.3.6</Text>
            </View>
            <View style={styles.likecom}>
              {/* <FontAwesome name="heart-o" size={24} color="black" /> */}
              <Text>3</Text>
              {/* <FontAwesome name="commenting-o" size={24} color="black" /> */}
              <Text>6</Text>
            </View>
          </View>
          <View style={styles.PostPic}>
            <TouchableOpacity style={styles.ImageBtn}></TouchableOpacity>
          </View>
        </View>

        <View style={styles.Post}>
          <View style={styles.PostInfo}>
            <View style={styles.title}>
              <Text>행복한 이기주의자</Text>
            </View>
            <View style={styles.date}>
              <Text>2021.3.6</Text>
            </View>
            <View style={styles.likecom}>
              {/* <FontAwesome name="heart-o" size={24} color="black" /> */}
              <Text>3</Text>
              {/* <FontAwesome name="commenting-o" size={24} color="black" /> */}
              <Text>6</Text>
            </View>
          </View>
          <View style={styles.PostPic}>
            {/* <TouchableOpacity style={styles.ImageBtn}></TouchableOpacity> */}
          </View>
        </View>

        <View style={styles.Post}>
          <View style={styles.PostInfo}>
            <View style={styles.title}>
              <Text>행복한 이기주의자</Text>
            </View>
            <View style={styles.date}>
              <Text>2021.3.6</Text>
            </View>
            <View style={styles.likecom}>
              {/* <FontAwesome name="heart-o" size={24} color="black" /> */}
              <Text>6</Text>
              {/* <FontAwesome name="commenting-o" size={24} color="black" /> */}
              <Text>3</Text>
            </View>
          </View>
          <View style={styles.PostPic}>
            <TouchableOpacity style={styles.ImageBtn}></TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  Post: {
    flex: 1,
    flexDirection: 'row',
    borderWidth: 0.5,
  },

  PostInfo: {
    flex: 2,
    backgroundColor: 'white',
  },
  PostPic: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },

  ImageBtn: {
    borderWidth: 1,
    width: 70,
    height: 70,
    //paddingBottom:10,
    //paddingTop:10,
    //paddingLeft:130,
    //paddingRight:130,
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    flex: 2,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  date: {
    flex: 1,
    paddingHorizontal: 10,
  },
  likecom: {
    flex: 2,
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
});

export default PostSave;
