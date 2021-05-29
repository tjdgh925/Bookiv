import React, {useState, Component} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
  Touchable,
  StyleSheet,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default class CreatePost extends Component {
  render() {
    const likes = 6;
    const comments = 9;
    const navigation = useNavigation;
    const postObj = {
      //사진
      //글(내용)
      //유저아이디
      //좋아요
      //댓글
      //링크
      //
    };
    return (
      <View style={styles.setBorder}>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate('SinglePost', {
              image: this.props.image,
              content: this.props.content,
              UID: this.props.UID,
            })
          }>
          <Text style={styles.userName}>{this.props.UID}</Text>
          <View style={styles.container}>
            <Image style={styles.image} source={this.props.image} />
            <View style={styles.textContainer}>
              <Text style={styles.content}>{this.props.content}</Text>
              <View style={styles.comment}>
                <Text> 좋아요 {likes} </Text>
                <Text> 댓글 {comments} </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  setBorder: {
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderColor: '#c2c2c2',
    backgroundColor: 'white',
  },
  container: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingTop: 4,
  },
  textContainer: {
    paddingLeft: '5%',
    width: '65%',
  },
  touchScreen: {
    width: '100%',
  },
  content: {
    flex: 9,
  },
  userName: {
    textAlign: 'left',
    paddingLeft: '5%',
    paddingVertical: 2,
    borderBottomWidth: 1,
    borderColor: '#c2c2c2',
  },
  image: {
    height: 150,
    width: '33%',
  },
  commentContainer: {
    justifyContent: 'center',
  },
  comment: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    position: 'relative',
  },
});
