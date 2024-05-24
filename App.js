import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import firebase from 'firebase';

import Bottom from './Bottom';
import Login from './screens/login';
import Logout from './screens/logout';

const Stack = createStackNavigator();
const AuthStack = createStackNavigator();

const StackNav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="tab" component={Bottom} />
      <Stack.Screen name="logout" component={Logout} />
    </Stack.Navigator>
  );
};

const AuthNavigator = () => {
  return (
    <AuthStack.Navigator headerMode="none">
      <AuthStack.Screen name="Login" component={Login} />
    </AuthStack.Navigator>
  );
};

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      loading: true,
    };
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({
        user: user,
        loading: false,
      });
    });
  }

  render() {
    const { user, loading } = this.state;

    if (loading) {
      return null; // You can render a loading indicator here
    }

    return (
      <NavigationContainer>
        {user ? <StackNav /> : <AuthNavigator />}
      </NavigationContainer>
    );
  }
}
