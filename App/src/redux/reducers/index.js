import { combineReducers } from 'redux';
import authReducer from './authReducer';

import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

// to persiste another reducer
const rootPersistConfig = {
  key: 'root',
  storage: storage,
  blacklist: ['auth']
};

const authPersistConfig = {
  key: 'auth',
  storage: storage,
  blacklist: ['errorMessage', 'isFetching']
};

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer)
});

export default persistReducer(rootPersistConfig, rootReducer);
