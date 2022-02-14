import React, { useEffect } from 'react';
import { View, StyleSheet, Alert, Platform } from 'react-native';
import PropTypes from 'prop-types';
import LogoContainer from '../components/LogoContainer';
import QuizMultipleChoice from 'volkeno-react-native-quiz-multiple-choice';
import {useSelector, useDispatch} from 'react-redux';
import { getQuizByDifficulty, resetQuizData } from '../reducers/Actions/Quiz';
import { ActivityIndicator } from 'react-native-paper';
import { setUserDiffculty, setUserScore } from '../reducers/Actions/User';

const getMark = (results) => {
  let mark = 0;

  results.forEach(element => {
    element?.isRight === true ? mark++ : 0;
  });
  return mark;
};

const QuizFormEnd = (navigation, difficulty, results) => {
  const nbquestions = results.length;
  const mark = getMark(results);
  const redirection = () => difficulty < '3' ? navigation.navigate('Home') : navigation.navigate('End');

  {
    Alert.alert(
      'Well done bro',
      `GG, you ended the level ${difficulty}\nRESULT : ${mark}/${nbquestions}`,
      [
        { text: 'Back to home', onPress: () => {
          redirection();
        } }
      ]
    );
  }
};

const QuizForm = ({navigation, difficulty}) => {
  const {quiz} = useSelector(state => state.quizReducer);
  const {user} = useSelector(state => state.userReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    const refreshOnFocus = navigation.addListener('focus', () => {
      dispatch(resetQuizData());
      dispatch(getQuizByDifficulty(difficulty));
    });

    return refreshOnFocus;
  }, [dispatch]);

  return (
    <>
      {quiz && quiz[0] && quiz[0].question && <QuizMultipleChoice
        containerStyle={{ backgroundColor: '#f6f6f6', }}
        questionTitleStyle={{ fontSize: 25, color: 'black' }}
        responseStyle={{ borderRadius: 10 }}
        responseTextStyle={{ fontSize: 20, fontWeight: 'normal' }}
        selectedResponseStyle={{borderRadius: 10, backgroundColor: '#3498db'}}
        selectedResponseTextStyle={{fontSize: 20, fontWeight: 'normal'}}
        responseRequired={true}
        nextButtonText={'Next'}
        nextButtonStyle={{ backgroundColor: '#06d755' }}
        prevButtonText={'Prev'}
        prevButtonStyle={{ backgroundColor: '#fa5541' }}
        endButtonText={'Done'}
        endButtonStyle={{ backgroundColor: '#000' }}
        buttonsContainerStyle={{ marginTop: Platform.OS === 'ios' ? 30 : 'auto' }}
        onEnd={(results) => {
          dispatch(setUserScore((parseInt(user?.score) + getMark(results)).toString()));
          dispatch(setUserDiffculty((parseInt(difficulty) + 1).toString()));
          QuizFormEnd(navigation, difficulty, results);
        }}
        data={quiz}
      /> || <ActivityIndicator size="large"/>}
    </>
  );
};

const Quiz = ({navigation, route}) => {
  const {difficulty} = route.params;

  return (
    <View style={styles.container}>
      <View style={{padding: 30, flex: 0.2}}>
        <LogoContainer difficulty={difficulty} />
      </View>
      <QuizForm navigation={navigation} difficulty={difficulty} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  question : {
    textAlign: 'center',
  }
});

Quiz.propTypes = {
  navigation: PropTypes.object,
  route: PropTypes.object,
};

QuizForm.propTypes = {
  navigation: PropTypes.object,
  difficulty: PropTypes.number.isRequired
};

export default Quiz;