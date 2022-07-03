import { combineReducers } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import designSlice from "./reducers/design/designSlice";
import apptSlice from "./reducers/appointments/apptSlice";

const rootReducer = combineReducers({
  designSlice,
  apptSlice
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;

export type AppStore = ReturnType<typeof setupStore>;

export type AppDispatch = AppStore["dispatch"];