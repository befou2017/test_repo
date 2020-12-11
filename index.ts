import express from 'express';
const app = express()
const PORT : string|number = process.env.PORT || 5000;
let xmlparser = require('express-xml-bodyparser');
app.use(xmlparser());

app.post('/api/vendor', function (req, res) {
   console.log(`PORT : ${PORT}</p>`);
   console.log(`req.query : ${JSON.stringify(req.query)}</p>`);
   console.log(`req.params : ${JSON.stringify(req.params)}`);
   console.log(`req.body : ${JSON.stringify(req.body)}`);
   console.log(`req.user : ${JSON.stringify(req.baseUrl)}`);
   console.log(`req.query : ${JSON.stringify(req.query)}`);
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
