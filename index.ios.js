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

import {PageList} from './pages/listPage.js';
import {demoMenu, height, width} from './ios/styles/index.js';
import {WX} from './ios/components/wx.js'
import {nav} from './ios/scripts/reducer.js'
import {ActionStyleSheetDemo} from './ios/components/actionSheetIos.js'
import {mapDispatchToProps} from './ios/scripts/action.js'
import {ImageView} from './ios/components/imageView.js'
import {GestureTest} from  './ios/components/gesture.js'

let store = createStore(nav);

let AwesomeProject = () => {
    return (
        <Provider store={store}>
            <NavigatorMenu />
       </Provider>
     );
}

class NavigatorMenu extends Component {
  renderScene = (route, navigator) => {
    switch(route.index){
      case 0:
          return (<SubDemoSelect navigator={navigator}/>);
        break;
      case 1:
          return <WX />
        break;ß
        case 2:
            return (<ActionStyleSheetDemo />);
            break;
        case 3:
            return (<ImageView />);
            break;
        case 4:
            return (<GestureTest />);
            break;
    }
  }

  componentWillReceiveProps(nextProps){
    console.log(nextProps, this.props);
    if(nextProps.index !== this.props.index){
      navigator
    }
  }

  render(){
    return (
      <Navigator
          initialRoute={{ title: '菜单选择', index: 0 }}
          renderScene={this.renderScene}
          configureScene={(route, routeStack) =>
              Navigator.SceneConfigs.FloatFromBottom}
       />
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  console.log(state);
  return state || {};
}

NavigatorMenu = connect(mapStateToProps)(NavigatorMenu);

let SubDemoSelect = ({dispatch, changeRoute, navigator}) => {
    // StatusBar 用于控制状态栏 barStyle表示样式  hidden表示是否隐藏状态栏
    console.log(navigator);
    return (
      <View>
         <StatusBar barStyle={'default'} hidden={false}/>
         <View style={demoMenu.buttonContainer}>
            <TouchableHighlight style={demoMenu.button} onPress={() => {navigator.replace({title: '企业微信模仿', index: 1});}}>
              <Text style={demoMenu.buttonText}>模仿企业微信</Text>
            </TouchableHighlight>
            <TouchableHighlight style={demoMenu.button} onPress={() => {navigator.replace({title: 'actionsheet', index: 2});}}>
              <Text style={demoMenu.buttonText}>action sheet</Text>
            </TouchableHighlight>
            <TouchableHighlight style={demoMenu.button} onPress={() => {navigator.replace({title: 'actionsheet', index: 3})}}>
                <Text style={demoMenu.buttonText}>Image Viewer</Text>
            </TouchableHighlight>
            <TouchableHighlight style={demoMenu.button} onPress={() => {navigator.replace({title: 'actionsheet', index: 4})}}>
                <Text style={demoMenu.buttonText}>手势</Text>
            </TouchableHighlight>
        </View>
      </View>
    );
}

SubDemoSelect =  connect(undefined, mapDispatchToProps)(SubDemoSelect);


//AppRegistry.registerComponent('SimpleNavigationApp', () => SimpleNavigationApp);
AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
