import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import makeStyle from '../constants/globalstyles';
import {navigate} from '../services/navigationService';

const Splash = () => {
  useEffect(() => {
    setTimeout(() => {
      navigate('Login');
    }, 3000);
  }, []);

  return (
    <View style={[makeStyle.container, makeStyle.column]}>
      <Text style={makeStyle.text}>Splash Screen</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({});
