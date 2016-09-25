/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component, PropTypes} from 'react';
import {
  TextInput,
  MapView,
  ActivityIndicator,
  Image,
  ScrollView,
  ListView,
  Navigator,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
  AppRegistry,
  StatusBar,
  Animated,
  Dimensions, // 用于获取屏幕的宽高
  StyleSheet} from 'react-native';

import immutable from 'immutable';
import {createStore} from 'redux'
import {Provider, connect} from 'react-redux'

import {wx, height, width} from '../styles/index.js';

var testData = getTestData();

class WX extends Component{

  static defaultProps = {
      testData: testData,
      ds : new ListView.DataSource({rowHasChanged: (r1, r2) => immutable.is(r1, r2)}),
  }

  constructor(props){
    super(props);
    this.state = {
       searchPlaceholder: '',
       searchText: '',
       searchResult: [],
       searchTipLeft: new Animated.Value(width/ 2 - 30),
       inputStyle : {},
       contacts: immutable.fromJS([]),
    };
  }

  componentWillMount = () => {
    this.fetchContacts();
  }

  fetchContacts = () => {
    setTimeout(function(){
      this.setState({contacts: immutable.fromJS(this.props.testData.contacts)});
    }.bind(this), 400);
  }

  changeMenu = (menu) => {

  }

  handleClickInput = () => {
      Animated.timing(this.state.searchTipLeft, {
        toValue: 0,
        friction: 7,
      }).start(() => {
          this.setState({
            inputStyle:{
              paddingLeft: 40,
            },
            searchAnimateDone: true,
            searchTipLeft: 0
          });
      });
  }

 renderContacts = (item) => {
   return (
     <View style={wx.contactsItem}>
        <Image source={require('../img/thumbnail.png')} style={wx.contactsThumbnail}></Image>
        <View  style={wx.contactsRight}>
            <View style={[wx.contactsTop]}>
              <Text style={wx.contactsName}>{item.get('name')}</Text>
              <Text style={wx.contactsTime}>{item.get('lastModifiedTime')}</Text>
            </View>
            <Text style={wx.contactsMsg}  ellipsizeMode={'tail'} numberOfLines={1}>{item.get('lastMsg')}</Text>
        </View>
     </View>
   );
 }



  render() {
    return (
      <View style={{height: height}}>
        <View style={wx.header}>
          <Text style={wx.whiteText}>消息</Text>
          <Image source={require('../img/add.png')} style={{width: 20,height: 20, position: 'absolute', right: 20, top: 30}}></Image>
        </View>
        <TouchableOpacity onPress={this.handleClickInput} style={wx.inputWrapper}>
          <TextInput style={[wx.searchInput, this.state.inputStyle]} onChangeText={(searchText) => this.setState({searchText})}
              value={this.state.searchText} placeholder={this.state.searchPlaceholder} returnKeyType="search"></TextInput>
          <Animated.View style={[wx.searchTip, {transform: [{translateX: this.state.searchTipLeft}]}, {width: this.state.searchAnimateDone ? 20 : width}]}>
              <Image source={require('../img/search.png')} style={wx.searchIcon}></Image>
              {!this.state.searchAnimateDone && (<Text style={wx.tipText}>搜索</Text>)}
          </Animated.View>
        </TouchableOpacity>
        <View style={wx.loginTip}>
          <Image source={require('../img/computer.png')} style={wx.computer} ></Image>
          <Text style={{color: '#5f6973', lineHeight: 14,fontSize: 14}}>Mac 企业微信已登录</Text>
        </View>
        <ListView initialListSize={8} pageSize={8} style={[wx.contacts]} enableEmptySections={true}  dataSource={this.props.ds.cloneWithRows(this.state.contacts.toArray())} renderRow={this.renderContacts}/>
        <View style={wx.footer}>
            <View style={wx.footerItem}>
              <View style={{'width': 50, alignItems: 'center'}}>
                <Image source={require('../img/message.png')} style={wx.footerPic}></Image>
                <Text style={wx.footerText}>消息</Text>
              </View>
            </View>
            <View style={wx.footerItem}>
              <View  style={{'width': 50, alignItems: 'center'}}>
                <Image source={require('../img/message.png')} style={wx.footerPic}></Image>
                <Text style={wx.footerText}>通讯录</Text>
              </View>
            </View>
            <View style={wx.footerItem}>
              <View  style={{'width': 50, alignItems: 'center'}}>
                <Image source={require('../img/message.png')} style={wx.footerPic}></Image>
                <Text style={wx.footerText}>我</Text>
              </View>
            </View>
        </View>
      </View>
    );
  }
}


