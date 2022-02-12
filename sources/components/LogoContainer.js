import React from 'react';
import { Image, SafeAreaView, StyleSheet, View } from 'react-native';
import { Headline } from 'react-native-paper';

const LogoContainer = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image source={require('../assets/logo.png')} style={styles.logo}/>
      </View>
      <View style={styles.titleContainer}>
        <Headline style={styles.title}>MEDUIM</Headline>
        <Headline style={styles.level}>LEVEL 30</Headline>
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

export default LogoContainer;