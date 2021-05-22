import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function CreateComment() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Edit')}>
        {/* <Image source={require('../../image/user.png')} style={styles.image} /> */}
      </TouchableOpacity>
      <View style={styles.text}>
        <Text>UID</Text>
        <Text>Comment</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
    paddingVertical: 5,
  },
  image: {
    height: 30,
    width: 30,
  },
  text: {
    paddingLeft: 15,
    flex: 9,
  },
});
