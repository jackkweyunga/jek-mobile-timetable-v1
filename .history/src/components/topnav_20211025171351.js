
import menu_icon_src from "../../assets/icons/menu.png";
import refresh_icon_src from "../../assets/icons/refresh.png";


const topnav = document.getElementById("tmb-topnav");

topnav.style = `
            width: 100%;
            background: #081126;
            height: auto;
            position: sticky;
            display: flex;
            width: 100%; `;

// bottom
export const topNavBottom = () => {
    const topnav_bottom = document.createElement('nav');

    topnav_bottom.style = ``

    return topnav_bottom;

}


// top nav top
export const topNavTop = () => {
    const topnav_top = document.createElement('nav');

    topnav_top.style = `
        padding: 5px;
        display: flex;
        background: inherit;
        min-height: 5px; 
        align-items: center;
    `

    const menu_icon = document.createElement('img');
    menu_icon.src = menu_icon_src;
    menu_icon.width = 30;
    menu_icon.setAttribute('id', 'menu_icon')
    menu_icon.style = `
        display: inline;
        padding: 2px;
        margin-left: 5px;
        margin-right: 5px;
        cursor: pointer;
        background-color: #FFFFFF;
    `

    const refresh_icon = document.createElement('img');
    refresh_icon.src = refresh_icon_src;
    refresh_icon.width = 20;
    refresh_icon.style = `
        padding: 2px;
        margin-left: 5px;
        margin-right: 5px;
        cursor: pointer;
        background-color: #FFFFFF;
        border-radius: 100%
    `
    const title = document.createElement('div');
    title.style = `
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
    `

    const search_bar = document.createElement('div');
    search_bar.style = `
        -moz-box-shadow: inset 0 0 5px #ddd;
        -webkit-box-shadow: inset 0 0 5px #ddd;
        box-shadow: inset 0px 1px 1px #ddd;
        background: inherit;
        color: #FFFFFF;
        padding: 0px;
        overflow: hidden;
        margin-left: 10px;
        margin-right: 10px;
        border-radius: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
    `
    const search_input = document.createElement('input');
    search_input.id = "faculty_search_input";
    search_input.style = `
        border: 0;
        border-radius: 10px;
        padding: 5px;
    `;
    search_input.placeholder = "search faculty"

    search_bar.appendChild(search_input)
    search_bar.appendChild(refresh_icon)

    topnav_top.appendChild(menu_icon);
    topnav_top.appendChild(title);
    topnav_top.appendChild(search_bar);

    return topnav_top;
}

topnav.appendChild(topNavTop());
// topnav.appendChild(topNavBottom());

export default topnav;
