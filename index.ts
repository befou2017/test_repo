import express from 'express';
const app = express()
const PORT : string|number = process.env.PORT || 5000;
const bodyParser = require('body-parser');
require('body-parser-xml')(bodyParser);

app.use(bodyParser.xml({
   limit: '1MB',   // Reject payload bigger than 1 MB
   xmlParseOptions: {
     normalize: true,     // Trim whitespace inside text nodes
     normalizeTags: true, // Transform tags to lowercase
     explicitArray: false // Only put nodes in array if >1
   }
 }));

app.post('/api/vendor', function (req, res) {
   console.log(`req.body : ${JSON.stringify(req.body)}`);
   console.log(`req.body : ${req.body}`);
   console.log(`req.body.vendorID : ${req.body.vendorID}`);
   console.log(req.body);
   console.log(`req.headers : ${JSON.stringify(req.headers)}`);
   
   res.send(`<h1>Welcome to your simple server! Awesome right</h1> ${JSON.stringify(req.params,null,1)}`);
});

app.use("*",(req, res) =>{

    //res.send(`<h1>Welcome to your simple server! Awesome right</h1> ${JSON.stringify(req.params,null,1)}`);

    console.log(`req.query : ${JSON.stringify(req.query)}</p>`);

   console.log(`req.params : ${JSON.stringify(req.params)}`);
   console.log(`req.body : ${JSON.stringify(req.body)}`);
   console.log(`req.user : ${JSON.stringify(req.baseUrl)}`);
   console.log(`req.query : ${JSON.stringify(req.query)}`);
   console.log(`req.headers : ${JSON.stringify(req.headers)}`);

});

app.listen(PORT,() => console.log(`hosting @${PORT}`));
