import React from 'react';
import { Image, SafeAreaView, StyleSheet, View } from 'react-native';
import { Headline } from 'react-native-paper';
import PropTypes from 'prop-types';

const getLevel = (difficulty) => {
  switch (difficulty) {
  case 1:
    return 'EASY';
  case 2:
    return 'MEDIUM';
  case 3:
    return 'HARD';
  default:
    break;
  }
};

const LogoContainer = ({difficulty}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image source={require('../assets/logo.png')} style={styles.logo}/>
      </View>
      <View style={styles.titleContainer}>
        <Headline style={styles.title}>{getLevel(difficulty)}</Headline>
        <Headline style={styles.level}>LEVEL {difficulty}</Headline>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container : {
    flex: 0.3,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  logo : {
    width: 50,
    height: 70,
  },
  titleContainer: {
    flex: 1,
    paddingRight : 40
  },
  title : {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 30,
  },
  level : {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
  }
});

LogoContainer.propTypes = {
  difficulty: PropTypes.number.isRequired,
};


export default LogoContainer;