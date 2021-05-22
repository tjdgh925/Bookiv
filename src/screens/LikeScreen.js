import React from 'react';
import {StyleSheet, Text, SafeAreaView, View} from 'react-native';
// import {FontAwesome} from '@expo/vector-icons';

class LikeScreen extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.container2}>
          <View style={styles.whoLike}>
            {/* <FontAwesome name="user-circle" size={24} color="black" /> */}
            <Text style={styles.likeText}>
              KnK님이 회원님의 게시물을 좋아합니다.
            </Text>
          </View>
          <View style={styles.whoLike}>
            {/* <FontAwesome name="user-circle" size={24} color="black" /> */}
            <Text style={styles.likeText}>
              KnK님이 회원님의 게시물을 좋아합니다.
            </Text>
          </View>
          <View style={styles.whoLike}>
            {/* <FontAwesome name="user-circle" size={24} color="black" /> */}
            <Text style={styles.likeText}>
              KnK님이 회원님의 게시물을 좋아합니다.
            </Text>
          </View>
          <View style={styles.whoLike}>
            {/* <FontAwesome name="user-circle" size={24} color="black" /> */}
            <Text style={styles.likeText}>
              KnK님이 회원님의 게시물을 좋아합니다.
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
    justifyContent: 'center',
    backgroundColor: '#fff',
    paddingTop: 10,
  },
  container2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  whoLike: {
    height: 27,
    //width: 310,
    //paddingVertical:10,
    flexDirection: 'row',
  },
});

export default LikeScreen;
