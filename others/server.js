const express = require("express");
const mongoose = require("mongoose");

const app =express()
app.set('view engine', 'ejs')
app.use(express.static('public'));


const port = 3000


mongoose.connect('mongodb+srv://app:app1234@nodetuts.ol9xvlu.mongodb.net/test', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});


//app.get('/rare-beauty', (req, res) => {
  //const collection = db.collection('house');
  //collection
    //.find({})
    //.toArray()
    //.then((documents) => {
     
   
     
      
    
    //});
      
     //.catch((error) => {
      //console.error('Error fetching data:', error);
      //res.status(500).send('Internal Server Error');  
      
    // }
    
 // })


 app.get('/care-beauty', (req, res) => {
  const collection = db.collection('house');
  collection
    .find({})
    .toArray()
    .then((documents) => {
     // console.log(documents)
      res.render('../../../views/index.ejs', { documents: documents });
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
      res.status(500).send('Internal Server Error');
    });
});

// Example route to add a product to the cart
app.post('/', (req, res) => {
  const product = req.body; // Assuming you send the product data in the request body
  cart.push(product);
  res.json({ message: 'Product added to cart' });
});

// Example route to get cart contents
app.get('/cart', (req, res) => {
  res.json(documents);
});



// Start the server