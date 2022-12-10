const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const { application } = require('express');
 var multer = require('multer');
const app = express();

app.use(bodyParser.json());
 app.use(multer().any())
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://harsh:7534981251@projectnode.rzqgdbx.mongodb.net/Project2", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )



 app.use('/', route);

 app.use((req,res)=>{
    res.status(400).send({status:false,message:"request not found"})
})


app.listen(process.env.PORT || 3001, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3001))
});