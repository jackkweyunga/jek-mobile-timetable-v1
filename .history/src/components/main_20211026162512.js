

const main = document.createElement("main");

// initial container style
// css classes
var classes = ["sidebar"]
classes.forEach(x => sidenav.classList.add(x));

// html template
sidenav.innerHTML = topnav_html;

export default main;
