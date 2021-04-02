import { createStore } from 'redux';
import thunk from "redux-thunk";
import { applyMiddleware, compose } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";
import axios from "axios";
import rootReducer from './rootReducer';
import { composeWithDevTools } from "redux-devtools-extension";


const persistConfig = {
    key: 'root',
    storage
};

const persistanceReducer = persistReducer(persistConfig, rootReducer);

const store = createStore (
    persistanceReducer,
    compose(
        composeWithDevTools(applyMiddleware(thunk))
    )
);

const persistor = persistStore(store);

export {persistor, store};