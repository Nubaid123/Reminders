import React from 'react';
import { Text, View, SafeAreaView, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import firebase from 'firebase';
import ReminderCard from './ReminderCard';

export default class Reminder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reminders: [],
    };
  }

  fetchReminders = () => {
    firebase
      .database()
      .ref('/reminders/')
      .on(
        'value',
        (snapshot) => {
          let reminders = [];
          if (snapshot.val()) {
            Object.keys(snapshot.val()).forEach(function (key) {
              reminders.push({
                key: key,
                value: snapshot.val()[key],
              });
            });
          }
          this.setState({
            reminders: reminders,
          });
        },
        function (e) {
          alert('Not able to read');
        }
      );
  };

  componentDidMount() {
    this.fetchReminders();
  }

  keyExtractor = (item, index) => index.toString();

  renderReminder = ({ item: reminder }) => {
    return <ReminderCard reminder={reminder} />;
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Image
            source={require('../assets/logo.png')}
            style={styles.logo}
          />
          <Text style={styles.title}>Reminders App</Text>
          <TouchableOpacity 
            onPress={() => {
              this.props.navigation.navigate("logout");
            }}
          >
            <Text style={styles.logoutText}>Logout</Text>
          </TouchableOpacity>
        </View>
        {!this.state.reminders[0] ? (
          <View style={styles.noRemindersContainer}>
            <Text style={styles.noRemindersText}>No Reminders Available</Text>
          </View>
        ) : (
          <FlatList
            keyExtractor={this.keyExtractor}
            data={this.state.reminders}
            renderItem={this.renderReminder}
          />
        )}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eb4034',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
    backgroundColor: '#FFFFFF',
  },
  logo: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  title: {
    fontFamily: 'Georgia', // Changed the font family to Georgia
    fontSize: 28,
    fontWeight: 'bold',
    color: '#eb4034', // Changed the color to the specified color
  },
  logoutText: {
    fontSize: 16,
    color: '#eb4034',
  },
  noRemindersContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  noRemindersText: {
    fontSize: 18,
    color: '#FFFFFF',
  },
});
