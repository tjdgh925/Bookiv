import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default class CreateComment extends Component {
  render() {
    const navigation = useNavigation;
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate('Edit')}>
          <Image source={this.props.profile} style={styles.image} />
        </TouchableOpacity>
        <View style={styles.text}>
          <Text>{this.props.UID}</Text>
          <Text>{this.props.contents}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  image: {
    height: 30,
    width: 30,
    borderRadius: 12,
  },
  text: {
    paddingLeft: 15,
    flex: 9,
  },
});
