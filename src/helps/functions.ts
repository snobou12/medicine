import moment from "moment";
//Получить день недели на русском
 let days:any = {
        0:"Воскресенье",
        1:"Понедельник",
        2:"Вторник",
        3:"Среда",
        4:"Четверг",
        5:"Пятница",
        6:"Суббота",

    }
export function getDayOnRussian(date:string){
    
    let arr = date.split("-");
        let reverseDate =[];
        reverseDate.push(arr[1],arr[0],arr[2])
        return days[moment(reverseDate.join("-")).subtract("dd-mm-yyyy").day()];
    }
