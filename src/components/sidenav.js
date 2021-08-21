

const sidenav = document.getElementById("tmb-sidenav")

sidenav.style = `
    width: 150px;
    margin-right: 0px;
    z-index: 3;
    background: whitesmoke;
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
    title.innerText = "Udsm Timetable"
    title.style = `
        padding: 5px;
        font-size: 1rem;
        display: flex;
        justify-content: center;
    `
    const logo_icon = document.createElement('img');
    logo_icon.src = "../assets/icons/Book icon3.png";
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
        {icon:"../../assets/icons/two-rows-layout.png", text:"a Day", id:"a_day"},
        {icon:"../../assets/icons/columns.png", text:"3 Days", id:"three_day"},
        {icon:"../../assets/icons/weekly-calendar-outline-event-interface-symbol.png", text:"the Week", id:"a_week"},
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
    icon.src = "../assets/icons/information.png";
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
sidenav.appendChild(sideFooter())

export default sidenav;

