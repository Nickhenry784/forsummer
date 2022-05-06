import {
  ImageBackground,
  View,
  TouchableOpacity,
  Text,
  Image,
  FlatList,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {images} from '../assets';
import {appStyle} from '../styles';
import {decrement} from '../redux/pointSlice';

const buttonImage = [
  {id: 1, image: images.home.fall, name: 'Fall'},
  {id: 2, image: images.home.summer, name: 'Summer'},
  {id: 3, image: images.home.spring, name: 'Spring'},
  {id: 4, image: images.home.winter, name: 'Winter'},
];

const numCol = 2;

function Home() {
  const navigation = useNavigation();
  const points = useSelector(state => state.points);
  const dispatch = useDispatch();
  const [imageBack, setImageBac] = useState(null);
  useEffect(() => {}, []);

  const onClickBuyButton = () => {
    navigation.navigate('BUY');
  };

  const onClickItemButton = name => {
    if (points.value === 0) {
      Alert.alert('Please buy more turn');
      return false;
    }
    dispatch(decrement());
    navigation.navigate(name);
  };

  return (
    <ImageBackground
      source={images.home.background_summer}
      style={appStyle.background}>
      <View style={appStyle.topView}>
        <TouchableOpacity
          onPress={onClickBuyButton}
          onLongPress={onClickBuyButton}>
          <View style={appStyle.buyView}>
            <Image style={appStyle.buyImage} source={images.home.buy} />
            <Text style={appStyle.turnText}>{points.value}</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={appStyle.selectView}>
        <FlatList
          data={buttonImage}
          scrollEnabled={false}
          style={appStyle.listView}
          numColumns={numCol}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => onClickItemButton(item.name)}
              onLongPress={() => onClickItemButton(item.name)}>
              <Image style={appStyle.buttonImage} source={item.image} />
            </TouchableOpacity>
          )}
        />
      </View>
    </ImageBackground>
  );
}

export default Home;
