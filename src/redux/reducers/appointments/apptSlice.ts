import { createSlice, current, PayloadAction } from "@reduxjs/toolkit";
import { IAppointment } from "../../../models/IAppointment";
import { getAll, subscribe, unsubscribe } from "./ApptActionCreator";




interface AuthState {
    isLoading:boolean,
    error:string,
   allAppts:IAppointment[] | [],
   date: Date | null
}



const initialState: AuthState = {
   isLoading:false,
   error:"",
   allAppts:[],
   date:null
};

export const apptSlice = createSlice({
  name: "appointments",
  initialState,
  reducers: {
    handleChangeSelectedDate(state,action:PayloadAction<Date | null>){
      state.date=action.payload;
    }
  },
  extraReducers:{
    [getAll.fulfilled.type]: (state, action: PayloadAction<IAppointment[]>) => {
      state.isLoading=false;
      state.error="";
      state.allAppts=action.payload;
    },
    [getAll.pending.type]: (state) => {
      state.isLoading=true;
    },
    [getAll.rejected.type]: (state, action: PayloadAction<string>) => {
        state.isLoading=false;
        state.error=action.payload;
        state.allAppts=[];

    },
    [subscribe.fulfilled.type]: (state,action:PayloadAction<string>) => {
      let id = action.payload;
      state.allAppts=[...state.allAppts].map((appt)=>{
        if(appt.id === id){
          return {...appt,isWritten:!appt.isWritten}
        }
        return {...appt}
      })
      state.isLoading=false;
      state.error="";
    },
    [subscribe.pending.type]: (state) => {
      state.isLoading=true;
    },
    [subscribe.rejected.type]: (state, action: PayloadAction<string>) => {
        state.isLoading=false;
        state.error=action.payload;

    },

    [unsubscribe.fulfilled.type]: (state,action:PayloadAction<string>) => {
      let id = action.payload;
      state.allAppts=[...state.allAppts].map((appt)=>{
        if(appt.id === id){
          return {...appt,isWritten:!appt.isWritten}
        }
        return {...appt}
      })
      state.isLoading=false;
      state.error="";
    },
    [unsubscribe.pending.type]: (state) => {
      state.isLoading=true;
    },
    [unsubscribe.rejected.type]: (state, action: PayloadAction<string>) => {
        state.isLoading=false;
        state.error=action.payload;

    },
    
  }
  
});
export const {handleChangeSelectedDate}=apptSlice.actions;
export default apptSlice.reducer;