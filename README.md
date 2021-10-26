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

Add the following style to the header tag
```html
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
    <title>Title</title>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    
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


![new timetable](https://user-images.githubusercontent.com/75433841/138961247-a5e6f541-1df3-4127-8b03-ae6c8af16851.png)

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