function getTestData(){
  return {
    contacts: [
      {
        id: 1,
        name: '郭鹏',
        thumbnail: '../img/thumbnail.png',
        lastMsg: 'OK,小轩在不在，在在在在在，我是娇妹，小轩在不在，在在在在在，我是娇妹，小轩在不在，在在在在在，我是娇妹',
        lastModifiedTime: '10:30',
      },
      {
        id: 2,
        name: '郭鹏',
        thumbnail: '../img/thumbnail.png',
        lastMsg: 'OK,小轩在不在，在在在在在，我是娇妹，小轩在不在，在在在在在，我是娇妹，小轩在不在，在在在在在，我是娇妹',
        lastModifiedTime: '10:30',
      },
      {
        id: 3,
        name: '郭鹏',
        thumbnail: '../img/thumbnail.png',
        lastMsg: 'OK,小轩在不在，在在在在在，我是娇妹，小轩在不在，在在在在在，我是娇妹，小轩在不在，在在在在在，我是娇妹',
        lastModifiedTime: '10:30',
      },
      {
        id: 4,
        name: '郭鹏',
        thumbnail: '../img/thumbnail.png',
        lastMsg: 'OK,小轩在不在，在在在在在，我是娇妹，小轩在不在，在在在在在，我是娇妹，小轩在不在，在在在在在，我是娇妹',
        lastModifiedTime: '10:30',
      },
      {
        id: 5,
        name: '郭鹏',
        thumbnail: '../img/thumbnail.png',
        lastMsg: 'OK,小轩在不在，在在在在在，我是娇妹，小轩在不在，在在在在在，我是娇妹，小轩在不在，在在在在在，我是娇妹',
        lastModifiedTime: '10:30',
      },
      {
        id: 6,
        name: '郭鹏',
        thumbnail: '../img/thumbnail.png',
        lastMsg: 'OK,小轩在不在，在在在在在，我是娇妹，小轩在不在，在在在在在，我是娇妹，小轩在不在，在在在在在，我是娇妹',
        lastModifiedTime: '10:30',
      },
      {
        id: 7,
        name: '郭鹏',
        thumbnail: '../img/thumbnail.png',
        lastMsg: 'OK,小轩在不在，在在在在在，我是娇妹，小轩在不在，在在在在在，我是娇妹，小轩在不在，在在在在在，我是娇妹',
        lastModifiedTime: '10:30',
      },
      {
        id: 8,
        name: '郭鹏',
        thumbnail: '../img/thumbnail.png',
        lastMsg: 'OK,小轩在不在，在在在在在，我是娇妹，小轩在不在，在在在在在，我是娇妹，小轩在不在，在在在在在，我是娇妹',
        lastModifiedTime: '10:30',
      },
      {
        id: 9,
        name: '郭鹏',
        thumbnail: '../img/thumbnail.png',
        lastMsg: 'OK,小轩在不在，在在在在在，我是娇妹，小轩在不在，在在在在在，我是娇妹，小轩在不在，在在在在在，我是娇妹',
        lastModifiedTime: '10:30',
      },
      {
        id: 10,
        name: '郭鹏',
        thumbnail: '../img/thumbnail.png',
        lastMsg: 'OK,小轩在不在，在在在在在，我是娇妹，小轩在不在，在在在在在，我是娇妹，小轩在不在，在在在在在，我是娇妹',
        lastModifiedTime: '10:30',
      },
      {
        id: 11,
        name: '郭鹏',
        thumbnail: '../img/thumbnail.png',
        lastMsg: 'OK,小轩在不在，在在在在在，我是娇妹，小轩在不在，在在在在在，我是娇妹，小轩在不在，在在在在在，我是娇妹',
        lastModifiedTime: '10:30',
      },
      {
        id: 12,
        name: '郭鹏',
        thumbnail: '../img/thumbnail.png',
        lastMsg: 'OK,小轩在不在，在在在在在，我是娇妹，小轩在不在，在在在在在，我是娇妹，小轩在不在，在在在在在，我是娇妹',
        lastModifiedTime: '10:30',
      },
    ]
  }
}


module.exports = {WX};
