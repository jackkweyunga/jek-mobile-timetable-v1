
// imports

import
import wrapper from "./components/wrapper.js";
import main from "./components/main.js";
import topnav from "./components/topnav.js";
import sidenav from "./components/sidenav.js";
import { default as content, drawTimeTable } from "./components/content.js";

wrapper.appendChild(topnav)
wrapper.appendChild(sidenav)
wrapper.appendChild(main);
main.appendChild(content)

var ndays = 5;
var Ttype = "Lecture";
var search_value = "";

// const sidenavs = document.getElementById('side_details').childNodes;

// function unClickAll() {
//     sidenavs.forEach((item) => {
//         item.style.background = 'inherit';
//         item.style.cursor = "pointer";
//     })
// }

// document.getElementById('faculty_search_input').addEventListener('input', (e) => {
//     drawTimeTable(e.target.value, ndays, Ttype);
//     search_value = e.target.value;
// });

const n_map = { "a_day": 1, "three_days": 3, "a_week": 5 }

const Ttypes = ["Lecture", "Seminar", "Practical", "Tutorial"];

// sidenavs.forEach((item) => {
//     item.addEventListener('click', () => {
//         // console.log(item.id, n_map);

//         if (n_map[item.id] !== undefined) {
//             // console.log(item.lastChild.textContent);
//             ndays = n_map[item.id];
//             drawTimeTable(search_value, ndays, Ttype);
        
//         };

//         if (Ttypes.indexOf(item.lastChild.textContent) > -1) {
//             // console.log(item.lastChild.textContent);
//             Ttype = item.lastChild.textContent;
//             drawTimeTable(search_value, ndays, Ttype);

//         };

//         // unclick all
//         unClickAll();
//         item.style.background = '#081126';
//         item.style.color = "#FFFFFF";
//         item.style.cursor = "pointer";
//     })
// })




// miscellinious

