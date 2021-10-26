
import main_html from "./html/main.html";

const main = document.createElement("main");

// css classes
var classes = ["main"]
classes.forEach(x => sidenav.classList.add(x));

// html template
sidenav.innerHTML = topnav_html;

export default main;
