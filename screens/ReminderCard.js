import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import firebase from 'firebase';

export default class ReminderCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reminder_id: this.props.reminder.key,
      reminder_data: this.props.reminder.value,
    };
  }

  render() {
    let reminder = this.state.reminder_data;
    return (
      <View style={styles.card}>
        <Image
          source={require('../assets/logo.png')}
          style={styles.image}
        />
        <View style={styles.textContainer}>
          <Text style={styles.eventText}>{reminder.event}</Text>
          <View style={styles.dateTimeContainer}>
            <Text style={styles.dateText}>{reminder.date}</Text>
            <Text style={styles.timeText}>{reminder.time}</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginBottom: 10,
    elevation: 3,
    borderWidth: 1,
    borderColor: '#eb4034'
  },
  image: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  eventText: {
    color: '#eb4034',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  dateTimeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dateText: {
    color: '#eb4034',
    fontSize: 14,
    marginRight: 10,
  },
  timeText: {
    color: '#eb4034',
    fontSize: 14,
  },
});
