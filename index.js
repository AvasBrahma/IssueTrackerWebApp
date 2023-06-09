const express=require('express');
const app=express();
const methodOverride=require('method-override');
const port=8000;
const db=require('./config/mongoose');
const expressLayouts=require('express-ejs-layouts');
const flash = require('connect-flash');
const session=require('express-session');


app.listen(port, function(err){
   if(err){
    console.log(`Error in running the server: ${err}`)
   }

   console.log(`Server Running on Port: ${port}`);
})

app.use(express.urlencoded());
app.use(methodOverride('_method'));
app.use(express.static('./assets'));


//express ssession
app.use(
   session({
      secret: 'secret',
      resave: false,
      saveUninitialized:true,
      cookie:{
         maxAge: 1000 * 60 * 60 * 24 * 7, // 1 week
      }
   })
);

app.use(flash({sessionKeyName: 'flashMessage'}));

app.use(expressLayouts);


app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

app.set('view engine', 'ejs')
app.set('layout', './layouts/main');










app.use('/', require('./routes'));
