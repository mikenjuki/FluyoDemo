import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import Layout from "../../components/Layout";
import ButtonBackdrop from "../../components/ButtonBackdrop";
import TitleBar from "../../components/TitleBar";
import QuestionContent from "../../components/QuestionContent";
import { connect, useDispatch, useSelector } from "react-redux";
import {
  getTranslations,
  updateCurrentQuestion,
  updateQuestion,
} from "../../actions/AppActions";
import { AppDispatch } from "../../reducers";
import { Dispatch, bindActionCreators } from "redux";
import { QuestionState } from "../../constants/questionState";
import { NavigationProp, ParamListBase } from "@react-navigation/native";

type ExerciseScreenProps = {
  navigation: NavigationProp<ParamListBase>;
  getTranslationsAction: () => void;
};

const ExerciseScreen = ({
  navigation,
  getTranslationsAction,
}: ExerciseScreenProps) => {
  const styles = StyleSheet.create({
    exerciseContainer: {
      flex: 1,
    },
  });

  const currentQuestion = useSelector(
    (state: IState) => state.app.currentQuestion
  );
  const questions = useSelector((state: IState) => state.app.questions);
  const translations = useSelector((state: IState) => state.app.translations);
  const dispatch = useDispatch();

  const [selectedAnswer, setSelectedAnswer] = useState<Answer>();

  const goToNextQuestion = () => {
    const nextQuestion = questions?.filter(
      (q: Question) => q.state !== "SOLVED"
    )[0];
    if (!nextQuestion) navigation.navigate("CompletedScreen");
    dispatch(updateCurrentQuestion(nextQuestion));
  };

  useEffect(() => {
    if (!currentQuestion && questions.length !== 0) goToNextQuestion();
  }, [currentQuestion, questions]);

  useEffect(() => {
    if (Object.keys(translations).length === 0) getTranslationsAction();
  }, [translations]);

  const onSelectAnswer = (question: Question, answer: Answer) => {
    setSelectedAnswer(answer);
    dispatch(updateQuestion(answer.id, { state: "SUBMITTED" }));
    dispatch(
      updateCurrentQuestion({
        ...currentQuestion,
        state: "SUBMITTED",
      })
    );
  };

  const verifyResponse = (question: Question, answer: Answer) => {
    let isCorrect = false;
    if (
      question?.correctAnswer?.toLowerCase() === answer.selected.toLowerCase()
    )
      isCorrect = true;
    dispatch(updateQuestion(question.id!, { state: "SOLVED", isCorrect }));
    dispatch(
      updateCurrentQuestion({
        ...currentQuestion,
        state: "SOLVED",
        isCorrect,
      })
    );
  };

  const handleContinue = () => {
    switch (currentQuestion?.state) {
      case "SUBMITTED":
        verifyResponse(currentQuestion, selectedAnswer!);
        break;
      case "SOLVED":
        goToNextQuestion();
      default:
        break;
    }
  };

  return (
    <Layout>
      <SafeAreaView style={styles.exerciseContainer}>
        <TitleBar navigation={navigation} title="" />
        {currentQuestion && (
          <>
            <QuestionContent
              onSelectAnswer={(answer) => {
                onSelectAnswer(currentQuestion, answer);
              }}
            />
            <ButtonBackdrop
              onClick={() => {
                handleContinue();
              }}
            />
          </>
        )}
      </SafeAreaView>
    </Layout>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      getTranslationsAction: getTranslations,
    },
    dispatch
  );
export default connect(null, mapDispatchToProps)(ExerciseScreen);
