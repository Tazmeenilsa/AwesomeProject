import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import makeStyle from '../constants/globalstyles';
import {navigate} from '../services/navigationService';

const Signup = () => {
  return (
    <View style={[makeStyle.column, makeStyle.container]}>
      <Text style={[makeStyle.text, makeStyle.margin]}>Signup Page</Text>
      <TouchableOpacity
        style={makeStyle.button}
        onPress={() => navigate('Login')}>
        <Text style={makeStyle.text}>Already have an account?</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({});
