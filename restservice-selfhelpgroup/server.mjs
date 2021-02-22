import express from 'express' // require doesn't work for esm modules
import * as bodyParser from "body-parser"
import xml from "body-parser"
import urlencoded from "body-parser"
import xml2js from "xml2js";
import fs from "fs";
const parser = new xml2js.Parser({ attrkey: "ATTR" });


const app = express();
var body = "";
var experience;


import sendTheMail from "./sendingmail.mjs";

// the request to the post method should be parsed as xml
app.use(xml({
    limit: '1MB', // Reject payload bigger than 1 MB 
		xmlParseOptions: {
			normalize: true, // Trim whitespace inside text nodes 
			normalizeTags: false, // Transform tags to lowercase 
			explicitArray: false // Only put nodes in array if >1 
		}
	})
	);
app.use(urlencoded({extended: true}));
app.use(express.static("public"));

// programming the post method

app.post("/restservice-selfhelpgroup", ( req , res ) => { body = req.query.body; console.log("received") ; sendTheMail(body) ; res.status(200).end()})

app.listen(5000, () => {  console.log(`Server is running on port 5000.`)});

