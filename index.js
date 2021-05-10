const express = require('express');
const path = require ('path');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/nodekb');
let db = mongoose.connection;
// init app
const app = express();

// load view engine
app.set('views',path.join(__dirname,'views'));
app.set('view engine','pug')

// Home route
app.get('/',function(req,res){
    let articles = [
        {
            id:1,
            title:'article',
            author:'zargha',
            body:'article one'
        },
        {
            id:2,
            title:'article 2',
            author:'asad',
            body:'article 2'
        },
        {
            id:1,
            title:'article 3',
            author:'zarg',
            body:'article 3'
        },
  
    ];
    res.render('index',{
        title: 'Articles',
        articles: articles
    });
});

// adding route
app.get('/articles/add',function(req,res){
    res.render('add_articles',{
        title: 'Add articles'
    });
});
// Add submit post route
app.post('/articles/add',function(req,res){
    console.log('submitted');
    return;
});
// start server
app.listen(3000,function(){
    console.log('server startred ')
}

)