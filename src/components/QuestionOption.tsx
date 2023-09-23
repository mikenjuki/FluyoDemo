import { Pressable, StyleSheet, Text, View } from "react-native";
import { colors } from "../constants/globalStyles";

type QuestionOptionProps = { 
  option: string,
  index: number,
  isSelected: boolean,
  isSubmitted: boolean,
  onSelected: (option: string, index: number) => void,
}

// Options the user has to select
const QuestionOption = ({ 
  option,
  index,
  isSelected,
  isSubmitted,
  onSelected,
}: QuestionOptionProps) => {
  const styles = StyleSheet.create({
    optionsContainer: {
      width: '40%',
    },
    optionButton: {
      padding: 10,
      borderRadius: 12,
      alignSelf: `${index % 2 == 0 ? "flex-end" : "flex-start"}`,
      backgroundColor: isSelected ? colors.fluyoPaleDarkGreen : colors.fluyoWhite,
      opacity: isSubmitted ? 0.5 : 1,
    },
    optionButtonText: {
      color: isSelected ? colors.fluyoPaleDarkGreen : colors.fluyoBlack,
      opacity: isSubmitted ? 0.5 : 1,
    }
  })
  return (
    <View style={styles.optionsContainer} >
      <Pressable 
      style={styles.optionButton}
      onPress={() => { onSelected(option, index) }}
      >
        <Text style={styles.optionButtonText}>{option}</Text>
      </Pressable>
    </View>
  )
}

export default QuestionOption;
