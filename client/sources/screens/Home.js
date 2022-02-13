import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { Headline, Paragraph } from 'react-native-paper';
import PropTypes from 'prop-types';
import LargeButton from '../components/LargeButton';
import {useDispatch, useSelector} from 'react-redux';
import { setUserData } from '../reducers/Actions/User';

const Home = ({navigation}) => {
  const {user} = useSelector(state => state.userReducer);
  const [mediumBtn, setMediumBtn] = useState(true);
  const [hardBtn, setHardBtn] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setUserData());
    if (user && user.difficulty === 'hard') {
      setMediumBtn(false);
      setHardBtn(false);
    } else if (user && user.difficulty === 'medium')
      setMediumBtn(false);
  }, [setMediumBtn, setHardBtn]);

  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Image source={require('../assets/logo.png')} style={styles.logo}/>
        <Headline style={styles.headline}>
          <Text style={styles.headline}>A Gorilla Path</Text>
        </Headline>
        <Paragraph style={styles.paragraph}>
          If my mind can conceive it, if my heart can believe it, then I can achieve it.
        </Paragraph>
      </View>
      <View style={styles.containerBtn}>
        <LargeButton onPress={() => navigation.push('End')} mode="contained">
          Easy
        </LargeButton>
        <LargeButton onPress={() => navigation.push('Quiz')} mode="contained" disabled={mediumBtn}>
          Medium
        </LargeButton>
        <LargeButton onPress={() => navigation.push('Quiz')} mode="contained" disabled={hardBtn}>
          Hard
        </LargeButton>
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
    paddingTop: 100,
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