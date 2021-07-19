const express = require('express');
const cors = require('cors');
const {getContact, createContact, updateContact, deleteContact} = require('./pages');
const app = express();

app.use(cors());
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.get('/', (req,res) => {
  res.send('Server jalan');
});
app.get('/contact',getContact);
app.post('/contact',createContact);
app.put('/contact',updateContact);
app.delete('/contact/:id', deleteContact);

app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(400).json({
    message: err.message,
  });
})

app.listen(process.env.PORT || 3001, () => {
  console.log('Server listening')
})