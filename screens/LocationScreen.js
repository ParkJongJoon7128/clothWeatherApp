import React from 'react';
<<<<<<< HEAD
import {Text, View, StyleSheet, Platform, TouchableOpacity} from 'react-native';
=======
import {Text, View, StyleSheet, Platform} from 'react-native';
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> master
import TextInput from '../components/TextInput';
=======
import TextInput from '../components/add_Address';
>>>>>>> parent of 57ec3ce... LcationScreen 디자인중 (textinput 값 보여주기 - success!)
=======
import TextInput from '../components/add_Address';
>>>>>>> parent of 57ec3ce... LcationScreen 디자인중 (textinput 값 보여주기 - success!)
import {useState} from 'react';
import axios from 'axios';
import {FlatList, ScrollView} from 'react-native-gesture-handler';

const LocationScreen = () => {
<<<<<<< HEAD
<<<<<<< HEAD
  const [text, setText] = useState('');
<<<<<<< HEAD
  const [locationObj, setLocationObj] = useState({});

  // axios
  //   .get(
  //   `https://dapi.kakao.com/v2/local/search/address.json?query=${fullAddress}`,
  //   {
  //     headers: {
  //       Authorization: 'KakaoAK {89c4b5bfe4d36f7d936d31efab545c1d}',
  //     },
  //   },
  // )
  // .then(res => {
  //   const location = res.data.documents[0];
  //   setLocationObj({
  //     si: location.address.region_1depth_name,
  //     gu: location.address.region_2depth_name,
  //     dong: location.address.region_3depth_name,
  //     locationX: location.address.x,
  //     locationY: location.address.y,
  //   });
  // });

  const callLocationApi = async () => {
    let url = axios
      .get(
        `https://dapi.kakao.com/v2/local/search/address.json?query=${fullAddress}`,
        {
          headers: {
            Authorization: 'KakaoAK {89c4b5bfe4d36f7d936d31efab545c1d}',
          },
        },
      )
      .then(res => {
        const location = res.data.documents[0];
        setLocationObj({
          si: location.address.region_1depth_name,
          //     gu: location.address.region_2depth_name,
          //     dong: location.address.region_3depth_name,
          //     locationX: location.address.x,
          //     locationY: location.address.y,
        });
      });
  };
=======
>>>>>>> master
=======
=======
>>>>>>> parent of 57ec3ce... LcationScreen 디자인중 (textinput 값 보여주기 - success!)
  const [text, setChangeText] = React.useState('');

  // const changeText = value => {
  //   setChangeText({text: value});
  // };

  // const submitText = {};
<<<<<<< HEAD
>>>>>>> parent of 57ec3ce... LcationScreen 디자인중 (textinput 값 보여주기 - success!)
=======
>>>>>>> parent of 57ec3ce... LcationScreen 디자인중 (textinput 값 보여주기 - success!)

  return (
    <View style={styles.wrapper}>
      <View style={styles.wrapperTop}>
        <View style={styles.locationTitleWrapper}>
          <Text style={styles.locationTitle}>위치 서비스</Text>
        </View>
        <View style={styles.locationTextInputIntroWrapper}>
          <Text style={styles.locationTextInputIntro}>
            정확한 날씨 정보를 위해
          </Text>
          <Text style={styles.locationTextInputIntro}>
            위치서비스를 입력해주세요!
          </Text>
        </View>
        <View>
          <TextInput
            style={{
              width: 350,
              height: 50,
              marginTop: 30,
              marginLeft: 30,
              marginRight: 30,
              borderRadius: 10,
              borderColor: '#00f',
              borderWidth: 1,
              paddingHorizontal: 24,
            }}
            placeholder="도로명을 제외한 행정구역까지만 입력해주세요!"
            // onChangeText={changeText}
            // onSubmitEditing={submitText}
          />
        </View>
        <View style={styles.textInputResult}>
          <Text>'{text}'' 검색 결과</Text>
        </View>
      </View>

      <View style={styles.wrapperBottom}>
        <FlatList></FlatList>
        <TouchableOpacity 
        style={styles.addLocationButtons}
        onPress={callLocationApi}>
          <Text style={styles.addLocationButtonsText}>위치 추척</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  wrapperTop: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  wrapperBottom: {
    flex: 1,
  },
  locationTitle: {
    color: '#00f',
    fontSize: 18,
  },
  locationTextInputIntro:
    Platform.OS === 'ios'
      ? {
          fontSize: 26,
          textAlign: 'center',
          color: '#000',
        }
      : {
          fontSize: 24,
          textAlign: 'center',
          color: '#000',
        },
  locationTextInputIntroWrapper: {
    marginTop: 24,
  },
  textInputResult: {
    fontSize: 18,
    color: '#000',
    marginTop: 15,
<<<<<<< HEAD
<<<<<<< HEAD
    // marginRight: 280,
<<<<<<< HEAD
  },
  addLocationButtons: {
    width: 330,
    height: 50,
    backgroundColor: '#00f',
    padding: 10,
    margin: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  addLocationButtonsText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
=======
>>>>>>> master
=======
    marginRight: 300,
>>>>>>> parent of 57ec3ce... LcationScreen 디자인중 (textinput 값 보여주기 - success!)
=======
    marginRight: 300,
>>>>>>> parent of 57ec3ce... LcationScreen 디자인중 (textinput 값 보여주기 - success!)
  },
});

export default LocationScreen;
