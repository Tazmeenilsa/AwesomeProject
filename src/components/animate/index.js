import {Animated} from 'react-native';
import React, {useRef, useEffect} from 'react';

const Animate = ({children, style, duration = 200, delay = 0}) => {
  const animate = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(animate, {
      toValue: 1,
      duration,
      useNativeDriver: true,
      delay,
    }).start();
  }, []);

  return (
    <Animated.View style={[style && style, {opacity: animate}]}>
      {children}
    </Animated.View>
  );
};

export {Animate};
