import { StatusBar } from 'expo-status-bar';
import { connect } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import PublicScreens from './screens/PublicScreens';
import PrivateScreens from './screens/PrivateScreens';

const Main = ({ auth }: { auth: IAuthState }) => {
  return (
      <NavigationContainer>
        <StatusBar style="auto" />
        {auth.token ? <PrivateScreens /> : <PublicScreens />}
      </NavigationContainer>
  );
}

const mapStateToProps = (state: IState) => {
  const { auth } = state;
  return { auth };
};

export default connect(mapStateToProps, null)(Main);