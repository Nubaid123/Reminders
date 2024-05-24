import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Button } from 'react-native';
import firebase from 'firebase';

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
  }

  signIn = async (email, password) => {
    if (email && password) {
      firebase.auth().signInWithEmailAndPassword(email, password)
        .then(() => {
          this.props.navigation.navigate('tab');
        })
        .catch(error => {
          alert(error.message);
        });
    } else {
      alert('Unable to Login. Please make sure all fields are filled');
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Login Screen</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => this.setState({ email: text })}
          placeholder="Email"
        />
        <TextInput
          style={styles.input}
          onChangeText={text => this.setState({ password: text })}
          placeholder="Password"
          secureTextEntry
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.signIn(this.state.email, this.state.password)}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    color: '#eb4034',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#eb4034',
    borderRadius: 20,
    height: 40,
    width: 250,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  button: {
    borderWidth: 1,
    borderColor: '#eb4034',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#eb4034',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
