import topnav_html from "./html/sidenav.html";

const sidenav = document.createElement("aside")

// css classes
var classes = ["sidebar"]
classes.forEach(x => sidenav.classList.add(x));

// html template
sidenav.innerHTML = topnav_html;

// export component
export default sidenav;





   
 
  
 


//     const items = [
//         { icon: icon_day, text: "Day", id: "a_day" },
//         { icon: icon_three_days, text: "3 Days", id: "three_days" },
//         { icon: icon_week, text: "Week", id: "a_week" },
//         { icon: icon_lectures, text: "Lecture", id: "Lecture" },
//         { icon: icon_practicals, text: "Practical", id: "Practical" },
//         { icon: icon_tutorials, text: "Tutorial", id: "Tutorial" },
//         { icon: icon_seminars, text: "Seminar", id: "Seminar" },
//     ]

//     items.forEach((item) => {
//         const nav = document.createElement('nav');

//         nav.setAttribute('id', item.id);
//         nav.style = `
//             padding: 10px;
//             border-radius:0px;
//             margin-top: 5px;
//             display: flex;
//             flex: 1;
//             justify-content: space-arround;
//             align-items: center;
//             background: inherit;
//             cursor: pointer;
//         `;

//         let icon = document.createElement('div');
//         icon.innerHTML = item.icon;
//         icon.width = 20;
//         icon.style = `
//             color: #FFFFFF;
//         `;

//         let text = document.createElement('label');
//         text.innerText = item.text;
//         text.style = `
//             margin-left: 10px;
//             color: #777;
//         `

//         nav.appendChild(icon);
//         nav.appendChild(text);

//         cont.appendChild(nav);

//     })

//     return cont;
// }



