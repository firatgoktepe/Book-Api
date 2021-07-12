const express = require("express");
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

app.use(express.urlencoded({extended: true})); 
app.use(express.json());

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, X-Requested-With, Origin');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    next();
});

app.use(
    cors({
             credentials: true,
             origin: true
         })
);
app.options('*', cors());

mongoose.connect('mongodb+srv://firatgoktepe:123456**@testtodoapidb.yxqi0.mongodb.net/test',
    {useNewUrlParser: true,
        useUnifiedTopology: true}, () => console.log('connection is established'));

require("./controllers/book-controller")(app);

app.listen(process.env.PORT || 3000, () => {
    console.log("Server is running @3000 ...")
    }
);
