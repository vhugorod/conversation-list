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
        {key:'7', img:'https://www.b7web.com.br/avatar2.png', nome:'Tibério Silva', msg:'Bro, whats up?'},
        {key:'8', img:'https://www.b7web.com.br/avatar3.png', nome:'Solange Gomes', msg:'Hello, whould you like to take some coffee?'},
        {key:'9', img:'https://www.b7web.com.br/avatar1.png', nome:'Leonardo Lopes', msg:'Hey, how old are you?'},
        {key:'10', img:'https://www.b7web.com.br/avatar3.png', nome:'Tamiris Camila', msg:'Hello, where are you from?'},
        {key:'11', img:'https://www.b7web.com.br/avatar1.png', nome:'Lucas Campos', msg:'Hello, what is nickname name?'}, 
        {key:'12', img:'https://www.b7web.com.br/avatar3.png', nome:'Solaine Santos', msg:'Hey, how are you doing?'},
        {key:'13', img:'https://www.b7web.com.br/avatar2.png', nome:'Vitor Andrade', msg:'Bro, will you come here today?'},
        {key:'14', img:'https://www.b7web.com.br/avatar3.png', nome:'Aline Costa', msg:'Hello, when will you visit me?'},
        {key:'15', img:'https://www.b7web.com.br/avatar1.png', nome:'Pedro Henrique', msg:'Hi, what is your name?'},
        {key:'16', img:'https://www.b7web.com.br/avatar2.png', nome:'Tibério Silva', msg:'Bro, whats up?'},
        {key:'17', img:'https://www.b7web.com.br/avatar3.png', nome:'Solange Gomes', msg:'Hello, whould you like to take some coffee?'},
        {key:'18', img:'https://www.b7web.com.br/avatar1.png', nome:'Leonardo Lopes', msg:'Hey, how old are you?'},
        {key:'19', img:'https://www.b7web.com.br/avatar3.png', nome:'Tamiris Camila', msg:'Hello, where are you from?'},
        
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