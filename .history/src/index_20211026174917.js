
// imports

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

const sidenavs = document.getElementById('sidebar-nav').children;

function unClickAll() {
  for (let item of sidenavs){
    // console.log((item));
    if (item.id) {
      item.style.background = 'inherit';
      item.style.cursor = "pointer";
    }
  }
}

document.getElementById('faculty_search_input').addEventListener('input', (e) => {
  drawTimeTable(e.target.value, ndays, Ttype);
  search_value = e.target.value;
});

const n_map = { "a_day": 1, "three_days": 3, "a_week": 5 }

const Ttypes = ["Lecture", "Seminar", "Practical", "Tutorial"];

for (let item of sidenavs ) {
  item.addEventListener('click', () => {
    // console.log(item.id, n_map);

    if (n_map[item.id] !== undefined) {
      // console.log(item.lastChild.textContent);
      ndays = n_map[item.id];
      drawTimeTable(search_value, ndays, Ttype);

    };

    if (Ttypes.indexOf(item.lastChild.textContent) > -1) {
      // console.log(item.lastChild.textContent);
      Ttype = item.lastChild.textContent;
      drawTimeTable(search_value, ndays, Ttype);

    };

    // unclick all
    unClickAll();
    item.firs.style.background = '#081126';
    item.style.color = "#FFFFFF";
    item.style.cursor = "pointer";
  })
};



// miscellinious

(function () {
      "use strict";

      /**
       * Easy selector helper function
       */
      const select = (el, all = false) => {
        el = el.trim()
        if (all) {
          return [...document.querySelectorAll(el)]
        } else {
          return document.querySelector(el)
        }
      }

      /**
       * Easy event listener function
       */
      const on = (type, el, listener, all = false) => {
        if (all) {
          select(el, all).forEach(e => e.addEventListener(type, listener))
        } else {
          select(el, all).addEventListener(type, listener)
        }
      }

      /**
       * Easy on scroll event listener 
       */
      const onscroll = (el, listener) => {
        el.addEventListener('scroll', listener)
      }

      /**
       * Sidebar toggle
       */
      if (select('.toggle-sidebar-btn')) {
        on('click', '.toggle-sidebar-btn', function (e) {
          select('body').classList.toggle('toggle-sidebar')
        })
      }

      /**
       * Search bar toggle
       */
      if (select('.search-bar-toggle')) {
        on('click', '.search-bar-toggle', function (e) {
          select('.search-bar').classList.toggle('search-bar-show')
        })
      }

      /**
       * Navbar links active state on scroll
       */
      let navbarlinks = select('#navbar .scrollto', true)
      const navbarlinksActive = () => {
        let position = window.scrollY + 200
        navbarlinks.forEach(navbarlink => {
          if (!navbarlink.hash) return
          let section = select(navbarlink.hash)
          if (!section) return
          if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
            navbarlink.classList.add('active')
          } else {
            navbarlink.classList.remove('active')
          }
        })
      }
      window.addEventListener('load', navbarlinksActive)
      onscroll(document, navbarlinksActive)

      /**
       * Toggle .header-scrolled class to #header when page is scrolled
       */
      let selectHeader = select('#header')
      if (selectHeader) {
        const headerScrolled = () => {
          if (window.scrollY > 100) {
            selectHeader.classList.add('header-scrolled')
          } else {
            selectHeader.classList.remove('header-scrolled')
          }
        }
        window.addEventListener('load', headerScrolled)
        onscroll(document, headerScrolled)
      }

      /**
       * Back to top button
       */
      let backtotop = select('.back-to-top')
      if (backtotop) {
        const toggleBacktotop = () => {
          if (window.scrollY > 100) {
            backtotop.classList.add('active')
          } else {
            backtotop.classList.remove('active')
          }
        }
        window.addEventListener('load', toggleBacktotop)
        onscroll(document, toggleBacktotop)
      }

      /**
       * Initiate tooltips
       */
      var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
      var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
      })
})();

