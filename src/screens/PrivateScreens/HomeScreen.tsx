import React, { useEffect } from 'react';
import { NavigationProp, ParamListBase } from '@react-navigation/native'
import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { connect, useSelector } from 'react-redux';
import { getQuestions } from '../../actions/AppActions';
import { Dispatch, bindActionCreators } from 'redux';
import { colors } from '../../constants/globalStyles';

type HomeScreenProps = {
  navigation: NavigationProp<ParamListBase>;
  getQuestionsAction: () => void;
}
const HomeScreen = ({
  navigation,
  getQuestionsAction,
}: HomeScreenProps) => {
  const styles = StyleSheet.create({
    homeContainer: {
      backgroundColor: colors.fluyoVeryDarkGreen,
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center'
    },
    homeButton: {
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,
      backgroundColor: colors.fluyoBrightGreen,
      width: '70%'
    },
    homeTitle: {
      marginBottom: 20,
      color: colors.fluyoWhite,
      fontSize: 20,
      fontWeight: '800'
    }
  })

  const questions = useSelector((state: IState) => state.app.questions)

  useEffect(() => {
    if (questions?.length === 0) getQuestionsAction();
  }, [questions]);

  return (
    <SafeAreaView>
      <View style={styles.homeContainer}>
        <Text style={styles.homeTitle}>German Exercises</Text>
        <Pressable
          style={styles.homeButton}
          onPress={() => { navigation.navigate('ExerciseScreen') }}
        >
          <Text>Start Exercise</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => (
  bindActionCreators({
    getQuestionsAction: getQuestions,
  }, dispatch)
);

export default connect(null, mapDispatchToProps)(HomeScreen);
