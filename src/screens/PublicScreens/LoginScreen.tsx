import React from 'react';
import {
  Text, View, SafeAreaView, StyleSheet, Pressable,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { login } from '../../actions/AuthActions';
import { colors } from '../../constants/globalStyles';

const LoginScreen = () => {
  const dispatch = useDispatch();
  const styles = StyleSheet.create({
    loginContainer: {
      backgroundColor: colors.fluyoVeryDarkGreen,
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center'
    },
    loginButton: {
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,
      backgroundColor: colors.fluyoBrightGreen,
      width: '70%'
    },
    loginTitle: {
      marginBottom: 20,
      color: colors.fluyoWhite,
      fontSize: 20,
      fontWeight: '800'
    }
  })

  return (
    <SafeAreaView>
      <View style={styles.loginContainer}>
        <Text style={styles.loginTitle}>Fluyo App</Text>
        <Pressable
          style={styles.loginButton}
          onPress={() => { dispatch(login()) }}
        >
          <Text>Log In</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};
export default LoginScreen;
