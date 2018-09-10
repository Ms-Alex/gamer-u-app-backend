import { combineReducers } from 'redux';
import authReducer from './authReducer';
// import recGamesReducer from './recGamesReducer';
import recentsReducer from './recentsReducer';
import ownedReducer from './ownedReducer';
import featuredReducer from './featuredReducer';

export default combineReducers({
    auth: authReducer,
    recentGames: recentsReducer,
    ownedGames: ownedReducer,
    featGames: featuredReducer
});