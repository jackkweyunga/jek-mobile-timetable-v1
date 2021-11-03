
import axios from "axios";
import * as tmb from "../interfaces/faculty.js";
import ghjson from "../../assets/files/faculty.json";

// const api_root = "https://jtu-api.herokuapp.com/api/v1/";

const api_root = "http://127.0.0.1/api/v1/";



// a funnction to search for faculty from the api
var getProgrammme = (id) => {

    const url = `${api_root}programme/${id}`;
    return axios.get(url, data);
};


const faculty = new tmb.Faculty()

export const Data = async (pid) => {


    // let data = await (await fetch(ghjson)).json();

    let data = await (await (getFaculty(fac, "f1"))).data

    // console.log(data);

    // check for a not found message 
    if (data["message"] !== undefined) {
        return null;
    }

    let faculty = new tmb.Faculty()

    faculty.url = data["url"];
    faculty.college = data["department_info"]["college_info"];
    faculty.courses = data["courses_info"];
    faculty.name = data['name']

    let cg = new tmb.collegeInfo()
    cg.name = data["department_info"]["college_info"]["name"]
    cg.shortForm = data["department_info"]["college_info"]['short_form']
    cg.url = data["department_info"]["college_info"]['url']

    let cs = []

    for (let i of data["courses_info"]) {
        let c = new tmb.courseInfo();

        c.code = i['code']
        c.name = i['name']
        c.url = i['url']

        let ps = []

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
