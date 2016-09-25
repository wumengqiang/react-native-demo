
import {
  View,
  TouchableHighlight,
  TouchableOpacity,
  Text,
  ActionSheetIOS
}  from 'react-native'

import React, { Component, PropTypes} from 'react';

import {height, width,demoMenu} from '../styles/index.js'

class ActionStyleSheetDemo extends Component{
    static defaultProps = {
        buttons: ['选项1', '选项2', '选项3', '选项4', 'delete', 'cancel'],
    }


    constructor(props){
        super(props);
        this.state = {

        }
    }

    showNormal = () => {
        ActionSheetIOS.showActionSheetWithOptions({
            options: this.props.buttons,
            cancelButtonIndex: 5 , // 取消按钮在option中排第几个（from 0）
            title: '菜单',
            message: '湖南湘菜湖南湘菜',
            destructiveButtonIndex: 4
        }, (buttonIndex) => {
            switch(buttonIndex){
                case 0:
                    break;
                case 1:
                    break;
                case 2:
                    break;
                case 3:
                    break;
                case 4:
                    break;
                case 5:
                    break;
            }
            console.log(buttonIndex, this.props.buttons[buttonIndex]);
        });
    }

    showShare = () => {
        ActionSheetIOS.showShareActionSheetWithOptions({
            url: 'http://www.taobao.com',
            message: '淘宝链接',
            subject: '阿里巴巴 阿里巴巴招聘啦',
        }, (error) => {
            console.log(error);
        },(buttonIndex) => {
            console.log(buttonIndex, this.props.buttons[buttonIndex]);
        });
    }

    render(){
        return (
            <View style={{height: height}}>
                <View style={demoMenu.buttonContainer}>
                    <TouchableHighlight onPress={this.showNormal} style={demoMenu.button}>
                        <Text style={demoMenu.buttonText}>普通action</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={demoMenu.button} onPress={this.showShare}>
                        <Text style={demoMenu.buttonText}>分享action</Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}

module.exports = {ActionStyleSheetDemo};
