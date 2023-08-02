import {
  persistReducer,
  REHYDRATE,
  REGISTER,
  FLUSH,
  PAUSE,
  PURGE,
  PERSIST,
} from "redux-persist";
import rootReducer from "../Global/globalState";
import storage from "redux-persist/lib/storage";
import { configureStore } from "@reduxjs/toolkit";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const Store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [REHYDRATE, REGISTER, FLUSH, PAUSE, PURGE, PERSIST],
      },
    }),
});
