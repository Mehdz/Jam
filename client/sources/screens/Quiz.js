import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import LogoContainer from '../components/LogoContainer';
import QuizMultipleChoice from 'volkeno-react-native-quiz-multiple-choice';
import {useSelector, useDispatch} from 'react-redux';
import { getQuizByDifficulty } from '../reducers/Actions/Quiz';

const QuizForm = ({navigation}) => {
  const {quiz} = useSelector(state => state.quizReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    const refreshOnFocus = navigation.addListener('focus', () => {
      dispatch(getQuizByDifficulty(1));
    });

    return refreshOnFocus;
  }, [dispatch]);

  const data = (quiz && quiz[0] && quiz[0].question && quiz);

  return (
    <QuizMultipleChoice
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
      data={data}
    />
  );
};

const Quiz = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={{padding: 30, flex: 0.2}}>
        <LogoContainer />
      </View>
      <QuizForm navigation={navigation} />
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
};

QuizForm.propTypes = {
  navigation: PropTypes.object,
};

export default Quiz;