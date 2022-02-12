import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Title } from 'react-native-paper';
import LargeButton from '../components/LargeButton';
import PropTypes from 'prop-types';
import LogoContainer from '../components/LogoContainer';

const QuizForm = ({navigation}) => {
  const [email, setEmail] = React.useState('');

  return (
    <View style={styles.formContainer}>
      <Title style={styles.title}>
        QUESTION
      </Title>
      <Title style={styles.question}>
        Question de loco ici
      </Title>
      <TextInput
        placeholder="Your answer"
        value={email}
        mode="outlined"
        keyboardType='numeric'
        onChangeText={text => setEmail(text)}
        style={{marginBottom: 20}}
      />
      <LargeButton onPress={() => console.log(true)} mode="contained">
        Submit your answer
      </LargeButton>
      <LargeButton dark={true} color={'#656370'} onPress={() => navigation.navigate('Home')} mode="contained">
        Back to Home
      </LargeButton>
    </View>
  );
};

const Quiz = ({navigation}) => {
  return (
    <View style={styles.container}>
      <LogoContainer />
      <QuizForm navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
  },
  formContainer: {
    flex: 1,
  },
  title : {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 30,
  },
  question : {
    textAlign: 'center',
  }
});

Quiz.propTypes = {
  navigation: PropTypes.object,
};

QuizForm.propTypes = {
  navigation: PropTypes.object,
};

export default Quiz;