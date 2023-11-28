import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "src/api/AxiosBaseQuery";
import { authReducer } from "./slices/auth";
import { BASE_URL } from "src/api/ApiConstants";
import { DEV } from "src/configs/config";

// initialize an empty api service that we'll inject endpoints into later as needed
export const iriApi = createApi({
  reducerPath: "iriApi",
  baseQuery: axiosBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: ["userGet"],
  endpoints: () => ({}),
});

export const appReducer = combineReducers({
  auth: authReducer,
  [iriApi.reducerPath]: iriApi.reducer,
});

const rootReducer = (state, action) => {
  if (action.type === "auth/logout") {
    // this applies to all keys defined in persistConfig(s)
    storage.removeItem("persist:iri");

    state = {};
  }
  return appReducer(state, action);
};

const persistConfig = {
  key: "iri",
  version: 1,
  storage,
  blacklist: ["iriApi"],
};

const middleware = (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(iriApi.middleware);

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware,
  devTools: DEV,
});
const persistor = persistStore(store);
export { persistor };
