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
} from 'react-native';
import { Picker } from "@react-native-picker/picker";
import { Value } from 'react-native-reanimated';

export default function Search(navigation) {
    const [selectedValue, setSelectedValue] =useState("책 제목");
    const [searchValue, setSearchValue] = useState("");


    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerArea}>
                <View style={styles.dropdownArea}>
                    <Picker
                        style={styles.picker}
                        selectedValue={selectedValue}
                        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                    >
                        <Picker.Item label="책 제목" value="1" />
                        <Picker.Item label="저자" value="2" />
                        <Picker.Item label="장르" value="3" />
                    </Picker>
                    
                </View>
                <View style={styles.searchArea}>
                    <TextInput
                        style={styles.searchText}
                        onChangeText={setSearchValue}
                        value={searchValue}
                        placeholder="검색어를 입력해주세요"
                    ></TextInput>
                </View>

            </View>
            <View style={styles.bodyArea}>

            </View>
            <View style={styles.btnArea}>
                <TouchableOpacity 
                style={styles.btn}
                //onPress = 게시물 불러오기
                >
                    <Text style={styles.btnText}>
                        Search
                    </Text>

                </TouchableOpacity>

            </View>
        </SafeAreaView>

    );
}

const styles =StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        //paddingVertical: 20,
        //paddingHorizontal: 20,
      },
      headerArea: {
          flex: 2,
          flexDirection: "row",
          //backgroundColor: "blue",

      },
      bodyArea: {
          flex: 5,
          //backgroundColor: "black",

      },
      btnArea: {
          flex:0.7,
          //alignItems: "center",
          //justifyContent: "center",
          paddingHorizontal: 5,
          //paddingVertical: 10,

      },

      dropdownArea: {
          flex: 1,
          //alignItems: "center",
          justifyContent: "center",
          //backgroundColor: "red",
      },
      searchArea: {
          flex: 2,
          //alignItems: "center",
          justifyContent: "center",
          paddingHorizontal: 10,
          //backgroundColor: "blue",
      },

      btn: {
          flex:1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#FE9F59",
          borderRadius: 30,
      },

      btnText: {
          fontWeight: '400',
          color: "white",

      },

      picker: {
          height: 50,
          //width: 150,
          borderWidth: 1,
          
      },
      searchText: {
          height: 50,
          borderWidth: 0.4,
          borderRadius: 20,
          
      }



});