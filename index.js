const express = require('express');
const app = express();  
const port = 3000;
const path = require('path');   
const User = require('./models/register'); 
const axios = require('axios');
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const methodOverride = require('method-override');
app.use(methodOverride('_method'));
const mongoose = require('mongoose');
require('dotenv').config();
async function main() {
    await mongoose.connect("mongodb+srv://GarvMakhija:myMongo123@cluster0.oegytkd.mongodb.net/CampusEvents?retryWrites=true&w=majority&appName=Cluster0"
, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      bufferCommands: false,
    });
    console.log( "Connected to MongoDB");
  }
main();

app.get('/', (req, res) => {                            //to render home page
    res.redirect('/events');     
});
app.get('/events', async (req, res) => {                   //to fetch all events
    res.render('index.ejs'); 
});
app.get("/register", (req, res) => {                     //to render registration page
    res.render("register.ejs"); 
});
app.post("/register", async (req, res) => {
  try {
    let { name, email, password, college } = req.body;
    let user = new User({ name, email, password, college });
    await user.save();
    res.redirect('/events');
  } catch (err) {
    res.status(500).send("Registration failed.");
  }
});
app.get("/mentors", (req, res) => {                     //to render registration page
    res.render("mentor.ejs"); 
});
app.get("/login", (req, res) => {                        //to render login page
    res.render("login.ejs"); 
});
app.post("/login", async(req, res) => {
    let { name, email, password, college } = req.body;          //to get data from registration form
    let user = new User({                //create new user object
        name: name,
        email: email,
        password: password,
        college: college
    });
    user.save().then(() => {
        console.log('User registered successfully');  //log success message
    }).catch(err => {
        console.log(err);                             //log error if any
    });
    res.redirect('/events');                              //redirect to events page after registration
});
app.get('/map', (req, res) => {                        //to render map page
    res.render('map.ejs'); 
});
app.listen(port, () => {
  console.log('Server is running ');
});

