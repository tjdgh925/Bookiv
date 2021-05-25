import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Text,
  TextInput,
  Dimensions,
  KeyboardAvoidingView,
} from 'react-native';
const fullWidth = Dimensions.get('window').width;

export default function UploadPost(navigation) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.submitTab}>
        <TouchableOpacity>
          <Text>Exit</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Submit</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.uploadImage}>
        <TouchableOpacity
        // onPress={사진첩가서 골라온다.}
        >
          <Image
            style={styles.image}
            source={require('../../image/camera.png')}
          />
        </TouchableOpacity>
        <Text>평소 즐겨읽는 책의 리뷰를 남겨 사람들에게 공유해보세요!</Text>
      </View>
      <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={90}>
        <View>
          <View style={styles.inputContainer}>
            <Image
              style={styles.image2}
              source={require('../../image/camera.png')}
            />
            <TextInput
              style={styles.contentsInput}
              placeholder="URL"
              placeholderTextColor={'red'}
            />
          </View>
          <View style={styles.inputContainer}>
            <Image
              style={styles.image2}
              source={require('../../image/camera.png')}
            />
            <TextInput
              style={styles.contentsInput}
              placeholder="책 제목"
              placeholderTextColor={'red'}
            />
          </View>
          <View style={styles.inputContainer}>
            <Image
              style={styles.image2}
              source={require('../../image/camera.png')}
            />
            <TextInput
              style={styles.contentsInput}
              placeholder="저자"
              placeholderTextColor={'red'}
            />
          </View>
          <View style={styles.inputContainer}>
            <Image
              style={styles.image2}
              source={require('../../image/camera.png')}
            />
            <TextInput
              style={styles.contentsInput}
              placeholder="장르"
              placeholderTextColor={'red'}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  submitTab: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  uploadImage: {
    paddingTop: 30,
    flex: 2,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
    borderWidth: 3,
    borderRadius: 10,
  },
  image2: {
    width: 30,
    height: 30,
    alignSelf: 'center',
  },
  inputContainer: {
    flex: 1,
    borderTopWidth: 2,
    borderColor: '#c2c2c2',
    width: fullWidth,
    alignSelf: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    flexDirection: 'row',
    paddingLeft: 30,
  },
  contentsInput: {
    width: fullWidth,
    alignSelf: 'center',
    color: 'red',
    height: 25,
    paddingLeft: 30,
  },
});
