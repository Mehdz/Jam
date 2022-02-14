import React, { useEffect } from 'react';
import { View, StyleSheet, Image, Text, Platform } from 'react-native';
import { Headline, Paragraph } from 'react-native-paper';
import PropTypes from 'prop-types';
import LargeButton from '../components/LargeButton';
import {useDispatch, useSelector} from 'react-redux';
import { setUserData } from '../reducers/Actions/User';

const Home = ({navigation}) => {
  const {user} = useSelector(state => state.userReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    const refreshOnFocus = navigation.addListener('focus', () => {
      dispatch(setUserData());
    });

    return refreshOnFocus;
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Image source={require('../assets/logo.png')} style={styles.logo}/>
        <Headline style={styles.headline}>
          <Text style={styles.headline}>The Hard Way</Text>
        </Headline>
        <Paragraph style={styles.paragraph}>
          If my mind can conceive it, if my heart can believe it, then I can achieve it.
        </Paragraph>
      </View>
      <View style={styles.containerBtn}>
        {user && user.difficulty === '0' &&
        <LargeButton onPress={() => navigation.push('Quiz', {
          difficulty: 0
        })} mode="contained">
          Tutorial
        </LargeButton> ||
        <>
          <LargeButton onPress={() => navigation.push('Quiz', {
            difficulty: 1
          })} mode="contained">
          Easy
          </LargeButton>
          <LargeButton onPress={() => navigation.push('Quiz', {
            difficulty: 2
          })}
          mode="contained" disabled={user?.difficulty > '1' ? false : true}>
          Medium
          </LargeButton>
          <LargeButton onPress={() => navigation.push('Quiz', {
            difficulty: 3
          })}
          mode="contained" disabled={user?.difficulty > '2' ? false : true}>
          Hard
          </LargeButton>
        </>
        }
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 30,
    flex: 1,
  },
  containerLogo: {
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? 100 : 0,
  },
  containerBtn : {
    flex: 1,
  },
  logo : {
    width: 130,
    height: 200,
    alignSelf: 'center',
  },
  headline : {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#2d2c38',
    padding: 10,
  },
  paragraph : {
    textAlign: 'center',
    color: '#2d2c38',
  },
  btn : {
    padding: 10,
  }
});

Home.propTypes = {
  navigation: PropTypes.object,
};


export default Home;