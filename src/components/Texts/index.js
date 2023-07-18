import React from 'react';
import {Text} from 'react-native';

import makeStyle from '../../constants/globalstyles';
import {Colors} from '../../constants/Color';
import {Fonts} from '../../constants/fonts';

export const Text1 = ({text, color, bold, style}) => {
  return (
    <Text
      style={[
        makeStyle.text1,
        style && style,
        {
          color: color ? color : Colors.black,
          fontFamily: bold ? Fonts.semi_bold : Fonts.regular,
        },
      ]}>
      {text}
    </Text>
  );
};

export const Text2 = ({text, color, bold, style}) => {
  return (
    <Text
      style={[
        cStyle.text2,
        style && style,
        {
          color: color ? color : Colors.black,
          fontFamily: bold ? Fonts.semi_bold : Fonts.regular,
        },
      ]}>
      {text}
    </Text>
  );
};

export const Text3 = ({text, color, bold, style}) => {
  return (
    <Text
      style={[
        cStyle.text3,
        style && style,
        {
          color: color ? color : Colors.black,
          fontFamily: bold ? Fonts.semi_bold : Fonts.regular,
        },
      ]}>
      {text}
    </Text>
  );
};

export const Text4 = ({text, color, bold, style}) => {
  return (
    <Text
      style={[
        cStyle.text4,
        style && style,
        {
          color: color ? color : Colors.black,
          fontFamily: bold ? Fonts.semi_bold : Fonts.regular,
        },
      ]}>
      {text}
    </Text>
  );
};

export const Text5 = ({text, color, bold, style}) => {
  return (
    <Text
      style={[
        cStyle.text5,
        style && style,
        {
          color: color ? color : Colors.black,
          fontFamily: bold ? Fonts.semi_bold : Fonts.regular,
        },
      ]}>
      {text}
    </Text>
  );
};
