import { StyleSheet, Text, View } from "react-native";
import { colors } from "../constants/globalStyles";

type SelectedOptionProps = {
  selectedAnswer: Answer, 
  isCorrect?: boolean,
}
const SelectedOption = ({ selectedAnswer, isCorrect }: SelectedOptionProps) => {
  const styles = StyleSheet.create({
    missingText: {
      margin: 5,
      color: colors.fluyoWhite
    },
    selectedAnswerContainer: {
      padding: 10,
      backgroundColor: colors.fluyoWhite,
      borderRadius: 12
    },
    selectedAnswerText: {
      color: colors.fluyoBlack,
    }
  })
  return (selectedAnswer ?
    <View style={styles.selectedAnswerContainer}>
      <Text style={styles.selectedAnswerText}>
        {selectedAnswer?.selected}
      </Text>
    </View>
    :
    <Text style={styles.missingText}>_______</Text>
  )
}
export default SelectedOption;
