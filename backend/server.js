const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv')
dotenv.config();

// require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
// const uri = "mongodb+srv://newuser01:12345@cluster0.7xf1ace.mongodb.net/practicefinals";
mongoose.connect(uri, { useNewUrlParser: true,  useUnifiedTopology: true   }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})


// import routes
const router = require('./routes/routes');

// adding /books to before all routes
app.use('/book', router);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});