import React from 'react';
import {Text, View, StyleSheet, Platform, TouchableOpacity} from 'react-native';
import TextInput from '../components/TextInput';
import {useState} from 'react';
import {ScrollView} from 'react-native-gesture-handler';

const LocationScreen = () => {
  const [text, setText] = useState('');

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
          <Text>{text} 검색 결과</Text>
        </View>
      </View>
      <View style={styles.wrapperBottom}>
        <ScrollView></ScrollView>
        <TouchableOpacity style={styles.callLocationApiButton}>
          <Text style={styles.callLocationApiButtonText}>위치 등록하기</Text>
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
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default LocationScreen;
