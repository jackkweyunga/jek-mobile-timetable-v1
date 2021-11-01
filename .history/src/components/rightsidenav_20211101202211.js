import topnav_html from "./html/rightsidenav.html";

const sidenav = document.createElement("aside")

// css classes
var classes = ["tmb-sidebar"]
classes.forEach(x => rightSidenav.classList.add(x));

// html template
rightSidenav.innerHTML = topnav_html;

// export component
export default rightSidenav;
