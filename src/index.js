//import logger from './tools.js'
//logger("Welcome! We are now having fun with modularity");

//import logger, {appName, dummyFunction} from './tools.js';
//logger("Welcome! The application name is " + appName + ". There is a function that returns " + dummyFunction() );

//import logger, {appName, dummyFunction} from './tools.js';
//logger(`Welcome! The application name is "${appName}". There is
//a function that returns "${dummyFunction()}".`);

//import logger, {appName, dummyFunction} from './tools.js';
//logger(`Welcome! The application name is "${appName}".
//There is a function that returns "${dummyFunction()}".`);

//import logger, {appName, dummyFunction}
//from './tools.js'
//logger(`Welcome! The application name is "${appName}". There is a function
//that returns "${dummyFunction()}".` );

// index.js

import logger from './tools.js'; // Assuming default export in tools.js
const addressees = [
  "John Uzo”", // Double-check the extra quotation mark here
  "Mary Smart",
  "Paul Umoh"
];
addressees.map(addressee => {
  let message = `Dear ${addressee},
It is my pleasure to inform you that your admission letter is ready for collection.
Sincerely,
The Admissions Team`; // Notice the proper newline characters
  logger(message);
});

