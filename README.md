# Eat-The-Burger

## Description
Full stack logging app utilizing MySQL, Node, Express, Handlebars, jQuery, ORM, and a MVC design pattern.  

## Deployed URL: https://lit-castle-73053.herokuapp.com/  

![EatDaBurger Example](https://media.giphy.com/media/keZbUpvJqaaO5l55qU/giphy.gif)

## Script Features  
-SQL Database deployed with Heroku  
-Webpages viewed using Express Handlebars and Bootstrap  
-jQuery event handlers for AJAX calls  
-Controller route handling by sending AJAX data to Model, then renders Handlebars with callback results  
-Model calls functions and passes data to ORM for MySQL queries  

#### MVC Directory structure

```
.
├── config
│   ├── connection.js
│   └── orm.js
│ 
├── controllers
│   └── burgers_controller.js
│
├── db
│   ├── schema.sql
│   └── seeds.sql
│
├── models
│   └── burger.js
│ 
├── node_modules
│ 
├── package.json
│
├── public
│   └── assets
│       ├── css
│       │   └── style.css
│       └── img
│           └── burger.jpg
│   
│
├── server.js
│
└── views
    ├── index.handlebars
    └── layouts
        └── main.handlebars
```
