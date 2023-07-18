import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const Login = ({navigation}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <Text style={{color: 'black', textAlign: 'center', marginBottom: 10}}>
        Login Page
      </Text>
      <TouchableOpacity
        style={{
          alignItems: 'center',
          backgroundColor: '#DDDDDD',
          width: '50%',
          padding: 10,
          alignSelf: 'center',
        }}
        onPress={() => navigation.navigate('BottomTab')}>
        <Text style={{color: 'black'}}>create account</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
