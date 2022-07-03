import { createAsyncThunk } from "@reduxjs/toolkit";
import ApptService from "../../../services/appointments.service";

export const getAll = createAsyncThunk(
  "appointments/get",
  async (_, thunkApi) => {
    try {
      const response = await ApptService.getAll();
      return response.data;
    } catch (e: any) {
      if (e.response?.data?.message) {
        return thunkApi.rejectWithValue(e.response.data.message);
      }
    }
  }
);



export const subscribe = createAsyncThunk(
  "appointments/subscribe",
  async (id:string, thunkApi) => {
    try {
      const response = await ApptService.subscribe(id);
      return id;
    } catch (e: any) {
      if (e.response?.data?.message) {
        return thunkApi.rejectWithValue(e.response.data.message);
      }
    }
  }
);


export const unsubscribe = createAsyncThunk(
  "appointments/unsubscribe",
  async (id:string, thunkApi) => {
    try {
      const response = await ApptService.unsubscribe(id);
      return id;
    } catch (e: any) {
      if (e.response?.data?.message) {
        return thunkApi.rejectWithValue(e.response.data.message);
      }
    }
  }
);

