const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors()); // Allows all origins

app.use(express.urlencoded({extended: true, limit: '20mb', parameterLimit: 50000}));
app.use(express.json({limit: '20mb'}));



app.get("/", (req, res) => {
    res.json({message: "Welcome to the Monopoly bank endpoint. For documentation or access please contact masterha@sheridancollege.ca"});
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`);
})
