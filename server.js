import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const API_URL = "http://localhost:4000";

app.use(bodyParser.urlencoded({extended: true}));

//uses axios to get the data back from the API, and rendering it onto the index.ejs(frontend)
app.get("/", async (req, res) =>{
    const result = await axios.get(API_URL + "/books");
    res.render("index.ejs", {content: result.data});
    console.log(result);
});

//using the POST method to send the data from the client to the API. 
app.post("/edit", async (req, res) =>{
    const result = await axios.post(API_URL + "/books", req.body);
    res.redirect("/");
})

app.listen(port, ()=>{
    console.log(`server running on port ${port}`);
})