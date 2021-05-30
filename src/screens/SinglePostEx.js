import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  TextInput,
  Linking,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import CreateComment from '../components/CreateComment';

export default function SinglePostEx({navigation, route}) {
  const commentProfile = {
    profile1: require('../../image/comment1.jpeg'),
    profile2: require('../../image/comment2.jpeg'),
    profile3: require('../../image/user.png'),
  };
  const contents = {
    content1: '맞팔해요~',
    content2: '내용이 너무 좋아요~',
    content3: '댓글 테스트',
  };
  const UID = {
    id1: 'choi_joon',
    id2: 'leehochang',
    id3: 'test',
  };
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
          <Text style={styles.userID}>userA</Text>
          <View style={styles.imageContainer}>
            <Image
              resizeMode="cover"
              style={styles.image}
              source={require('../../image/book1.png')}
            />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.content}>
              현대사회에서 특히! 여성으로 살아가면서 털에 자유로울수 있는 사람이
              있을까? 좀 뭐랄까 약간 입에 담기도 어색하고 아무짓도 안했는데
              부끄럽기도하고 검색하다보면 유해단어라고 뜨기도 한다는 털! 에 관한
              윰토끼님의 이야기
            </Text>
          </View>
          <View>
            <View style={styles.comment}>
              <Text> 좋아요 16 </Text>
              <Text> 댓글 3 </Text>
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
            <TouchableOpacity
              style={styles.btn}
              onPress={() =>
                navigation.navigate('MyWeb', {
                  UID: 'userA',
                })
              }>
              <Image
                source={require('../../image/aladin.png')}
                style={[styles.img, styles.aladin]}
              />
            </TouchableOpacity>
          </View>
          <CreateComment
            profile={commentProfile.profile1}
            contents={contents.content1}
            UID={UID.id1}
          />
          <CreateComment
            profile={commentProfile.profile2}
            contents={contents.content2}
            UID={UID.id2}
          />
          <CreateComment
            profile={commentProfile.profile3}
            contents={contents.content3}
            UID={UID.id3}
          />
        </View>
        <KeyboardAvoidingView style={styles.footer}>
          <View style={styles.commentWrite}>
            <TextInput
              style={styles.commentInput}
              placeholder="댓글 달기"
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
