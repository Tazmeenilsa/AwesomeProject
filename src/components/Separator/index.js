import React from 'react';
import {View, StyleSheet} from 'react-native';

import {Colors} from '../../constants/Color';
export const Separator = ({height, bg}) => {
  return (
    <View
      style={[
        style.separate,
        {
          height: height ? height : 1,
          backgroundColor: bg ? bg : Colors.dullwhite,
        },
      ]}></View>
  );
};

const style = StyleSheet.create({
  separate: {
    width: '100%',
    marginVertical: 10,
  },
});
