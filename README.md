# jek-mobile-timetable
most reliable digital timetable based on the University of Dar es salaam weekly study timetable.

# Features (future and present)

- [X] available in cdn
- [x] simple html setup
- [x] colorfull look
- [x] dynamically load the thimetable (stiil from a json file, currently the university timetable is not available)
- [X] loading seminars in a separate page.
- [x] responsive sidenav 
- [X] functional sidenav
- [X] a nice mobile vie
- [X] a functional search bar for searching faculties
- [X] An alternative easy way to preconfigure a faculty 
- [ ] statefullness and ability to be customized

##### and still adding more features ...

## How it works
It is easy to configure and use. Currently targeted for developers who want to include udsm time table in their web based projects.

#### in your htm file eg. index.html

Add the following styles to the header tag
```html
<!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS v5.0.2 -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
      integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">

    <!-- bootstrap icons  -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.6.1/font/bootstrap-icons.css">

    <!-- jek-mobile-timetable css Library -->
    <link href="https://cdn.jsdelivr.net/gh/jackkweyunga/jek-mobile-timetable/assets/css/tmb.css" rel="stylesheet">
```

Add include this script
```html
  <script src="https://cdn.jsdelivr.net/gh/jackkweyunga/jek-mobile-timetable/dist/jek-mobile-tmb.js"></script>
```

In the section/page where you want to add this timetable, add this

```html
    <div id="tmb"></div>
```

For the simplest use, your htm file will look like this.

```html

<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS v5.0.2 -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
      integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">

    <!-- bootstrap icons  -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.6.1/font/bootstrap-icons.css">

    <!-- jek-mobile-timetable css Library -->
    <link href="https://cdn.jsdelivr.net/gh/jackkweyunga/jek-mobile-timetable/assets/css/tmb.css" rel="stylesheet">
    
  </head>
  <body>

    <!--use the timetable id (tmb) to direct where the timetable appears -->
    <div id="tmb"></div>
      
    <!-- jek-mobile-timetable JavaScript Library -->
    <script src="https://cdn.jsdelivr.net/gh/jackkweyunga/jek-mobile-timetable/dist/jek-mobile-tmb.js"></script>
  </body>
</html>

```

#### Something like this will be visible

![image](https://user-images.githubusercontent.com/75433841/142921120-068c60e5-e886-4469-bde0-18804f309faa.png)

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
