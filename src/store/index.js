import {createStore, combineReducers, compose} from 'redux';
import cardReducer from '../views/GoalCard/reducer';
import studiesReducer from '../views/Study/views/Studies/reducer';

  const  reducers = {
        card: cardReducer,
        studies: studiesReducer
    },
    reducer = combineReducers(reducers),
    store = createStore(
      reducer,
      compose(
        window.devToolsExtension ? window.devToolsExtension() : f => f
      ));

export default store;
