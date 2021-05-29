import React from 'react';
import {SafeAreaView, StyleSheet, ScrollView} from 'react-native';
import CreatePost from '../components/CreatePost';

export default function MainScreenPopular({navigation}) {
  //나중에 FlatList를 적용해야 한다.
  //const renderItem=() 을 통해서 DB에서 받아온 데이터를 CreatePost Prop으로 전달
  //keyExtractor를 잘 사용한다면, 최신과 인기를 잘 나눌 수 있지 않을까?(최신과 인기를 Prop으로 받아야한다.)
  const image = {
    
    book3: require('../../image/book5.jpg'),
    
  };
  const contents = {
    
    content3:
      '공포영화를 그다지 좋아하지 않는 내가 <그것>을 손꼽아 기다린 까닭은 순전히 두 가지 이유 때문이었다. 전 세계적으로 화제를 불러일으켰다는 <그것> 예고편에 나 또한 홀딱 반했고, 그 예고편이 전부는 아닐 것이라는 믿음, 그러니까 아무리 영화를 못(?) 만들어도 웬만큼은 하겠지 하는 믿음이 있었기 때문이다. 스티븐 킹이 원작자이니까. 지난 주말, 매우 늦은 시각, 고작해야 열 명 남짓한 관객들이 띄엄띄엄 앉아서 공포를 더 온전히 느낄 수 있는 극장으로 향했다. 마침내 <그것>을 보았다. 그리고 나는 집으로 돌아오자마자 스티븐 킹의 <그것>을 장바구니에 담았다.',
    
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
