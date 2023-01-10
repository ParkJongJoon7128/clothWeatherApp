import React, {useState, useContext, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';
import {SafeAreaView} from 'react-native-safe-area-context';

import axios from 'axios';

import TextInput from '../components/TextInput';
import {LocationContext} from '../context/LocationContext';

const addLocationModal = () => {
  const [text, setText] = useState('');
  const {locationObj, setLocationObj} = useContext(LocationContext);
  const [modalVisible, setModalVisible] = useState(false);

  const callLocationApi = async ({text}) => {
    const encodeText = encodeURI(text);
    try {
      await axios
        .get(
          `https://dapi.kakao.com/v2/local/search/address.json?query=${encodeText}`,
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
            // 위도와 경도 값 바뀜
            locationX: location.address.x,
            locationY: location.address.y,
          });
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView>
      <Modal>
        <View>
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

            <View style={styles.textInputResult}>
              <Text>검색 결과</Text>
            </View>

            <View style={styles.textInputResult}>
              <Text>
                {locationObj.si} {locationObj.gu} {locationObj.dong}
              </Text>
            </View>

            <View>
              <Text style={styles.locationText_dong}>
                위도 : {locationObj.locationX}
              </Text>
              <Text style={styles.locationText_dong}>
                경도 : {locationObj.locationY}
              </Text>
            </View>

            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.callLocationApiButton}
              onPress={() => callLocationApi({text})}
              locationObj={locationObj}>
              <Text style={styles.callLocationApiButtonText}>
                위치 선택하기
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default addLocationModal;
