/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      lastMonth: 0,
      lastWeek: 0
    }
  }

  async laneAlertsInfo() {
    try {
      let response = await fetch('https://my-json-server.typicode.com/pamkenyon/demo/db');
      let responseJson = await response.json();
      this.setState({
        total: responseJson['totalLaneAlerts']['count'],
        lastMonth: responseJson['laneAlertsLastMonth']['count'],
        lastWeek: responseJson['laneAlertsLastWeek']['count']
      })
    } catch (err) {
      console.log(err);
    }

  }
  render() {
    return (
      <View style={styles.container}>
      <Text>Lane Alerts Totals POC</Text>
      <Text> </Text>
        <TouchableOpacity style={styles.button} onPress={() => { this.laneAlertsInfo() }}>
          <Text>Get the Numbers</Text>
        </TouchableOpacity>
        <Text>Current Total: {this.state.total}</Text>
        <Text>Last Month: {this.state.lastMonth}</Text>
        <Text>Last Week: {this.state.lastWeek}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#859a9b',
    borderRadius: 20,
    padding: 10,
    marginBottom: 20,
    shadowColor: '#303838',
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    shadowOpacity: 0.35,
  },
});