import { View, StyleSheet } from "react-native";
import { colors } from "../constants/globalStyles";

type LayoutProps = {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <View
      style={styles.container}
    >
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.fluyoVeryDarkGreen,
    height: '100%'
  }
})

export default Layout;
