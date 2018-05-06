import {createStore, combineReducers, compose} from 'redux';
import cardReducer from '../views/GoalCard/reducer';

  const  reducers = {
        card: cardReducer
    },
    reducer = combineReducers(reducers),
    store = createStore(
      reducer,
      compose(
        window.devToolsExtension ? window.devToolsExtension() : f => f
      ));

export default store;
