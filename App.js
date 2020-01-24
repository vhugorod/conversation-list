import React, { Component } from 'react';
import { View, Platform, StyleSheet, Text } from 'react-native';

export default class ConversationList extends Component {
  
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello worlds</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:(Platform.OS=='ios') ? 20 : 0
  }
});