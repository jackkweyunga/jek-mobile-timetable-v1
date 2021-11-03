
import axios from "axios";
import * as tmb from "../interfaces/programme.js";
import ghjson from "../../assets/files/faculty.json";

// const api_root = "https://jtu-api.herokuapp.com/api/v1/";

const api_root = "http://127.0.0.1/api/v1/";




export const Data = async (pid, pyear) => {


    // let data = await (await fetch(ghjson)).json();

    let data = ( await (axios(api_root+`programme/${id}`))).data["events"][pyear]

    // console.log(data);

    // check for a not found message 
    if (data["message"] !== undefined) {
        return null;
    }

    
        for (let per of i['periods']) {
            let p = new tmb.period();
            p.course = per["course"]
            p.day = per['day']
            p.duration = per['duration']
            p.fromTime = per['from_time']
            p.room = per['room']
            p.type = per['type']
            p.toTime = per['to_time']

            let rm = new tmb.roomInfo();
            rm.capacity = per["room_info"]["capacity"]
            rm.college = per["room_info"]["college"]
            rm.latitude = per["room_info"]['latitude']
            rm.longitude = per["room_info"]["longitude"]
            rm.name = per["room_info"]['name']
            rm.url = per["room_info"]['url']

            p.roomInfo = rm;
            
            ps.push(p)
        }

        c.periods = ps;

        cs.push(c)
    }


    faculty.collegeInfo = cg
    faculty.coursesInfo = cs

    console.log(faculty);

    return faculty;
}
