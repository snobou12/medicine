import React from "react";
import { useLocation } from "react-router-dom";
import { useAppDispatch } from "../redux/hooks/redux";
import { handleChangePathData } from "../redux/reducers/design/designSlice";


const pathData=[
    {path:"/profile",title:"Записи на прием"},
    {path:"/profile/appointments",title:"Все записи"},

]

export function useRouting(){
    const [path,setPath]=React.useState<string>("");
    const [fullPath,setFullPath]=React.useState<string>("");

    const [title,setTitle]=React.useState<string>("");
    const dispatch = useAppDispatch();
    const location = useLocation();
    React.useEffect(()=>{
        let mainPath = location.pathname.split("/")[1];
        setPath(`/${mainPath}`)
        setFullPath(location.pathname);
        let title = pathData.find((pth)=>pth.path === location.pathname)?.title || "Неизвестная страница";
        setTitle(title);
        dispatch(handleChangePathData({mainPath:`/${mainPath}`,fullPath:location.pathname,title}));
    },[location.pathname])

    return {path,title,fullPath};
}