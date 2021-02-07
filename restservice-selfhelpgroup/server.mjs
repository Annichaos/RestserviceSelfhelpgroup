
const express = require("express"); 
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());

// to recaive REST messages that are containig all the information wee require to give someone the advice to seek a therapist, we use post.
/*const getVarMail = ( (req, res) => { export body = req.body; };
const sendResponceOK = (req, res) => {  res.send("Responce :200"); } ); // ToDo StandartREST responce
*/
app.post( req , res ) => { export body = req.body; res.send("Responce :200");}

//( getVarMail , sendResponceOK );

sendMail(body);

