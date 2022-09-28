import { legacy_createStore as createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import rootReducer from "./root.reducer";
import persistStore from "redux-persist/es/persistStore";

const middleware = [logger]


export const store = createStore(rootReducer, applyMiddleware(...middleware))
export const persistor = persistStore(store)

