import React, {Component} from 'react';
import {
    View,
    Text
} from 'react-native';

import {demoMenu, height, width} from '../styles/index.js';


class ImageView extends Component{
    static defaultProps={

    }

    constructor(props){
        super(props);
        this.state={
            imageList: [
                'http://design.ubuntu.com/wp-content/uploads/ubuntu-logo32.png',
                'http://logok.org/wp-content/uploads/2014/04/Apple-Logo-black.png',
                'http://www.logodesignlove.com/images/evolution/7up-logo-2014.jpg',
                'https://s.w.org/about/images/logos/wordpress-logo-notext-rgb.png',
                'http://img.wallpaperfolder.com/f/58B3D0BBE878/minnesota-timberwolves-logo.jpg',
                'https://image.freepik.com/free-icon/steam-logo-games-website_318-40350.png',
                'http://www.logodesignlove.com/images/negative/wwf-logo-design.jpg'
            ]
        }
    }

    render(){
        return (
            <View>
                <Text> Image Viewer</Text>
            </View>
        )
    }
}

module.exports={
    ImageView
};
