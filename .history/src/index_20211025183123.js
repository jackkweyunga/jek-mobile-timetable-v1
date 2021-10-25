
// imports

import wrapper from "./components/wrapper.js";
import main from "./components/main.js";
import topnav from "./components/topnav.js";
import sidenav from "./components/sidenav.js";
import { default as content, drawTimeTable } from "./components/content.js";

wrapper.appendChild(sidenav)
wrapper.appendChild(main);
main.appendChild(topnav)
main.appendChild(content)


var ndays = 5;
var Ttype = "Lecture";
var search_value = "";

const sidenavs = document.getElementById('side_details').childNodes;

function unClickAll() {
    sidenavs.forEach((item) => {
        item.style.background = 'inherit';
        item.style.cursor = "pointer";
    })
}

document.getElementById('faculty_search_input').addEventListener('input', (e) => {
    drawTimeTable(e.target.value, ndays, Ttype);
    search_value = e.target.value;
});

const n_map = {
    a_day: 1, three_days: 3, a_week: 5
}

const Ttypes = ["Lecture","Seminar","Practical","Tutorial"];

sidenavs.forEach((item) => {
    item.addEventListener('click', () => {
        // console.log("clicked");

        if (n_map[item.lastChild.cs] !== undefined) {
            console.log(item.lastChild.textContent);
        };

        if (Ttype.indexOf(item.lastChild.textContent)) {
            console.log(item.lastChild.textContent);
        };

        // unclick all
        unClickAll();
        item.style.background = '#081126';
        item.style.color = "#FFFFFF";
        item.style.cursor = "pointer";
    })
})


function responsiveness() {

    // Responsiveness
    const windowSize = wrapper.getBoundingClientRect().width;

    if (windowSize >= 740) {
        console.log(windowSize);

        main.style.transitionProperty = "all";
        main.style.transition = "1s ease";
        sidenav.style.width = '150px';
        sidenav.style.position = 'relative';

        document.getElementById("menu_icon").addEventListener("click", (evt) => {
            // console.log("Hey clicked me");
            if (sidenav.style.marginLeft == "-150px") {
                sidenav.style.marginLeft = `0px`;
            } else {
                sidenav.style.marginLeft = '-150px';
            }
        })
    }

    else {
        if ((windowSize < 740) && (windowSize > 540)) {
            // console.log(windowSize);
            main.style.transitionProperty = "all";
            main.style.transition = "1s ease";
            sidenav.style.width = '100px';
            sidenav.style.position = 'relative';

            sidenavs.forEach((node) => {
                node.style.fontSize = '10px';
            })

            document.getElementById("menu_icon").addEventListener("click", (evt) => {
                // console.log("Hey clicked me");
                if (sidenav.style.marginLeft == "-100px") {
                    sidenav.style.marginLeft = `0px`;
                } else {
                    sidenav.style.marginLeft = '-100px';
                }
            })
        } else {

            if (windowSize < 540) {
                // console.log(windowSize);
                main.style.transitionProperty = "all";
                main.style.transition = "1s ease";
                sidenav.style.width = '100px';
                sidenav.style.position = 'relative';

                document.getElementById("menu_icon").addEventListener("click", (evt) => {
                    // console.log("Hey clicked me");


                    if (sidenav.style.marginLeft == "-100px") {
                        sidenav.style.marginLeft = `0px`;
                    } else {
                        sidenav.style.marginLeft = '-100px';
                    }
                })
            }

        }
    }

};

responsiveness();

window.onresize = () => {
    responsiveness();
}

