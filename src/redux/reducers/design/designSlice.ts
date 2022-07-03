import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPath } from "../../../models/IPath";



interface AuthState {
  path:IPath,
  title:string,
}



const initialState: AuthState = {
    path:{
      mainPath:"",
      fullPath:"",
    },
    title:""
};

export const designSlice = createSlice({
  name: "design",
  initialState,
  reducers: {
    handleChangePathData(state,action:PayloadAction<IPath & {title:string}>){
      state.path=action.payload;
      state.title=action.payload.title
    }
  },
  
});
export const {handleChangePathData}=designSlice.actions;
export default designSlice.reducer;