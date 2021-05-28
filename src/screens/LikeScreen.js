import React from 'react';
import {StyleSheet, Image, Text, SafeAreaView, View} from 'react-native';
// import {FontAwesome} from '@expo/vector-icons';

class LikeScreen extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.container2}>
          <View style={styles.whoLike}>
            <Image
              source={require('../../image/face4.jpeg')}
              style={styles.profileImage}
            />
            <Text style={styles.likeText}>
              you_r_love 님이 회원님의 게시물을 좋아합니다.
            </Text>
          </View>
          <View style={styles.whoLike}>
            <Image
              source={require('../../image/profile1.png')}
              style={styles.profileImage}
            />
            <Text style={styles.likeText}>
              dlwlrma 님이 회원님의 게시물을 좋아합니다.
            </Text>
          </View>
          <View style={styles.whoLike}>
            <Image
              source={require('../../image/profile2.jpeg')}
              style={styles.profileImage}
            />
            <Text style={styles.likeText}>
              sohyeon 님이 회원님의 게시물을 좋아합니다.
            </Text>
          </View>
          <View style={styles.whoLike}>
            <Image
              source={require('../../image/profile3.jpeg')}
              style={styles.profileImage}
            />
            <Text style={styles.likeText}>
              xeesoxee 님이 회원님의 게시물을 좋아합니다.
            </Text>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
  },
  container2: {
    flex: 1,
    padding: 20,
  },
  whoLike: {
    flexDirection: 'row',
    paddingBottom: 30,
    alignItems: 'center',
  },
  likeText: {
    fontSize: 16,
    paddingLeft: 15,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderWidth: 10,
    borderColor: '#0000',
    borderRadius: 20,
    borderWidth: 1,
  },
});

export default LikeScreen;
