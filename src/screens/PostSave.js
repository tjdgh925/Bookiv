import React from 'react';
import {StyleSheet, TouchableOpacity, Text, Image, View} from 'react-native';
// import {FontAwesome} from '@expo/vector-icons';

class PostSave extends React.Component {
  render() {
    const image = {
      book1: require('../../image/book1.png'),
      book2: require('../../image/book2.png'),
      book3: require('../../image/book3.png'),
      book4: require('../../image/book4.png'),
    };
    const contents = {
      content1:
        '현대사회에서 특히! 여성으로 살아가면서 털에 자유로울수 있는 사람이 있을까? 좀 뭐랄까 약간 입에 담기도 어색하고 아무짓도 안했는데 부끄럽기도하고 검색하다보면 유해단어라고 뜨기도 한다는 털! 에 관한 윰토끼님의 이야기',
      content2:
        "💡 총평 출퇴근길이나 자투리 시간에 읽기 좋은 책이다. 아쉬웠던 점은 '어떻게 글쓰기 수입을 10배 올렸는지', '현직 마케터로서 느낀 점은 무엇인지' 등 실무와 관련된 부분은 전혀 언급하고 있지 않다는 것이다. 그래도 글을 쓰는 사람이라면 한번쯤 <마케터의 문장>을 읽어보길 권한다.",
      content3:
        '아이들의 반응이 좋은 책 중 하나 음을 넣어 읽어주면 몇번이고 반복해서 읽어줘도 까르르 넘어간다💙 귀여운 그림체와 작가의 위트가 녹아든 귀여운책😘 우리반 6월 추천동화책',
      content4:
        '성공하는 사람들이 고정적인 한계를 정해놓지 않기 때문에 더 많은 기회가 있을 수밖에 없다고 합니다. 반면에 이 책에 나오는 다양한 좋은 마음가짐이 자신뿐만 아니라 타인에게도 긍정적인 영향을 주기 때문에 좀 더 좋은 결과를 이룰 수 있습니다.',
    };
    const UID = {
      id1: 'userA',
      id2: 'userB',
      id3: 'userC',
      id4: 'userD',
    };
    const likes = {
      like1: '16',
      like2: '45',
      like3: '23',
      like4: '4',
    };
    const comments = {
      comment1: '2',
      comment2: '0',
      comment3: '3',
      comment4: '1',
    };
    return (
      <View style={styles.container}>
        <View style={styles.Post}>
          <View style={styles.PostInfo}>
            <View style={styles.title}>
              <Text>이까짓, 털</Text>
            </View>
            <View style={styles.likecom}>
              <Image
                style={styles.image}
                source={require('../../image/post-love.png')}
              />
              <Text> {likes.like1} </Text>
              <Image
                style={styles.image}
                source={require('../../image/post-comment.png')}
              />
              <Text> {comments.comment1} </Text>
            </View>
          </View>
          <View style={styles.PostPic}>
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('SinglePost', {
                  image: image.book1,
                  content: contents.content1,
                  UID: UID.id1,
                  like: likes.like1,
                  comment: comments.comment1,
                })
              }>
              <Image style={styles.ImageBtn} source={image.book1} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.Post}>
          <View style={styles.PostInfo}>
            <View style={styles.title}>
              <Text>마케터의 문장</Text>
            </View>
            <View style={styles.likecom}>
              <Image
                style={styles.image}
                source={require('../../image/post-love.png')}
              />
              <Text> {likes.like2} </Text>
              <Image
                style={styles.image}
                source={require('../../image/post-comment.png')}
              />
              <Text> {comments.comment2} </Text>
            </View>
          </View>
          <View style={styles.PostPic}>
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('SinglePost', {
                  image: image.book2,
                  content: contents.content2,
                  UID: UID.id2,
                  like: likes.like2,
                  comment: comments.comment2,
                })
              }>
              <Image style={styles.ImageBtn} source={image.book2} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.Post}>
          <View style={styles.PostInfo}>
            <View style={styles.title}>
              <Text>딩동 거미</Text>
            </View>
            <View style={styles.likecom}>
              <Image
                style={styles.image}
                source={require('../../image/post-love.png')}
              />
              <Text> {likes.like3} </Text>
              <Image
                style={styles.image}
                source={require('../../image/post-comment.png')}
              />
              <Text> {comments.comment3} </Text>
            </View>
          </View>
          <View style={styles.PostPic}>
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('SinglePost', {
                  image: image.book3,
                  content: contents.content3,
                  UID: UID.id3,
                  like: likes.like3,
                  comment: comments.comment3,
                })
              }>
              <Image style={styles.ImageBtn} source={image.book3} />
            </TouchableOpacity>
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
    //borderWidth: 1,
    width: 70,
    height: 70,
    borderRadius: 10,
    //paddingBottom:10,
    //paddingTop:10,
    //paddingLeft:130,
    //paddingRight:130,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#DCDCDC',
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
    alignItems: 'center',
  },
});

export default PostSave;
