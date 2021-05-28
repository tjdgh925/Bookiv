import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';

class PostList extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.ListPic}>
          <View style={styles.PicArea}>
            <TouchableOpacity style={styles.ListImage}></TouchableOpacity>
          </View>

          <View style={styles.PicArea}>
            <TouchableOpacity style={styles.ListImage}></TouchableOpacity>
          </View>

          <View style={styles.PicArea}>
            <TouchableOpacity style={styles.ListImage}></TouchableOpacity>
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
    backgroundColor: "white",
  },
  ListPic: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 40,
  },
  PicArea: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  ListImage: {
    //borderWidth: 0.5,
    width: 100,
    height: 100,
    borderRadius: 10,
    //color:"#F6F6F6",
    
    backgroundColor: "#DCDCDC",
  },
});

export default PostList;
