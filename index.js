import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const port = 8080;
const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
const urlToFetch = "https://bored-api.appbrewery.com";
let response = null; // This variable is renamed later in the code
let err = null;

app.post("/select", async (req, res) => {
    let whatToDo = req.body["activity"];
    let howManyPpl = req.body["participants"];

    try {
        if(whatToDo !== "" && howManyPpl !== ""){
            response = await axios.get(urlToFetch + `/filter?type=${whatToDo}&participants=${howManyPpl}`);
        }else if (whatToDo!==""){
            response = await axios.get(urlToFetch + `/filter?type=${whatToDo}`);
        }else if (howManyPpl!==""){
            response = await axios.get(urlToFetch + `/filter?participants=${howManyPpl}`);
        }else{
            response = await axios.get(urlToFetch + "/random");
        }

    } catch (error) {
        err = error;
        // res.status(500).redirect("/")
    }
    res.status(300).redirect("/")
});

app.get("/", async (req, res) => {
    try {
        if (response === null) {
            response = await axios.get(urlToFetch + "/random");
        }
        
        response = response.data

        if (response.length > 1) {
            const randomIndex = Math.floor(Math.random() * response.length);
            const randomlySelectedElement = response[randomIndex];
            response = randomlySelectedElement;
        }

        res.render("index.ejs", {
            err,
            data: response,
            types: ["education", "recreational", "social", "charity", "cooking", "relaxation", "busywork"],
            ppl: 8,
        });
        err = null;
        response = null;
    } catch (error) {
        console.error("Failed to make request:", error.message);
        res.status(500).send("Failed to fetch activity. Please try again");
    }
});

app.listen(port, (err) => {
    if (err) throw err;
    console.log("Server is running on port: " + port);
});
