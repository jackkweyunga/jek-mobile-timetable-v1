
import { period_box, day_column } from "../utils/utils.js";
import { Data } from "../services/data.js";

// global time array of object that is used to control collissions
var times = {};

// time range function

var tRange = (_start, _end) => {

    function* range(start, end) {
        for (let i = start; i <= end; i++) {
            yield i;
        }
    }
    
    return [...range(_start, _end)]; 
}


// intersection of two sets

function intersection(setA, setB) {
    let _intersection = new Set()
    for (let elem of setB) {
        if (setA.has(elem)) {
            _intersection.add(elem)
        }
    }
    return _intersection
}

// check for collision



const content = document.getElementById("tmb-content")

const top_content = document.createElement('div');
const main_content = document.createElement('div');

const main_content_right = document.createElement('div');
const main_content_left = document.createElement('div');

// const colors = ["#FF69B4", "#CF9FFF", "#ADD8E6", "#FFF8DC", "#ff9166", "#66ffe8", "#ef66ff"]

const colors = ["rgb(255, 105, 180, 0.1)", "rgb(207, 159, 255, 0.1)", "rgb(173, 216, 230, 0.1)", "rgb(255, 248, 220, 0.1)", "rgb(255, 145, 102,0.1)", "rgb(102, 255, 232, 0.1)", "rgb(239, 102, 255, 0.1)", "rgb(82, 163, 249, 0.1)", "rgb(255, 89, 89, 0.1)", "rgb(255, 133, 89, 0.1)", "rgb(255, 194, 89, 0.1)"]


const make_styles = () => {
    content.style = `
        background: white;
        flex: 1;
        margin-bottom: 5px;
        display: flex;
        flex-direction: column;
        height: 100%;
        overflow: auto;
        position: relative;
    `

    top_content.style = `
        display: flex;
        position: sticky;
        padding: 0;
        top: 0;
        z-index: 2;
        margin-bottom: 15px;
        box-shadow: 0px 3px 10px 0px #eee ;
    `

    main_content.style = `
        display: flex;
        height: 100%;
        postion: relative;
    `

    main_content_left.style = `
        flex :1;
        background: white;
        display: flex;
        positinon: relative;
    `

    main_content_right.style = `
        flex :1;
        background: white;
        max-width: 50px;
        display: flex;
        flex-direction: column;
    `
}

make_styles();


// the functions that checks for collisions 
var checkCollisions = (period) => {

}


// the function to draw the timetable

export const drawTimeTable = async (fac, ndays = 5) => {
    // console.log(fac);

    // clear content first

    Data(fac).then(data => {

        const bgcolors = []

        const faculty_codes = []

        let k_ = 0;
        for (let c of data.coursesInfo) {
            let show = { name: c.code, color: colors[k_] }
            bgcolors.push(show)
            faculty_codes.push(c.code);
            k_++;
        }

        // console.log(bgcolors);
        // console.log(faculty_codes);

        for (let i = 0; i < ndays; i++) {
            let day = day_column()
            day.style.position = "relative";

            let days = ["Mon", "Tue", "Wed", "Thu", "Fri"]

            // title of the day
            const title = period_box();
            title.style.minHeight = "35px";
            title.style.width = '';
            title.style.boxShadow = 'inset 0 0 0 #000';
            title.innerHTML = `
        <label style="
            flex: 1;
            height: 100%;
            display: flex;
            z-index: 2;
            align-items: center;
            justify-content: center;
            font-size: 12px;
            color: #999;
        ">${days[i]}</label>
        `
            top_content.appendChild(title)

            let i_for_colors = 0;
            times[days[i]] = {};

            for (let k = -1; k < 12; k++) {
                let p = period_box();

                for (let course of data.coursesInfo) {

                    for (let period of course.periods) {
                        if ((period.day.slice(0, 3) === days[i]) && (period.type !== 'Seminar')) {
                            let end = period.toTime.slice(0, 5).replace(':', '');
                            if (end.slice(2, 4) === '55') {
                                end = Number(end.slice(0, 2)) + 1
                            } else {
                                end = Number(end.slice(0, 2));
                            }

                            let start = Number(period.fromTime.slice(0, 5).replace(':', '').slice(0, 2));

                            if (k + 8 === start || k + 8 === end) {
                                let lb = period_box()


                                const height = ((end - start) * 80).toString()
                                const top = ((start - 7) * 80).toString()

                                times[days[i]][`${course.code}-${period.type}`] = tRange(start, end);

                                let bgcolor = "#fff";

                                for (let color of bgcolors) {
                                    if (course.code === color.name) {
                                        bgcolor = color.color;
                                    }
                                }

                                lb.innerHTML = `
                                    <div style="
                                        flex:1;
                                        display:flex;
                                        height: ${height}px;
                                        width: 100%;
                                        justify-content: center;
                                        align-items: flex-top;
                                    ">
                                    ${course.code} ${period.type} : ${start} - ${end}
                                    </div>
                                    `;
                                lb.style = `
                                    position: absolute;
                                    background: ${bgcolor};
                                    flex:1;
                                    width: 100%;
                                    box-shadow: 0px 3px 10px 0px #eee ;
                                    z-index: 1;
                                    top: ${top}px;
                                    min-height: ${height}px;
                                    max-height: ${height}px;
                                `

                                day.appendChild(lb)
                                i_for_colors++;

                            }

                        }
                    }
                }

                day.appendChild(p)
            }

            main_content_left.appendChild(day)
        }




        //  the time column
        const tp = period_box();
        tp.style.minHeight = "35px";
        tp.style.maxWidth = "50px";
        tp.style.boxShadow = 'inset 0 0 0 #000';
        tp.innerHTML = `
        <label style="
            flex: 1;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 12px;
            color: #999;
        ">Time</label>
`
        top_content.appendChild(tp);

        for (let i = -1; i < 13; i++) {
            const t = period_box();
            const label = document.createElement('label');
            label.innerText = `${8 + i}:00`
            label.style = `
        margin-left: 10px;
        margin-top: -10px;
        position: absolute;
        font-size: 12px;
        color: #999;
        `;

            t.style.boxShadow = 'inset 0 0 0';
            t.appendChild(label)
            main_content_right.appendChild(t);

        }

        console.log(times);
    

    })
}


main_content.appendChild(main_content_left)
main_content.appendChild(main_content_right)

content.appendChild(top_content)
content.appendChild(main_content)

export default content;
