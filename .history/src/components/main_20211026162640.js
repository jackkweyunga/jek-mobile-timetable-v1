

const main = document.createElement("main");

// css classes
var classes = ["main"]
classes.forEach(x => sidenav.classList.add(x));

// html template
sidenav.innerHTML = main_html;

export default main;
