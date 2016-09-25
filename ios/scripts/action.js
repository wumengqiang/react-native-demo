

const actionType = {
  'changeRoute': 'CHANGE_ROUTE',
}

const action = {
  changeRoute: function(menu){
    return {
      type: actionType.changeRoute,
      route: menu
    }
  }
}

const mapDispatchToProps= (dispatch, ownProps) => {
  return {
     changeRoute: (menu) => {
       dispatch(action.changeRoute(menu));

     }
  }
}

module.exports = {
  action,
  actionType,
  mapDispatchToProps
};
