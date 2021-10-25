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

    const items = [
        {icon:a_day_icon, text:"a Day", id:"a_day"},
        {icon:three_day_icon, text:"3 Days", id:"three_day"},
        {icon:a_week, text:"the Week", id:"a_week"},
        {icon:a_week, text:"", id:"Lectures"},
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

        let icon = document.createElement('img');
        icon.src = item.icon;
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

