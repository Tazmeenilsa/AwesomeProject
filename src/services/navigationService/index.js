import * as React from 'react';
import {StackActions} from '@react-navigation/native';

const navigationRef = React.createRef();

const navigate = (name, params) =>
  navigationRef.current?.navigate(name, params);

const replace = (name, params) =>
  navigationRef.current?.dispatch(StackActions.replace(name, params));

const goBack = (name, params) => navigationRef.current?.goBack();

export {navigate, replace, goBack};
export default navigationRef;
