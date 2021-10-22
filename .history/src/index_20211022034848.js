
// imports

import wrapper from "./components/wrapper.js";
import main from "./components/main.js";
import content from "./components/content.js";
import topnav from "./components/topnav.js";
import sidenav from "./components/sidenav.js";
import search_input from "./components/topnav.js";
import {  } from "./";

wrapper.appendChild(sidenav)
wrapper.appendChild(main);
main.appendChild(topnav)
main.appendChild(content)


const sidenavs = document.getElementById('side_details').childNodes;

function unClickAll() {
    sidenavs.forEach((item) => {
        item.style.boxShadow = '0px 0px 0px 0px #eee';
        item.style.background = 'inherit';
    })
}

sidenavs.forEach((item) => {
    item.addEventListener('click', () => {
        console.log("clicked");
        unClickAll();
        item.style.boxShadow = '0px .5px 3px .1px #ccc';
        item.style.background = 'white';
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

search_input.addEventListener('change', ()=>{
    console.log("changing");
});
