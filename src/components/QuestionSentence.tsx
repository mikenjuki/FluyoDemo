import { Popable, usePopable } from "react-native-popable"
import SelectedOption from "./SelectedOption"
import { Button, StyleSheet, Text } from "react-native"
import { useSelector } from "react-redux";
import { colors } from "../constants/globalStyles";

type QuestionSentenceProps = {
  word: string;
  selectedAnswer: Answer;
}
const QuestionSentence = ({ word, selectedAnswer }: QuestionSentenceProps) => {
  const [ref, { hide }] = usePopable();
  const currentQuestion = useSelector((state: IState) => state.app.currentQuestion);
  const tranlations = useSelector((state: IState) => state.app.translations);

  const styles = StyleSheet.create({
    questionSentenceText: {
      color: colors.fluyoWhite,
      fontWeight: 'bold',
      textDecorationStyle: 'dotted',
      textDecorationLine: 'underline'
    }
  })
  return (word.includes("--") ? (
    <SelectedOption
      selectedAnswer={selectedAnswer}
      isCorrect={currentQuestion.isCorrect}
    />
  ) : (
    <Popable
      ref={ref}
      content={
        <Button
          title={tranlations?.[word.toLowerCase() as keyof typeof tranlations] || '<undefined>'}
          onPress={() => hide()}
        />
      }
    >
      <Text style={styles.questionSentenceText}>{word}</Text>
    </Popable>
  ))
}

export default QuestionSentence;
