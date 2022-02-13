import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { Headline, Paragraph, Title } from 'react-native-paper';
import PropTypes from 'prop-types';
import LargeButton from '../components/LargeButton';
import { useSelector } from 'react-redux';

const End = ({navigation}) => {
  const {user} = useSelector();

  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Image source={require('../assets/logo.png')} style={styles.logo}/>
        <Headline style={styles.headline}>
          <Text style={styles.headline}>A Gorilla Path</Text>
        </Headline>
        <Paragraph style={styles.paragraph}>
          Give 100% of yourself, be proud.
        </Paragraph>
        <Paragraph style={styles.paragraph}>
          Like us, you took the hard way, and decided to success in Epitech.
        </Paragraph>
        <Title style={styles.title}>This is our greatest SUCCESS</Title>
        <Title style={styles.title}>SCORE : {user && user.score}</Title>
      </View>
      <View style={styles.containerBtn}>
        <LargeButton onPress={() => navigation.navigate('Home')} mode="contained">
          Back to home
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
    flex: 2,
    paddingTop: 150,
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
    color: '#2d2c38',
    textAlign: 'center',
    padding: 10,
    fontWeight: 'bold',
  },
  paragraph : {
    textAlign: 'center',
    color: '#2d2c38',
  },
  title : {
    textAlign: 'center',
    color: '#2d2c38',
  },
  btn : {
    padding: 10,
  }
});

End.propTypes = {
  navigation: PropTypes.object,
};


export default End;