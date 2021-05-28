import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  TextInput,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import CreateComment from '../components/CreateComment';

export default function CreatePost({navigation}) {
  const [comment, setComment] = useState('');
  const postObj = {
    //사진
    //글(내용)
    //유저아이디
    //좋아요
    //댓글
    //링크
    //
  };
  const likes = 6;
  const comments = 9;
  return (
    <View style={styles.containerBig}>
      <KeyboardAwareScrollView automaticallyAdjustContentInsets={false}>
        <View style={styles.container}>
          <Text style={styles.userID}>UID</Text>
          <View style={styles.imageContainer}>
            <Image
              resizeMode="cover"
              style={styles.image}
              source={require('../../image/NorwegianWood.jpeg')}
            />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.content}>
              Eiusmod deserunt culpa sunt est id minim eiusmod proident.
              Essemagnanostrud magna consequat incididunt elit ipsum magna amet
              adipisicingaliqua adipisicing qui. Eu irure non quis excepteur
            </Text>
          </View>
          <View>
            <View style={styles.comment}>
              <Text> 좋아요 {likes} </Text>
              <Text> 댓글 {comments} </Text>
            </View>
          </View>
          <View style={styles.btnContainer}>
            <TouchableOpacity style={styles.btn}>
              <Image
                source={require('../../image/heart.png')}
                style={styles.img}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}>
              <Image
                source={require('../../image/bookmark.png')}
                style={styles.img}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}>
              <Image
                source={require('../../image/aladin.png')}
                style={[styles.img, styles.aladin]}
              />
            </TouchableOpacity>
          </View>
          <CreateComment />
          <CreateComment />
          <CreateComment />
          <CreateComment />
          <CreateComment />
          <CreateComment />
        </View>
        <KeyboardAvoidingView style={styles.footer}>
          <View style={styles.commentWrite}>
            <TextInput
              style={styles.commentInput}
              placeholder="{}UID로 댓글 달기"
              onChangeText={comment => setComment(comment)}
              returnKeyType="send"
            />
            <TouchableOpacity>
              <Image
                style={styles.submitComment}
                source={require('../../image/submit.png')}
              />
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </KeyboardAwareScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  containerBig: {
    flex: 1,
    backgroundColor: '#fff',
  },
  userID: {
    paddingVertical: 5,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#c2c2c2',
    paddingHorizontal: 10,
  },
  container: {
    flex: 1,
  },
  image: {
    width: '70%',
    height: undefined,
    aspectRatio: 0.8,
    resizeMode: 'contain',
    borderWidth: 3,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  imageContainer: {
    alignItems: 'center',
    paddingVertical: 7,
  },
  img: {
    height: 30,
    width: 30,
  },
  btn: {paddingRight: 10},
  textContainer: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    flex: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#c2c2c2',
  },
  comment: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#c2c2c2',
  },
  btnContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderColor: '#c2c2c2',
  },
  commentWrite: {
    alignSelf: 'flex-end',
    flexDirection: 'row',
    paddingHorizontal: 10,
    width: '100%',
  },
  commentInput: {
    width: '100%',
    height: 30,
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 10,
    paddingVertical: -20,
  },
  submitComment: {
    position: 'absolute',
    right: 5,
    top: 5,
    width: 22,
    height: 22,
  },
  footer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  aladin: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    padding: 15,
  },
});
