import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import makeStyle from '../constants/globalstyles';
import {navigate} from '../services/navigationService';

const Login = () => {
  return (
    <View style={[makeStyle.column, makeStyle.container]}>
      <Text style={[makeStyle.text, makeStyle.margin]}>Login Page</Text>
      <TouchableOpacity
        style={makeStyle.button}
        onPress={() => navigate('BottomTab')}>
        <Text style={makeStyle.text}>create account</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
