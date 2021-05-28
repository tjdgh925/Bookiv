import React from 'react';
import {StyleSheet, Image, Text, TextInput, View, SafeAreaView} from 'react-native';
// import {FontAwesome} from '@expo/vector-icons';

export default function EditProfile() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container2}>
        <View style={styles.userArea}>
          <Image
              style={styles.image}
              source={require('../../image/user.png')}
              />
          <Text
            style={styles.editText}
            //onpress={}
          >
            프로필 사진 바꾸기
          </Text>
        </View>
        <View style={styles.infoArea}>
          <View style={styles.nameArea}>
            <View style={styles.infoTitleArea}>
              <Text>이름</Text>
            </View>
            <View style={styles.infoTextArea}>
              <TextInput style={styles.nameInput}></TextInput>
            </View>
          </View>
          <View style={styles.emailArea}>
            <View style={styles.infoTitleArea}>
              <Text>이메일</Text>
            </View>
            <View style={styles.infoTextArea}>
              <TextInput style={styles.emailInput}></TextInput>
            </View>
          </View>
          <View style={styles.proArea}>
            <View style={styles.infoTitleArea}>
              <Text>소개</Text>
            </View>
            <View style={styles.infoTextArea}>
              <TextInput style={styles.produceInput}></TextInput>
            </View>
          </View>
        </View>
        <View style={styles.blankArea}></View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
    paddingTop: 10,
  },
  container2: {
    flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
  },
  /*headerArea: {
      flex:1,
      flexDirection:'row',
      backgroundColor: 'white',
      
  },*/
  userArea: {
    flex: 2.5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    //borderWidth: 0.5,
  },
  infoArea: {
    flex: 3,
    backgroundColor: 'white',
    borderWidth: 0.5,
  },
  blankArea: {
    flex: 5,
    backgroundColor: 'white',
    borderWidth: 0.5,
  },

  nameArea: {
    flex: 1,
    flexDirection: 'row',
  },
  emailArea: {
    flex: 1,
    borderWidth: 0.5,
    flexDirection: 'row',
  },
  proArea: {
    flex: 2,
    flexDirection: 'row',
  },

  infoTitleArea: {
    flex: 2,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoTextArea: {
    flex: 6,
  },

  undo: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    flex: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },

  headerText: {
    fontSize: 15,

  },
  editText: {
    paddingTop: 10,
    color: "blue",
  },

  nameInput: {
    flex:1,
  },
  emailInput: {
    flex:1,
  },
  produceInput: {
    flex:1,
  }
});
