import React from 'react';
import {SafeAreaView, StyleSheet, ScrollView} from 'react-native';
import CreatePost from '../components/CreatePost';

export default function MainScreenPopular({navigation}) {
  //나중에 FlatList를 적용해야 한다.
  //const renderItem=() 을 통해서 DB에서 받아온 데이터를 CreatePost Prop으로 전달
  //keyExtractor를 잘 사용한다면, 최신과 인기를 잘 나눌 수 있지 않을까?(최신과 인기를 Prop으로 받아야한다.)
  const image = {
    
    book3: require('../../image/book3.png'),
    
  };
  const contents = {
    
    content3:
      '아이들의 반응이 좋은 책 중 하나 음을 넣어 읽어주면 몇번이고 반복해서 읽어줘도 까르르 넘어간다💙 귀여운 그림체와 작가의 위트가 녹아든 귀여운책😘 우리반 6월 추천동화책',
    
  };
  const UID = {
    
    id3: 'userC',
    
  };
  const likes = {
    
    like3: '23',
    
  };
  const comments = {
    
    comment3: '3',
    
  };
  return (
    <SafeAreaView>
      <ScrollView>
        
        <CreatePost
          style={styles.underBorder}
          image={image.book3}
          UID={UID.id3}
          like={likes.like3}
          content={contents.content3}
          comment={comments.comment3}
          navigation={navigation}
        />
       
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  underBorder: {},
});
