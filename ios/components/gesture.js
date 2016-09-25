import React, {Component} from 'react';
import {
    View,
    TouchableHighlight,
    Text,
    StyleSheet,
    PanResponder
} from 'react-native'
import {height, width} from "../styles/index.js"


var styles = StyleSheet.create({
    full: {
        height: height,
        width: width,
        alignItems: "center",
        justifyContent: 'center'
    },
    message: {
        textAlign: "center"
    }
});




class GestureTest extends Component{
    static defaultProps = {

    }

    constructor(props){
        super(props);
        this.state = {
            curGesture: '没有任何手势',
        };
    }

    componentWillMount(){
        this._gestureHandles = {
            onStartShouldSetResponder: () => true,
            onMoveShouldSetResponder: () => true,
            onResponderGrant: (evt) => {
                var gesture = 'touch';

                if(this.lastClicked && evt.nativeEvent.timestamp - this.lastClicked < 200){
                    gesture = 'dbtouch';
                }
                this.lastClicked = evt.nativeEvent.timestamp;
                this.setState({
                    bgColor: '#cccccc',
                    curGesture: gesture + this.lastClicked,
                });
            },
            onResponderMove: (evt) => {
                var gesture = '';
                this.curEvent = evt.nativeEvent;

                if(! this.startEvent){
                    this.startEvent = evt.nativeEvent;
                } else{
                    var xDiff = this.curEvent.pageX - this.startEvent.pageX,
                        yDiff = this.curEvent.pageY - this.startEvent.pageY
                    if(yDiff && Math.abs(xDiff / yDiff) > 3){
                        gesture = xDiff > 0 ? 'swipRight' : 'swipLeft';
                    } else if( yDiff && Math.abs(xDiff / yDiff) < 1/3){
                        gesture = yDiff > 0 ? 'swipDown' : 'swipUp';
                    }
                }
                if(gesture){
                    this.setState({
                        bgColor: '#0066ff',
                        curGesture: gesture + this.curEvent.timestamp,
                    });
                }

            }
        }
    }

    render(){
        return (
            <View {...this._gestureHandles} style={[styles.full, {backgroundColor: this.state.bgColor || 'white'}]}>
                    <Text style={styles.message}>{this.state.curGesture}</Text>

            </View>
        )
    }
}



module.exports = {
    GestureTest
}
