import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  View,
  SafeAreaView,
  Platform,
} from 'react-native';

import Mytabs from './Navigation2';

export default function UserPage({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container2}>
        <View style={styles.userArea}>
          <View style={styles.IconArea}>
            <View style={styles.iconPaint}>
              <Image
                style={styles.image}
                source={require('../../image/user.png')}
              />
            </View>
            <View style={styles.userId}>
              <Text>Test</Text>
            </View>
          </View>

          <View style={styles.TextArea}>
            <View style={styles.postArea}>
              <Text style={styles.postText}>1</Text>
              <Text style={styles.postText}>게시글</Text>
            </View>
            <View style={styles.likeArea}>
              <Text
                style={styles.likeText}
                onPress={() => navigation.navigate('LikeScreen')}>
                4
              </Text>
              <Text
                style={styles.likeText}
                onPress={() => navigation.navigate('LikeScreen')}>
                좋아요
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.editArea}>
          <TouchableOpacity
            style={styles.editButton}
            onPress={() => navigation.navigate('EditProfile')}>
            <Text style={styles.editText}>프로필 편집</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.tabArea}>
          <Mytabs />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  },
  container2: {
    flex: 1,
    justifyContent: 'flex-start',
    //paddingVertical: 50,
    //paddingHorizontal: 50,
    backgroundColor: 'white',
  },

  userArea: {
    flex: 2,
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  editArea: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  tabArea: {
    flex: 6,
    backgroundColor: 'white',
  },

  IconArea: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  TextArea: {
    flex: 2,
    flexDirection: 'row',
    backgroundColor: 'white',
  },

  postArea: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  likeArea: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  headerText: {
    justifyContent: 'center',
    paddingVertical: 20,
    paddingHorizontal: 10,
    //alignSelf: 'center',
    fontSize: 30,
    //fontFamily: 'Noto Sans Kannada',
    fontWeight: '600',
    fontStyle: 'normal',
    lineHeight: 33,
    color: '#837976',
  },

  postText: {
    fontSize: 16,
  },
  likeText: {
    fontSize: 16,
  },

  editButton: {
    borderWidth: 1,
    paddingBottom: 10,
    paddingTop: 10,
    paddingLeft: 130,
    paddingRight: 130,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#c2c2c2',
  },
  editText: {
    fontSize: 16,
  },
});
