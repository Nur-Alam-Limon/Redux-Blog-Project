import { combineReducers, configureStore } from "@reduxjs/toolkit";
import postReducer from "../features/posts/postSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

// Persist configuration
const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  posts: postReducer,
});

// Persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Required for redux-persist
    }),
});

// Persistor for persisting the store
export const persistor = persistStore(store);
