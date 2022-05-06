import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {
  ImageBackground,
  View,
  TouchableOpacity,
  Text,
  Animated,
  FlatList,
} from 'react-native';
import {appStyle} from '../styles';
import {images} from '../assets';
import {randomIntFromInterval} from '../utils/number';

function PlayScreen({image, handleBackButton}) {
  const [fallPos, setFallPos] = useState([
    {top: 0, left: 20, rotate: 10},
    {top: 30, left: 100, rotate: 0},
    {top: 20, left: 300, rotate: 0},
    {top: 20, left: 40, rotate: 0},
  ]);

  useEffect(() => {
    const inveter = setInterval(() => {
      setFallPos([
        {
          top: randomIntFromInterval(0, 1000),
          left: randomIntFromInterval(0, 400),
          rotate: randomIntFromInterval(-90, 90),
        },
        {
          top: randomIntFromInterval(0, 1000),
          left: randomIntFromInterval(0, 400),
          rotate: randomIntFromInterval(-90, 90),
        },
        {
          top: randomIntFromInterval(0, 1000),
          left: randomIntFromInterval(0, 400),
          rotate: randomIntFromInterval(-90, 90),
        },
        {
          top: randomIntFromInterval(0, 1000),
          left: randomIntFromInterval(0, 400),
          rotate: randomIntFromInterval(-90, 90),
        },
      ]);
    }, 500);

    return () => {
      clearInterval(inveter);
    };
  }, []);

  return (
    <ImageBackground
      source={images.home.background_spring}
      style={appStyle.background}>
      <Animated.Image
        style={[
          {
            width: 50,
            height: 50,
            position: 'absolute',
            top: fallPos[0].top,
            left: fallPos[0].left,
            transform: [{rotate: `${fallPos[0].rotate} deg`}],
            resizeMode: 'contain',
          },
        ]}
        source={images.home.spring_item1}
      />
      <Animated.Image
        style={[
          {
            width: 50,
            height: 50,
            position: 'absolute',
            top: fallPos[1].top,
            left: fallPos[1].left,
            transform: [{rotate: `${fallPos[1].rotate} deg`}],
            resizeMode: 'contain',
          },
        ]}
        source={images.home.spring_item2}
      />
      <Animated.Image
        style={[
          {
            width: 50,
            height: 50,
            position: 'absolute',
            top: fallPos[2].top,
            left: fallPos[2].left,
            transform: [{rotate: `${fallPos[2].rotate} deg`}],
            resizeMode: 'contain',
          },
        ]}
        source={images.home.spring_item3}
      />
      <Animated.Image
        style={[
          {
            width: 50,
            height: 50,
            position: 'absolute',
            top: fallPos[3].top,
            left: fallPos[3].left,
            transform: [{rotate: `${fallPos[3].rotate} deg`}],
            resizeMode: 'contain',
          },
        ]}
        source={images.home.spring_item4}
      />
    </ImageBackground>
  );
}

PlayScreen.propTypes = {
  image: PropTypes.any,
  handleBackButton: PropTypes.func,
};

export default PlayScreen;
