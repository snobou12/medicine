import moment from 'moment';
import React,{FC} from 'react'
import { AppointmentCard,CCalendar } from '../../components';
import { IAppointment } from '../../models/IAppointment';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/redux';
import { getAll } from '../../redux/reducers/appointments/ApptActionCreator';
import "./ProfileAppointmens.scss";
type Props = {
  allAppts:IAppointment[]
}
const ProfileAppointmens:FC<Props>=({allAppts})=> {
  const dispatch = useAppDispatch();
  const { date } = useAppSelector((state) => state.apptSlice);
   function fetchAppointments(){
    dispatch(getAll());
  }

  React.useEffect(()=>{
    fetchAppointments();
  },[])
  const apptsRendering=(appts:IAppointment[],date:Date | null)=>{
    if(date === null) return appts
    return appts.filter((appt)=>appt.date === moment(date).format("DD-MM-YY"))
  }
  return (
    <div className='profile__appointmens'>
        <div className="profile__appts_content">
            {apptsRendering(allAppts,date).length > 0 && apptsRendering(allAppts,date).map((appt,idx)=>
        <AppointmentCard key={`${appt.id}:${idx}`} {...appt} />
        )}
        </div>
        <div className="profile__appts_calendar">
            <CCalendar date={date} allAppts={allAppts} />
            <div className="profile__calendar_hints">
              <div className="calendar__hint calendar__hint--yourself">
                <span>n</span>
                <span> - Ваши записи</span>
              </div>
              <div className="calendar__hint calendar__hint--free">
                <span>n</span>
                <span> - Свободные записи</span>

              </div>
            </div>
        </div>
    </div>
  )
}

export default ProfileAppointmens