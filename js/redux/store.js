import { createStore, applyMiddleware, compose } from "redux";
import reducer from "./reducer";
import thunk from "redux-thunk";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { getPersistConfig } from "redux-deep-persist";

const persistConfig = getPersistConfig({
  key: "root",
  storage,
  blacklist: ["movies.movies"],
  rootReducer: reducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

let store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(thunk))
);
let persistor = persistStore(store);
export { store, persistor };
