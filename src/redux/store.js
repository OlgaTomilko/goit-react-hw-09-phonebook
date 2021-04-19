import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from "redux-logger";
// import { combineReducers } from "redux";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import contactsReducer from "./contacts/contacts-reducer";
import { authReducer } from "./auth/index";

// const contactsPersistConfige = {
//   key: "contacts",
//   storage,
//   blacklist: ["filter"],
// };

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];

// const rootReducer = combineReducers({
//   contacts: contactsReducer,
// });

// const persistedReducer = persistReducer(contactsPersistConfige, rootReducer);

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    contacts: contactsReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === "development",
});

const persistor = persistStore(store);

export default { store, persistor };
