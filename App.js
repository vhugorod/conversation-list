import React, { Component } from 'react';
import { View, Platform, StyleSheet, FlatList } from 'react-native';
import ListItem from './src/ListItem';

export default class ConversationList extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {key:'1', img:'https://www.b7web.com.br/avatar1.png', nome:'Vitor Rodrigues', msg:'Hello, how are you?'},
        {key:'2', img:'https://www.b7web.com.br/avatar2.png', nome:'Carlos Ribeiro', msg:'What is going on?'},
        {key:'3', img:'https://www.b7web.com.br/avatar3.png', nome:'Solaine Santos', msg:'Hey, how are you doing?'},
        {key:'4', img:'https://www.b7web.com.br/avatar2.png', nome:'Vitor Andrade', msg:'Bro, will you come here today?'},
        {key:'5', img:'https://www.b7web.com.br/avatar3.png', nome:'Aline Costa', msg:'Hello, when will you visit me?'},
        {key:'6', img:'https://www.b7web.com.br/avatar1.png', nome:'Pedro Henrique', msg:'Hi, what is your name?'},
      ]
    };
  }
  
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.list}
          renderItem={ ({ item }) => <ListItem data={item} />} 
        />
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