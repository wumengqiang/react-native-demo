import { combineReducers, createStore } from 'redux'

import {actionType} from './action.js'

// reducer
function nav(state = {index: 0, title: '菜单选择'}, action){
  switch (action.type) {
      case 'CHANGE_ROUTE':  // 路由改变
        return  Object.assign({}, state, action.route);
        break;
  }
}


module.exports = {
  nav,
}
