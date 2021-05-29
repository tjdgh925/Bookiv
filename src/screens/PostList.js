import React from 'react';
import {StyleSheet, TouchableOpacity, Image, View} from 'react-native';

class PostList extends React.Component {
  render() {
    const bookImg = require('../../image/book5.png');
    const bookContent =
      '이젠 안다. 관계가 마음만으로도 이어질 수 있다는 이상에서, 관계는 마음만으로 어떻게 할 수 없다는 현실을. 노력만 하면 다 될 수 있다는 이상에서, 노력을 해도 덜 될 수 있다는 현실을. 저도 모르게 매끄러운 과정을 통해 현실을 깨닫는 순간이 온다. 그때, 우린 꽤 닳아 있다는 걸 깨우친다. 어쩌면 세상에 사포질이라도 당한 것처럼.';
    const userId = 'userMy';
    return (
      <View style={styles.container}>
        <View style={styles.ListPic}>
          <View style={styles.PicArea}>
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('SinglePost', {
                  image: bookImg,
                  content: bookContent,
                  UID: userId,
                  like: 4,
                  comment: 0,
                })
              }>
              <Image source={bookImg} style={styles.ListImage} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.ListPic}></View>
        <View style={styles.ListPic}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  ListPic: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 40,
  },
  PicArea: {
    flex: 1,
    // alignItems: 'center',
    paddingLeft: '10%',
    justifyContent: 'center',
  },

  ListImage: {
    //borderWidth: 0.5,
    width: 100,
    height: 100,
    borderRadius: 10,
    //color:"#F6F6F6",

    backgroundColor: '#DCDCDC',
  },
});

export default PostList;
