import { StyleSheet, Text, View } from "react-native";
import { NavigationProp, ParamListBase } from '@react-navigation/native'

type TitleBarProps = { 
  title: string,
  navigation?: NavigationProp<ParamListBase>
}
const TitleBar = ({ title, navigation }: TitleBarProps) => {
  const styles = StyleSheet.create({
    titleBarContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      height: 50
    },
    titleBarText: {
      fontSize: 20,
    }
  })
  return (
    <View style={styles.titleBarContainer}>
      <Text style={styles.titleBarText}>{title || ""}</Text>
    </View>
  )
}
export default TitleBar;
