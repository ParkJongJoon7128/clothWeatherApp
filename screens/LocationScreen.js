import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Platform,
  TouchableOpacity,
  Alert,
} from 'react-native';
import TextInput from '../components/TextInput';
import {useState} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import axios from 'axios';

const LocationScreen = () => {
  const [text, setText] = useState('');
  const [locationObj, setLocationObj] = useState({});

  //LocationScreen 디자인중 (행정구역 데이터 api 받아오기 - 성공, 행정구역 데이터관리 - 작업중)
  //더 연습하기

  const callLocationApi = async ({text}) => {
    try {
      let response = await axios
        .get(
          `https://dapi.kakao.com/v2/local/search/address.json?query=${text}`,
          {
            headers: {
              Authorization: 'KakaoAK 89c4b5bfe4d36f7d936d31efab545c1d',
            },
          },
        )
        .then(response => {
          const location = response.data.documents[0];
          setLocationObj({
            si: location.address.region_1depth_name,
            gu: location.address.region_2depth_name,
            dong: location.address.region_3depth_name,
            locationX: location.address.x,
            locationY: location.address.y,
          });
          console.log(locationObj);
        });
    } catch (error) {
      console.log(error);
    }
  };

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
            setText={setText}
            value={text}
          />
        </View>
        <View style={styles.textInputResult}>
          <Text>'{text}' 검색 결과</Text>
        </View>
      </View>
      <View style={styles.wrapperBottom}>
        <ScrollView></ScrollView>
        <Text style={styles.locationText_si}>{locationObj.si}</Text>
        <Text style={styles.locationText_gu}>{locationObj.gu}</Text>
        <Text style={styles.locationText_dong}>{locationObj.dong}</Text>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.callLocationApiButton}
          onPress={() => callLocationApi({text})}>
          <Text style={styles.callLocationApiButtonText}>위치 선택하기</Text>
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
  },
  wrapperBottom: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
    // marginRight: 280,
  },
  callLocationApiButton: {
    width: 350,
    height: 50,
    backgroundColor: '#00f',
    margin: 40,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  callLocationApiButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  locationText_si: {
    fontSize: 32,
  },
  locationText_gu: {
    fontSize: 32,
  },
  locationText_dong: {
    fontSize: 32,
  },
});

export default LocationScreen;
