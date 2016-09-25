import {StyleSheet, Dimensions} from 'react-native';
var color = {
  gray: '#f6f6f6',
  blue: '#5176ab',
  border: '#dbdbdb'
};

var {height, width} = Dimensions.get('window');  // 获取屏幕的宽度和高度

const index = StyleSheet.create({

});

const demoMenu = StyleSheet.create({
  buttonContainer: {
     marginTop: .2 * height,
     marginHorizontal: .3 * width,
     alignItems: 'center',
  },
  button: {
    backgroundColor: '#000',
    borderRadius: 4,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 200,
    height: 40,
    marginBottom: 20
  },
  buttonText: {
    color: 'white',
    fontSize: 14,
    lineHeight: 14,
  }
});

const wx = StyleSheet.create({
  header: {
    height: 60,
    alignSelf:'stretch',
    justifyContent: 'center',
    backgroundColor: color.blue,
    position: 'relative',
  },
  whiteText:{
    color: '#fff',
    alignSelf: 'stretch',
    textAlign: 'center',
    marginTop: 20,
    fontWeight: 'bold',
    fontSize: 18,
  },
  inputWrapper: {
    alignSelf: 'stretch',
    position: 'relative',
    height: 40,
    justifyContent: 'center',
    backgroundColor: color.gray,
    alignItems: 'stretch',
    borderBottomWidth: 1,
    borderColor: '#ddd'

  },
  searchInput: {
    height: 28,
    borderRadius: 3,
    borderColor: color.border,
    borderWidth: 1,
    margin: 6,
    paddingLeft: 30,
    paddingRight: 10,
    fontSize: 14
  },
  searchTip: {
    position: 'absolute',
    top: 6,
    height: 28,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    left: 15
  //  pointerEvents: 'box-only'
  },
  searchIcon: {
    height: 15,
    width: 15,
    resizeMode: 'contain',
    marginRight: 3
  },
 tipText: {
   fontSize: 14,
   color: '#838383',
   height: 14,
   lineHeight: 14,
 },
 loginTip: {
   height: 40,
   flexDirection: 'row',
   justifyContent: 'flex-start',
   alignItems: 'center',
   paddingHorizontal: 24,
   backgroundColor: '#f1f2f6'
 },
 computer: {
    width: 16,
    height: 16,
    marginRight: 20,
    resizeMode: 'contain',
 },
 contacts: {
   flex: 1,
 },
 contactsItem: {
    height: 80,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginLeft: 10,
    paddingRight: 10,
    borderBottomWidth: 1,
    borderColor: '#f1f2f6'
 },
 contactsThumbnail: {
   height: 60,
   width: 60,
   resizeMode: 'contain',
   marginRight: 10
 },
 contactsRight: {
   flex: 1,
   height: 60,
 },
 contactsTop: {
   height: 36,
   position: 'relative',
   flex:1,
   flexDirection: 'row',
   alignItems: 'center',
 },
 contactsName: {
   color: '#333',
   fontSize: 15,
   fontWeight: '700'
 },
 contactsTime: {
   position: 'absolute',
   top: 12,
   right: 0,
   fontSize: 10,
   color: '#bfbfbf',
 },
 contactsMsg: {
    fontSize: 12,
    color: '#999',
    height: 24

 },
 border: {
   borderRadius: 3,
   borderColor: 'red',
   borderWidth: 1,
 },
 footer: {
   height: 60,
   flexDirection: 'row',
   backgroundColor: '#f1f2f6',
   borderTopWidth: 1,
   borderColor: '#ccc'
 },
 footerItem: {
   flex: 1,
   width: 40,
   justifyContent: 'center',
   alignItems: 'center'
 },
 footerPic: {
   height: 25,
   width: 25,
   marginBottom: 3
 },
 footerText: {
   fontSize: 12,
   color: '#999'
 }
});

module.exports = {
  index,
  wx,
  demoMenu,
  height,
  width
};
