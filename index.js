const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
const port = process.env.PORT || 3000;

// middleware
app.use(cors());
app.use(express.json());

// const uri = "mongodb+srv://<db_username>:<db_password>@cluster0.5fdvbil.mongodb.net/?appName=Cluster0";
const uri = "mongodb+srv://assignmentDb:CfaZq5nM93rE1D0S@cluster0.5fdvbil.mongodb.net/?appName=Cluster0";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});


app.get('/', (req, res) => {
  res.send('My server is running')
})

async function run() {
  try{
    await client.connect()
    await client.db('admin').command({ping: 1})
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  }
  finally{
     // optional: await client.close();
  }
}


run(console.dir);


app.listen(port, () => {  
  console.log(`My server is running on port: ${port}`);
});




// assignmentDb

// CfaZq5nM93rE1D0S