import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Signup = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <Text style={{color: 'black', textAlign: 'center', marginBottom: 10}}>
        Signup Page
      </Text>
      <TouchableOpacity
        style={{
          alignItems: 'center',
          backgroundColor: '#DDDDDD',
          width: '50%',
          padding: 10,
          alignSelf: 'center',
        }}
        onPress={() => navigation.navigate('Login')}>
        <Text style={{color: 'black'}}>Already have an account?</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({});
