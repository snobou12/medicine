import $api from "../api";
import { AxiosResponse } from "axios";

export default class ApptService {
 static async getAll(): Promise<AxiosResponse> {
    return $api.get("/appointments");
  }
  static async subscribe(id:string): Promise<AxiosResponse> {
    return $api.patch(`/appointments/${id}`,{isWritten:true});
  }
  static async unsubscribe(id:string): Promise<AxiosResponse> {
    return $api.patch(`/appointments/${id}`,{isWritten:false});
  }
}