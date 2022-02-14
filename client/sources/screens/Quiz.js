import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import LogoContainer from '../components/LogoContainer';
import QuizMultipleChoice from 'volkeno-react-native-quiz-multiple-choice';
import {useSelector, useDispatch} from 'react-redux';
import { getQuizByDifficulty } from '../reducers/Actions/Quiz';
import { ActivityIndicator } from 'react-native-paper';

const QuizForm = ({navigation, difficulty}) => {
  const {quiz} = useSelector(state => state.quizReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getQuizByDifficulty(difficulty));
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
        buttonsContainerStyle={{ marginTop: 30 }}
        onEnd={(results) => {
          console.log(results);
        }}
        data={quiz && quiz?.[0] && quiz?.[0]?.question && quiz}
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