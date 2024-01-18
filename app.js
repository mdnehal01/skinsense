const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
let {PythonShell} = require('python-shell')



const { MongoClient, ServerApiVersion } = require('mongodb');
const url = "mongodb+srv://mdnehalakhlaque43:nehal@clusteribm.mj2pthi.mongodb.net/?retryWrites=true&w=ma.net/?retryWrites=true&w=jority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(url, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

  

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", function(req, res){
    res.render('index');
});


app.get("/quizSkin", function(req, res){
    res.render('qzskin')
})
// document.getElementById("ans").innerHTML=1;

app.get("/quizHair", function(req, res){
    res.render('quizHair')
})


app.get("/login", function(req, res){
    res.render('login')
})


app.get("/signup", function(req, res){
    res.render('signup')
})


app.post('/signup', async function(req, res){

    const data = req.body;
    console.log(data)

    const dbName = "UserData";  pyshell.end(function (err,code,signal) {
        if (err) throw err;
        console.log('The exit code was: ' + code);
        console.log('The exit signal was: ' + signal);
        console.log('finished');
      });
        
    });
    

    async function run() {
        try {
            // Connect to the Atlas cluster
            await client.connect();
            const db = client.db(dbName);

            // Reference the "signup" collection in the specified database
            const col = db.collection("signup");

            // Check if the email already exists
            const existingUser = await col.findOne({ "Email": data.email });

            if (existingUser) {
                // Email already exists, reject signup
                console.log("User with this email already exists.");
                 // You can render a rejection page or redirect as needed
            } else {
                // Create a new document
                let personDocument = {
                    "Name": data.name,
                    "Age":data.age,
                    "Email": data.email,
                    "Password": data.password,
                };

                // Insert the document into the specified collection
                const result = await col.insertOne(personDocument);
                console.log("User registered successfully:", result.insertedId);
                res.render("indexLogin");
            }
        } catch (err) {
            console.log(err.stack);
        } finally {
            await client.close();
        }
    }
    "express");
    const bodyParser = require("body-parser"
    await run().catch(console.dir);
});




app.post("/predict", function(req, res){
    const data = req.body;
    const input1 = [data.age, data.gender, data.concerns, data.darkPatches, data.darkSpots, data.tanned, data.fineLine, data.wrinkles, data.beards];

    let pyshell = new PythonShell('app.py');

    pyshell.send(input1);

    
    pyshell.on('message', function (message) {
        // received a message sent from the Python script (a simple "print" statement)
        console.log(message);
        let result = ""
        let imagewa = ""

        const array = message.split(' ');
        if(array[0]=='sensitive'){
            result = "You have sensitive skin"
            imagewa = "/images/Serum.png"
        }

        else if(array[0]=='Normal'){
            result = "You have Normal skin"
            imagewa = "/images/Serum.png"
        }

        console.log(input1);
        res.render('answer', {result:result, imagewa:imagewa})
    });
  
  // end the input stream and allow the process to exit
  pyshell.end(function (err,code,signal) {
    if (err) throw err;
    console.log('The exit code was: ' + code);
    console.log('The exit signal was: ' + signal);
    console.log('finished');
  });
    
});




app.post("/predictHair", function(req, res){
    const data = req.body;
    console.log(data)
    const inputHair = [data.age, data.gender, data.dandruff, data.hairType, data.thickness, data.volume, data.scalp, data.loss, data.medication, data.exposed]
    let pyshell = new PythonShell('appHair.py');
    let preference = data.values;
    pyshell.send(inputHair);

    console.log(inputHair);
    pyshell.on('message', function (message) {
        // received a message sent from the Python script (a simple "print" statement)
        console.log(message);
        let resultHair = message;
        const inputString = resultHair;

        let resultH=""
        let resultScalp = ""
        let product = ""
        let name = data.name;
// Remove square brackets and split the string by periods and spaces
const values = inputString.replace(/\[|\]/g, '').split('. ');

// Convert the string values to integers
const integerArray = values.map(Number);
console.log(integerArray)

        if(integerArray[0]==1. && integerArray[1]==0. && integerArray[2]==0.){
            resultH = "Mild"
        }

        else if(integerArray[0]==0. && integerArray[1]==1. && integerArray[2]==0.){
            resultH = "No Damage"
        }

        else if(integerArray[0]==0. && integerArray[1]==0. && integerArray[2]==1.){
            resultH = "High"
        }


        if(integerArray[3]==1. && integerArray[4]==0. && integerArray[5]==0.){
            resultScalp= "Mild"
        }

        else if(integerArray[3]==0. && integerArray[4]==1. && integerArray[5]==0.){
            resultScalp = "No Damage"
        }

        else if(integerArray[3]==0. && integerArray[4]==0. && integerArray[5]==1.){
            resultScalp= "High"
        }
        

        if(integerArray[6]==1. && integerArray[7]==0. && integerArray[8]==0. && integerArray[9]==0.){
            product = "Regular Hair and Scalp Care Products"
        }

        else if(integerArray[6]==0. && integerArray[7]==1. && integerArray[8]==0. && integerArray[9]==0.){
            product = "Specialized Hair Treatment Products"
        }

        else if(integerArray[6]==0. && integerArray[7]==0. && integerArray[8]==1. && integerArray[9]==0.){
            product = "Specialized Hair and Scalp Treatment Products"
        }

        else if(integerArray[6]==0. && integerArray[7]==0. && integerArray[8]==0. && integerArray[9]==1.){
            product = "Specialized Scalp Treatment Products"
        }

        res.render('answerHair', {resultH:resultH, resultScalp:resultScalp, product:product, name:name})
    });
  
  // end the input stream and allow the process to exit
  pyshell.end(function (err,code,signal) {
    if (err) throw err;
    console.log('The exit code was: ' + code);
    console.log('The exit signal was: ' + signal);
    console.log('finished');
  });
    
});



app.listen(5000, function(){
    console.log("Server started running on port 5000");
});
