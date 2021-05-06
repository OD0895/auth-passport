const jwt = require("jsonwebtoken");

const [, , option, secret, nameOrToken] = process.argv;

console.log('=>', process.argv );

if (!option || !secret || !nameOrToken) {
  return console.log("Missing arguments");
}

function signToken(payload, secret) {
  return jwt.sign(payload, secret);
}

function verifyToken(token, secret) {
  return jwt.verify(token, secret);
}

if (option == "sign") {
  console.log(signToken({ sub: nameOrToken }, secret));
} else if (option == "verify") {
  console.log(verifyToken(nameOrToken, secret));
} else {
  console.log('Option needs to be "sign" or "verify"');
}

//call genera token
//node jwt-utilities/index.js sign secret osvaldo

//call verifica token
//node jwt-utilities/index.js verify secret eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJvc3ZhbGRvIiwiaWF0IjoxNjIwMjYxODI5fQ.pKQWNCvleXzG-FpC3Ee1Mea1PUrHFfHrbxwWPMIa2hQ
