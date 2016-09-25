import React,{Component} from 'react';
import {View,ListView, Text} from 'react-native';

class PageList extends Component{
    getDefaultProps(){
        return {
            title:  'listPages',
        }
    }
    constructor(props){
        super(props);
        this.state = {

        listIndex: 6,
        list: [
            {
                name: 1,
                id:  1
            },
            {
                name: 2,
                id:  2
            },
            {
                name: 3,
                id:  3
            },
            {
                name: 4,
                id:  4
            },
            {
                name: 5,
                id:  5
            },
            {
                name: 6,
                id: 6
            },
        ]
        }
    }

    render(){
        return (
            <ListView style={{flex: 1}} dataSource={this.state.list} renderRow={(row) => {<Text>{row.name}</Text>}}>
            </ListView>
        );
    }
}

module.export = {
    PageList:  PageList
}
