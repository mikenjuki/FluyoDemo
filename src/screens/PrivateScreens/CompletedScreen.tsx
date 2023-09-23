import React, { useEffect } from 'react';
import { NavigationProp, ParamListBase } from '@react-navigation/native'
import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { connect, useSelector } from 'react-redux';
import { getQuestions } from '../../actions/AppActions';
import { Dispatch, bindActionCreators } from 'redux';
import { colors } from '../../constants/globalStyles';

type CompletedScreenProps = {
  navigation: NavigationProp<ParamListBase>;
  getQuestionsAction: () => void;
}
const CompletedScreen = ({
  navigation,
  getQuestionsAction,
}: CompletedScreenProps) => {
  const styles = StyleSheet.create({
    completedContainer: {
      backgroundColor: colors.fluyoVeryDarkGreen,
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center'
    },
    completedButton: {
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,
      backgroundColor: colors.fluyoBrightGreen,
      width: '70%'
    },
    completedTitle: {
      marginBottom: 20,
      color: colors.fluyoWhite,
      fontSize: 20,
      fontWeight: '800'
    },
    completedText: {
      marginBottom: 20,
      color: colors.fluyoWhite,
      fontSize: 16,
    }
  })

  const completedHandler = () => {
    navigation.navigate('HomeScreen');
    getQuestionsAction();
  }

  return (
    <SafeAreaView>
      <View style={styles.completedContainer}>
        <Text style={styles.completedTitle}>Congratulations!</Text>
        <Text style={styles.completedText}>You completed the exercise</Text>
        <Pressable
          style={styles.completedButton}
          onPress={() => { completedHandler() }}
        >
          <Text>Go Home</Text>
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

export default connect(null, mapDispatchToProps)(CompletedScreen);
