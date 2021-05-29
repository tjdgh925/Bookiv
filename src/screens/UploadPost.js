import React, {useState} from 'react';
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
  Platform,
} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace';
const fullWidth = Dimensions.get('window').width;

export default function UploadPost(navigation) {
  const [img, setImg] = useState(null);

  const addImage = () => {
    launchImageLibrary({}, Response => {
      setImg(Response.uri);
      //console.log(`img`)
      //console.log(img.uri)
      //setImg(null)
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.submitTab}>
        <TouchableOpacity>
          <Image
            style={styles.Ximage}
            source={require('../../image/Ximage.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>올리기</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.uploadImage}>
        <TouchableOpacity onPress={addImage}>
          {img == null ? (
            <Image
              source={require('../../image/camera.png')}
              style={styles.image}
            />
          ) : (
            <Image style={styles.image} source={{uri: img}} />
          )}
        </TouchableOpacity>

        <TextInput
          style={styles.reviewInput}
          placeholder="평소 즐겨읽는 책의 리뷰를 남겨 사람들에게 공유해보세요!"
          placeholderTextColor={'#000000'}
        />
      </View>

      <View style={styles.container2}>
        <KeyboardAvoidingView style={styles.footer}>
          <View style={styles.inputContainer}>
            <Image
              style={styles.image2}
              source={require('../../image/tag.png')}
            />
            <TextInput
              style={styles.contentsInput}
              placeholder="책 제목"
              placeholderTextColor={'#000000'}
            />
          </View>
          <View style={styles.inputContainer}>
            <Image
              style={styles.image2}
              source={require('../../image/tag.png')}
            />
            <TextInput
              style={styles.contentsInput}
              placeholder="저자"
              placeholderTextColor={'#000000'}
            />
          </View>
          <View style={styles.inputContainer}>
            <Image
              style={styles.image2}
              source={require('../../image/tag.png')}
            />
            <TextInput
              style={styles.contentsInput}
              placeholder="장르"
              placeholderTextColor={'#000000'}
            />
          </View>
        </KeyboardAvoidingView>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: "black",
    //paddingVertical: 20,
    //paddingHorizontal: 20,
  },
  container2: {
    flex: 1,
    //paddingVertical: 200,
    //flexDirection: 'flex-end',
    //backgroundColor: "red",
  },
  submitTab: {
    flex: 0.5,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    //backgroundColor: "blue",
  },
  uploadImage: {
    paddingTop: 10,
    flex: 2,
    paddingLeft: 20,
    //backgroundColor: "orange",
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
  Ximage: {
    resizeMode: 'contain',
  },
  inputContainer: {
    borderTopWidth: 1,
    borderColor: '#c2c2c2',
    width: fullWidth,
    //alignSelf: 'flex-end',
    //justifyContent: 'center',
    //paddingVertical: 20,
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingLeft: 20,
  },
  contentsInput: {
    //width: fullWidth,
    //alignSelf: 'center',
    color: '#000000',
    paddingLeft: 10,
    //height: 25,
    //backgroundColor: "red",
  },
  footer: {
    justifyContent: 'flex-end',
  },
});
