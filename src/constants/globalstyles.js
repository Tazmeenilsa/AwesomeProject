import {StyleSheet} from 'react-native';
import {Colors} from './Color';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {Fonts} from './fonts';
const makeStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  column: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: Colors.grey,
    width: '50%',
    padding: 10,
    alignSelf: 'center',
  },
  text: {
    color: Colors.black,
    textAlign: 'center',
  },
  padding: {
    padding: 10,
  },
  margin: {
    margin: 10,
  },

  //  -- MARGIN --
  m: {margin: wp(1)},
  mt: {marginTop: wp(1)},
  mb: {marginBottom: wp(1)},
  mH: {marginHorizontal: wp(1)},
  mv: {marginVertical: wp(1)},

  // -- SHADOW --
  shadow: {
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.29,
    shadowRadius: 2.65,

    elevation: 3,
  },

  // -- BUTTONS --

  button1: {
    height: wp(10),
    backgroundColor: Colors.grey,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: wp(1),
    padding: wp(1),
  },

  // -- TEXTS --

  text1: {
    fontSize: wp(8),
    paddingHorizontal: wp(2),
    paddingVertical: wp(0.15),
    fontFamily: Fonts.s_regular,
  },
  text2: {
    fontSize: wp(6),
    paddingHorizontal: wp(2),
    paddingVertical: wp(0.15),
    fontFamily: Fonts.regular,
  },
  text3: {
    fontSize: hp(2.5),
    paddingHorizontal: wp(2),
    paddingVertical: wp(0.15),
    fontFamily: Fonts.regular,
  },
  text4: {
    fontSize: hp(2),
    paddingHorizontal: wp(1),
    paddingVertical: wp(0.15),
    fontFamily: Fonts.regular,
  },
  text5: {
    fontSize: hp(1.5),
    paddingHorizontal: wp(2),
    paddingVertical: wp(0.15),
    fontFamily: Fonts.regular,
  },
});

export default makeStyle;
