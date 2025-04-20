const express = require("express");
const cors = require("cors");
const mongoose = require('mongoose');
const playerRoutes = require('./routes/player.routes.js');


require('dotenv').config();

const app = express();
app.use(cors()); // Allows all origins

app.use(express.urlencoded({extended: true, limit: '20mb', parameterLimit: 50000}));
app.use(express.json({limit: '20mb'}));

app.use('/api/players', playerRoutes);

app.get("/", (req, res) => {
    res.json({message: "Welcome to the Monopoly bank endpoint. For documentation or access please contact masterha@sheridancollege.ca"});
});

const PORT = process.env.PORT || 8080;
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect( MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=> console.log('MongoDB connected'))
.catch((err) => console.error('MongoDB not connected', err));



app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`);
})
