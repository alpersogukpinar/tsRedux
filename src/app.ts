import * as reducers from './reducers/reducers';
import regionActionsService from './actions/regionActionCreators';
import permissionActionsService from './actions/permissionActionCreators';
import promiseMiddleware from './redux/promiseMiddleware';
import loggingMiddleware from './redux/loggingMiddleware';
import regionLister from './components/regionLister';
import loader from './components/loader';
import regionFilter from './components/regionFilter';
import redux = require('redux');
import ngRedux = require('ng-redux');


angular.module('app', [ngRedux.name])
  .factory('reduxStore', () => {
    let reducer = redux.combineReducers(reducers);
    return redux.applyMiddleware(promiseMiddleware, loggingMiddleware)(redux.createStore)(reducer);  
  })  
   .factory('regionActions', regionActionsService)
   .factory('permissionActions', permissionActionsService)
   .directive('tsrLoader', loader)
   .directive('tsrRegionLister', regionLister)
   .directive('tsrRegionFilter', regionFilter);
   
 