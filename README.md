# jek-mobile-timetable
most reliable digital timetable based on the University of Dar es salaam weekly study timetable.

# Features (future and present)

- [X] available in cdn
- [x] simple html setup
- [x] colorfull look
- [x] dynamically load the thimetable (stiil from a json file, currently the university timetable is not available)
- [ ] loading seminars in a separate page.
- [x] responsive sidenav 
- [ ] functional sidenav
- [ ] a nice mobile vie
- [ ] a functional search bar for searching faculties
- [ ] An alternative easy way to preconfigure a faculty 
- [ ] statefullness and ability to be customized

##### and still adding more features ...

## How it works
It is easy to configure and use. Currently targeted for developers who want to include udsm time table in their web based projects.

#### in your htm file eg. index.html

Add the following style to the header tag
```html
<link href="https://cdn.jsdelivr.net/gh/jackkweyunga/jek-mobile-timetable/assets/css/style.css" rel="stylesheet">
```

Add include this script
```html
  <script src="https://cdn.jsdelivr.net/gh/jackkweyunga/jek-mobile-timetable/dist/jek-mobile-tmb.js"></script>
```

In the section/page where you want to add this timetable, add this

```html
    <section id="tmb">
        <section id="tmb-sidenav"></section>
        <section id="tmb-main">
            <section id="tmb-topnav"></section>
            <section id="tmb-content"></section>
        </section>
    </section>
```

For the simplest use, your htm file will look like this.

```html

<!doctype html>
<html lang="en">
  <head>
    <title>Title</title>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  </head>
  <body>

    <section id="tmb">
        <section id="tmb-sidenav"></section>
        <section id="tmb-main">
            <section id="tmb-topnav"></section>
            <section id="tmb-content"></section>
        </section>
    </section>

      
    <!-- jek-mobile-timetable JavaScript Library -->
    <script src="https://cdn.jsdelivr.net/gh/jackkweyunga/jek-mobile-timetable/dist/jek-mobile-tmb.js"></script>
  </body>
</html>

```

#### Something like this will be visible

![sample_timetable](https://user-images.githubusercontent.com/75433841/130313035-d4edfae6-a7be-44aa-b89a-130421fe935a.PNG)

# ...

#### Fun Fact
This project is an evolution from myudsmtimetable project which unfortunately is dead :smile:

# Contribute
Any new ideas plz reach out.
- Fork and add some features.
- If you want to be added as a developer in this project, reach out too.

email [jackkweyunga@gmail.com](https://jackkweyunga@gmail.com)

# Liscence
MIT
