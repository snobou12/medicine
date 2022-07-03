import React, { FC } from 'react'
import Calendar, { Detail } from "react-calendar";
import moment from "moment";

import { useAppDispatch } from '../../redux/hooks/redux';
import { handleChangeSelectedDate } from '../../redux/reducers/appointments/apptSlice';
import { IAppointment } from '../../models/IAppointment';
import 'react-calendar/dist/Calendar.css';
import "./CCalendar.scss";
type Props = {
  allAppts: IAppointment[],
  date:Date | null
}
const CCalendar: FC<Props> = ({ allAppts,date }) => {
  const dispatch = useAppDispatch();

  const handleClickTile = (selectedDate: Date) => {
    if (date?.toISOString() === selectedDate.toISOString()) {
      dispatch(handleChangeSelectedDate(null));
    }
    else {
      dispatch(handleChangeSelectedDate(selectedDate));
    }
  }
  function checkEvents(date: Date, view: Detail) {
    let events = allAppts.filter(((appt)=>!!appt.isWritten)).map((appt)=>appt.date);
    let freeEvents =allAppts.filter(((appt)=>!appt.isWritten)).map((appt)=>appt.date) ;
    let listOfEventsCount = events.reduce(function (acc: any, el) {
      acc[el] = (acc[el] || 0) + 1;
      return acc;
    }, {});
    let listOfFreeEventsCount = freeEvents.reduce(function (acc: any, el) {
      acc[el] = (acc[el] || 0) + 1;
      return acc;
    }, {});
    if (events.includes(moment(date).format("DD-MM-YY")) && view === "month" || freeEvents.includes(moment(date).format("DD-MM-YY")) && view === "month") {
      let html=[];
      if(events.includes(moment(date).format("DD-MM-YY")) && view === "month"){
        html.push(<span className='ccalendar__events_count'>{listOfEventsCount[moment(date).format("DD-MM-YY")]}</span>)
      }
      if(freeEvents.includes(moment(date).format("DD-MM-YY")) && view === "month"){
        html.push(<span className='ccalendar__events_count ccalendar__events_count--free'>{listOfFreeEventsCount[moment(date).format("DD-MM-YY")]}</span>)
      }

      return html;
    }
      return null
  }
  return (
    <div className='ccalendar'>
      <div className="calendar-container">
        <Calendar tileContent={
          ({ date, view }) => {
            return <React.Fragment>
              {checkEvents(date,view)?.map((spn,idx)=>{
              return <React.Fragment key={idx}>{spn}</React.Fragment>
              })}
            </React.Fragment>
            
          }
        } value={date} onClickDay={(e) => handleClickTile(e)} />
      </div>
    </div>
  )
}

export default CCalendar