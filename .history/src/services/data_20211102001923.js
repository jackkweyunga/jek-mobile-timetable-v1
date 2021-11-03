
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

    var events = []

    for (let ev of data) {
        let p = new tmb.period();
        p.course = per["course"]
        p.day = per['day']
        p.duration = per['duration']
        p.fromTime = per['from_time']
        p.room = per['room']
        p.type = per['type']
        p.toTime = per['to_time']

    return tmb.Programme(events);
}
