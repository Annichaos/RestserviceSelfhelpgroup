
//for the variables of the properties files, the once that are necaserry for writing an email. 
export fuction sendMail(body){
	import { greeting_en, message_en, messageDepresive_en, messageSadist_en, messageExperience_en, messageFainting_en } from "./properties_en.mjs";
	import { greeting_de, message_de, messageDepresive_de, messageSadist_de, messageExperience_de, messageFainting_de } from "./properties_de.mjs";
	
	import myXML from "./myXML.mjs";
	
	import nodemailer from ('nodemailer');
//const mailText = require('mailText');

let transport = nodemailer.createTransport({
    //host: 'mail.gmx.net',
	host: 'smtp.de.aol.com',
    port: 587,
	secure: true, //use TLS
    auth: {
       user: 'selbsthilfegruppe@aol.com',
       pass: 'korfu4ever'
    }
});

	// now import the right email texts for the language
	if (language == "english" ){

		greeting = greeting_en;
		message = message_en; 
		messageDepresive = messageDepresive_en ; 
		messageSadist = messageSadist_en ;
		messageExperience = messageExperience_en;
		messageFainting = messageFainting_de;

	}else if(language == "german" )
	{
		greeting = greeting_de;
		message = message_de; 
		messageDepresive = messageDepresive_de ; 
		messageSadist = messageSadist_de ;
		messageExperience = messageExperience_de;
		messageFainting = messageFainting_de;

	} else {	
		console.log(`language not found or not supported/`)
	}

	//read the variables from the XML received with REST service
	
		const { surname , name , salutation, language , email , personalityDamage, ExperienceType , experienceDescription , coment } = myXml.read(body)
		
	var mailText = ''. concat( greeting , name, ' ' , surname, '/' , message)
	if ( personalityDamage = "depresiv") {
		mailText = mailText.concat( messageDepresive );
 	}elseif( personalityDamage = "sadist" ){
		mailText = mailText.concat(messageSadist);
	}
	if ( messageExperience != "") {
		  mailText = mailText.concat( messageExperience )
		  if ( messageExperience == "fainting" ){
			mailText = mailText.concat( messageFainting );
		  }elseif( messageExperience == "death" ){
			mailText = mailText.concat( messageDeath );
		  }
		  , 
		mailText = mailText.concat( messageExperience );
	}
	mailText = mailText.concat( comment );
	
	const message = {
    from: 'annikabeissler@gmx.de', // Sender address
    to: 'idiosmart@gmx.de',         // List of recipients
    subject: 'Ihre Psyche wurde durch Brain Machine Technologie analysiert', // Subject line
    text: mailText // Plain text body
	};
		transport.sendMail(message, function(err, info) {
    if (err) {
      console.log(err)
    }
})
	
}