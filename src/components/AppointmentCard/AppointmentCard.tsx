import React,{FC} from 'react'
import surgeryImg from "../../assets/doctors/surgery.jpg"
import therapeuticalImg from "../../assets/doctors/therapeutical.jpg"
import moment from "moment";
import { IAppointment } from '../../models/IAppointment';

import "./AppointmentCard.scss";
import { getDayOnRussian } from '../../helps/functions';
import { useAppDispatch } from '../../redux/hooks/redux';
import { subscribe,unsubscribe } from '../../redux/reducers/appointments/ApptActionCreator';

const AppointmentCard:FC<IAppointment> =({...props})=> {
    const dispatch = useAppDispatch();
    function getDoctorImg(type:string){
        switch (type) {
            case "surgery":
                return surgeryImg;
            case "therapeutical":
                return therapeuticalImg;
            default:
                return surgeryImg;
        }
    }

   
    const handleAppointmentScribe =()=>{ // можно вытащить в родителей
        if(!props.isWritten){ // конечно проверка должна быть на сервере, но тут вот такой "сервер"
            dispatch(subscribe(props.id));
        }else{
            dispatch(unsubscribe(props.id));
        }
    }
        
  return (
    <div className='appointment'>
        <div className="appt__time">
            <span> {getDayOnRussian(props.date)} {props.date} | {props.time}</span>
        </div>
        <div className="appt__place">
            <span>{props.address}</span>
        </div>
        <div className="appt__bottom">
            <div className="appt__doctor">
                <div style={{background: `url(${getDoctorImg(props.type)})`,
                                backgroundPositionY: "30%",
                                backgroundSize: "cover"}} className="appt__doctor_avatar">
                
                </div>
                <div className="appt__doctor_info">
                    <span className="appt__doctor_name">
                        {props.fullname}
                    </span>
                    <span className="appt__doctor_topic">
                        {props.translType}
                    </span>
                </div>
            </div>
            <button onClick={handleAppointmentScribe} className='btn__tertiary'>{props.isWritten ? "Отменить" : "Записаться"}</button>
        </div>
    </div>
  )
}

export default AppointmentCard