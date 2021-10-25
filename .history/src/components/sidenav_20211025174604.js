import logo_icon_src from "../../assets/icons/Book icon3.png";
import help_icon from "../../assets/icons/information.png"; 
import a_day_icon from "../../assets/icons/two-rows-layout.png";
import three_day_icon from "../../assets/icons/columns.png";
import a_week from "../../assets/icons/weekly-calendar-outline-event-interface-symbol.png";

const sidenav = document.getElementById("tmb-sidenav")

sidenav.style = `
    width: 150px;
    margin-right: 0px;
    z-index: 3;
    background: #323A4C;
    min-height: 100%;
    overflow: hidden;
    transition: margin-left 600ms;
    padding-right: 0px;
    box-shadow: -3px 1px 5px 0px #777;
`

// side logo
const sideLogo = () => {
    const cont = document.createElement('div');
    cont.setAttribute('id', 'side_logo')
    cont.style = `
        padding: 10px;
        border-bottom: 1px solid #eee;
        background: white;
        flex: 1;
    `

    const title = document.createElement('h1');
    title.innerText = "Udsm Tt"
    title.style = `
        padding: 5px;
        font-size: 1rem;
        display: flex;
        justify-content: center;
    `
    const logo_icon = document.createElement('img');
    logo_icon.src = logo_icon_src;
    logo_icon.style = `
        width: 100%;
        cursor: pointer;
    `
    cont.appendChild(logo_icon);
    cont.appendChild(title);
    return cont;
}


// navs and so on
const sideDetails = () =>  {
    const cont = document.createElement('div');
    cont.setAttribute('id', 'side_details')

    cont.style = `
        margin-top: 0px;
        padding: 3px;
        flex: 1;
    `

    var icon_day = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-layout-text-sidebar-reverse" viewBox="0 0 16 16">
        <path d="M12.5 3a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1h5zm0 3a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1h5zm.5 3.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 .5-.5zm-.5 2.5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1h5z"/>
        <path d="M16 2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2zM4 1v14H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h2zm1 0h9a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5V1z"/>
    </svg>`;

    var icon_three_days = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-layout-three-columns" viewBox="0 0 16 16">
    <path d="M0 1.5A1.5 1.5 0 0 1 1.5 0h13A1.5 1.5 0 0 1 16 1.5v13a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 14.5v-13zM1.5 1a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 .5.5H5V1H1.5zM10 15V1H6v14h4zm1 0h3.5a.5.5 0 0 0 .5-.5v-13a.5.5 0 0 0-.5-.5H11v14z"/>
  </svg>`

    var icon_week = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar3-week" viewBox="0 0 16 16">
    <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z"/>
    <path d="M12 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-5 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm2-3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-5 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
  </svg>`
    var icon_lectures = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pen" viewBox="0 0 16 16">
    <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z"/>
  </svg>`
    var icon_practicals = ``
    var icon_tutorials = ``
    var icon_seminars = ``


    const items = [
        {icon:ico, text:"a Day", id:"a_day"},
        {icon:icon_three_days, text:"3 Days", id:"three_day"},
        {icon:icon_week, text:"the Week", id:"a_week"},
        {icon:icon_lectures, text:"Lectures", id:"Lectures"},
        {icon:icon_practicals, text:"Practicals", id:"Practicals"},
        {icon:icon_tutorials, text:"Tutorials", id:"Tutorials"},
        {icon:icon_seminars, text:"Seminars", id:"Seminars"},

    ]

    items.forEach( (item) => {
        const nav = document.createElement('nav');

        nav.setAttribute('id', item.id);
        nav.style =`
            padding: 10px;
            border-radius:5px;
            margin-top: 5px;
            display: flex;
            flex: 1;
            justify-content: space-arround;
            align-items: center;
            background: inherit;
            cursor: pointer;
        `;

        let icon = document.createElement('div');
        icon.innerHTML = item.icon;
        icon.width = 20;

        let text = document.createElement('label');
        text.innerText = item.text;
        text.style =   `
            margin-left: 10px;
            color: #777;
        `

        nav.appendChild(icon);
        nav.appendChild(text);

        cont.appendChild(nav);

    })

    return cont;
}

// side footer
const sideFooter = () =>  {
    const cont = document.createElement('div');
    cont.setAttribute('id', 'side_footer')

    cont.style = `
        position: absolute;
        bottom: 0;
        border-top: 1px solid #ddd;
        flex: 1; 
    `

    let icon = document.createElement('img');
    icon.src = help_icon;
    icon.width = 25;

    let text = document.createElement('label');
    text.innerText = "Feedback & Help";
    text.style =   `
        padding-left: 10px;
        font-size: .8rem;
    `

    const nav = document.createElement('nav');
    nav.style =`
        padding: 10px;
        display: flex;
        flex: 1;
        align-items: center;
        background: inherit;
        cursor: pointer;
    `;

    nav.appendChild(icon)
    nav.appendChild(text)

    cont.appendChild(nav)

    return cont

}

sidenav.appendChild(sideLogo())
sidenav.appendChild(sideDetails())
// sidenav.appendChild(sideFooter())

export default sidenav;
