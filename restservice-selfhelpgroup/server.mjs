import sendMail from "./sendingMail.mjs";

const express = require("express"); 
const bodyParser = require("body-parser");
const app = express();

// the request to the post method should be parsed as xml
app.use(bodyParser.xml());

// programming the post method
app.post("/restservice-selfhelpgroup", ( req , res ) => { let body = req.body; res.status(200).end();})

var experience = body.experience;
console.log(experience)
//sendMail(body);

