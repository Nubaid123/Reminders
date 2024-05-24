import React, { Component } from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import firebase from 'firebase';
import db from '../config';

export default class Create extends Component {
  constructor() {
    super();
    this.state = {
      event: '',
      date: '',
      time: '',
    };
  }

  async saveData() {
    if (this.state.event && this.state.date && this.state.time) {
      alert('The reminder has been saved');
      let data = {
        event: this.state.event,
        date: this.state.date,
        time: this.state.time,
      };
      await firebase
        .database()
        .ref('/reminders/' + Math.random().toString(36).slice(2))
        .set(data)
        .then(function (snapshot) {});
      this.props.navigation.navigate('Reminders');
    } else {
      alert('All fields are required');
    }
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Create a New Reminder</Text>
        <TextInput
          style={styles.input}
          onChangeText={(t) => this.setState({ event: t })}
          placeholder="Name of the Reminder"
          placeholderTextColor="#eb4034"
        />
        <TextInput
          style={styles.input}
          onChangeText={(t) => this.setState({ date: t })}
          placeholder="Date"
          placeholderTextColor="#eb4034"
        />
        <TextInput
          style={styles.input}
          onChangeText={(t) => this.setState({ time: t })}
          placeholder="Time"
          placeholderTextColor="#eb4034"
        />

        <TouchableOpacity style={styles.button} onPress={() => this.saveData()}>
          <Text style={styles.buttonText}>Save Reminder</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eb4034',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
  input: {
    borderColor: 'white',
    borderWidth: 1,
    height: 30,
    width: 200,
    alignSelf: 'center',
    marginTop: 10,
    textAlign: 'center',
    backgroundColor: 'white',
    borderRadius: 15,
    paddingLeft: 10,
    color: '#333333',
  },
  button: {
    backgroundColor: 'white',
    width: 260,
    height: 50,
    alignSelf: 'center',
    marginTop: 30,
    justifyContent: 'center',
    borderRadius: 25,
    elevation: 5,
  },
  buttonText: {
    color: '#eb4034',
    fontSize: 20,
    alignSelf: 'center',
  },
});
