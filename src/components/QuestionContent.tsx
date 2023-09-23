import { useEffect, useState } from "react"
import { StyleSheet, Text } from "react-native"
import { View } from "react-native"
import QuestionOption from "./QuestionOption"
import { useSelector } from "react-redux"
import QuestionSentence from "./QuestionSentence"
import { colors } from "../constants/globalStyles"

type QuestionContentProps = {
  onSelectAnswer: (answer: Answer) => void;
}

const QuestionContent = ({ onSelectAnswer }: QuestionContentProps) => {
  const styles = StyleSheet.create({
    questionContainer: {
      alignItems: 'center'
    },
    instructionText: {
      width: '100%',
      textAlign: 'center',
      marginTop: 15,
      marginBottom: 15,
      color: colors.fluyoWhite
    },
    completeQuestion: {
      marginBottom: 15,
      fontSize: 20,
      color: colors.fluyoWhite,
    },
    missingText: {
      fontWeight: 'bold',
      textDecorationLine: 'underline'
    },
    optionsContainer: {
      flexDirection: 'row',
      marginTop: 15,
      marginBottom: 15,
      alignItems: 'center',
      gap: 8
    },
    questionOptionsContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: 10,
      justifyContent: 'center'
    }
  })
  const [selectedAnswer, setSelectedAnswer] = useState<Answer | null>();
  const tranlations = useSelector((state: IState) => state.app.translations);
  const currentQuestion = useSelector((state: IState) => state.app.currentQuestion);


  const selectAnswerHandler = (answer: Answer) => {
    setSelectedAnswer(answer);
    onSelectAnswer(answer)
  }

  useEffect(() => {
    if (currentQuestion?.state == "UNSOLVED") setSelectedAnswer(null);
  }, [currentQuestion]);
  return (
    <View style={styles.questionContainer}>
      <Text style={styles.instructionText}>Fill in the missing word</Text>
      <Text style={styles.completeQuestion}>
        {currentQuestion?.englishSentence?.split(' ').map((word: string, i: number) => {
          const translatedCorrectAnswer = tranlations?.[currentQuestion?.correctAnswer!];

          return word.includes(translatedCorrectAnswer) ?
            <Text key={word + i}>
              <Text style={styles.missingText}>{translatedCorrectAnswer}</Text>
              {" "}
            </Text>
            : <Text key={word + i}>{word}{" "}</Text>
        })}
        {" "}
      </Text>
      <View style={styles.optionsContainer}>
        {currentQuestion?.incompleteSentence?.split(' ').map((word: string, i: number) => (
          <QuestionSentence key={word+i} word={word} selectedAnswer={selectedAnswer!} />
        ))}
      </View>
      <View style={styles.questionOptionsContainer}>
        {currentQuestion?.missingWord?.options.map((option: string, i: number) => (
          <QuestionOption
            key={option + i}
            option={option}
            index={i}
            onSelected={(selected: string, index: number) => { selectAnswerHandler({ selected, id: currentQuestion.id!, index }) }}
            isSelected={i == selectedAnswer?.index}
            isSubmitted={currentQuestion.state == "SUBMITTED"}
          />
        ))}
      </View>
    </View>
  )
}

export default QuestionContent;
