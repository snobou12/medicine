import React,{FC} from 'react';
import { Route, Routes } from 'react-router-dom';
import { Header, Menu } from '../components';
import { useRouting } from '../hooks/useRouting';
import { Profile, ProfileAppointmens } from '../pages';
import { useAppSelector } from '../redux/hooks/redux';
import './App.scss';

const App:FC =()=> {
  const pathData = useRouting();
  const {allAppts}=useAppSelector((state)=>state.apptSlice);
  return (
    <div className="app">
     <Header />
     <Menu path={{fullPath:pathData.fullPath,mainPath:pathData.path}} pathTitle={pathData.title} />
     <div className="app__content">
      <Routes>
        <Route  path="/profile" element={<Profile allAppts={allAppts} />} />
        <Route  path="/profile/appointments" element={<ProfileAppointmens allAppts={allAppts} />} />
      </Routes>
     </div>
    </div>
  );
}

export default App;
