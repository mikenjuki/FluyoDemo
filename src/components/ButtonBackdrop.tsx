import { Pressable, StyleSheet, Text, View } from "react-native";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { colors } from "../constants/globalStyles";

type ButtonBackdropProps = {
  onClick: () => void
}
const ButtonBackdrop = ({ onClick }: ButtonBackdropProps) => {
  const [variableStyles, setVariableStyles] = useState({
    buttonBackgroundColor: colors.fluyoVeryDarkGreen,
    buttonTextColor: colors.fluyoWhite,
    buttonText: 'continue',
    backdropBackgroundColor: 'transparent',
    backdropHeaderText: '',
  })
  const currentQuestion = useSelector((state: IState) => state.app.currentQuestion) as Question;

  const styles = StyleSheet.create({
    backdropContainer: {
      position: 'absolute',
      bottom: 0,
      width: '100%',
      height: 150,
      backgroundColor: variableStyles.backdropBackgroundColor,
      borderTopRightRadius: 15,
      borderTopLeftRadius: 15,
      padding: 20,
    },
    backdropHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 15,
    },
    backdropHeaderText: {
      color: colors.fluyoWhite
    },
    backdropButton: {
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,
      backgroundColor: variableStyles.buttonBackgroundColor,
    },
    backdropButtonDropshadow: {
      shadowOffset: {
        width: 0,
        height: 5,
      },
      shadowOpacity: 0.3,
      shadowRadius: 2,
    },
    backdropButtonText: {
      fontWeight: 'bold',
      fontSize: 16,
      textTransform: 'uppercase',
      color: variableStyles.buttonTextColor
    }
  })

  useEffect(() => {
    switch (currentQuestion.state) {
      case "SUBMITTED": {
        setVariableStyles({
          ...variableStyles,
          buttonBackgroundColor: colors.fluyoBrightGreen,
          buttonTextColor: colors.fluyoWhite,
          buttonText: 'check answer',
          backdropBackgroundColor: 'transparent',
          backdropHeaderText: '',
        })
        break;
      }
      case "SOLVED": {
        setVariableStyles({
          ...variableStyles,
          buttonBackgroundColor: colors.fluyoWhite,
          buttonTextColor: currentQuestion.isCorrect ? colors.fluyoBrightGreen : colors.fluyoRed,
          buttonText: 'continue',
          backdropBackgroundColor: currentQuestion.isCorrect ? colors.fluyoBrightGreen : colors.fluyoRed,
          backdropHeaderText: currentQuestion.isCorrect ? 'Great Job!' : `Answer: ${currentQuestion.correctAnswer}`,
        });
        break;
      }
      default: {
        setVariableStyles({
          buttonBackgroundColor: colors.fluyoPaleDarkGreen,
          buttonTextColor: colors.fluyoWhite,
          buttonText: 'continue',
          backdropBackgroundColor: 'transparent',
          backdropHeaderText: '',
        });
        break;
      }
    }
  }, [currentQuestion.state]);

  return (
    <View style={styles.backdropContainer}>
      <View style={styles.backdropHeader}>
        <Text style={styles.backdropHeaderText}>{variableStyles.backdropHeaderText}</Text>
        <Text style={styles.backdropHeaderText}>{variableStyles.backdropHeaderText && 'flag'}</Text>
      </View>
      <Pressable
        style={[styles.backdropButton, currentQuestion.state !== "UNSOLVED" && styles.backdropButtonDropshadow]}
        onPress={onClick}
      >
        <Text style={styles.backdropButtonText}>
          { currentQuestion.state === "SUBMITTED" ? 'Check Answer' :'Continue'}
        </Text>
      </Pressable>
    </View>
  )
}

export default ButtonBackdrop;
