// make routes for shopping

const express = require('express');
/*
  The Router is an object on the base express module.
  This router object will have similar methods (.get, .post, .patch, .delete) to the 
  app object we have previously been using.
*/
const router = express.Router();
const items = [];
let id = 1;

router.get('', (req, res) => {
  return res.json(items);
});

router.post('', (req, res) => {
  // take form data and add shopping list item name and price
  items.push({
    name: req.body.name,
    price: req.body.price,
    id: ++id
  });
  return res.json({ message: 'shopping item created' });
});

router.get('/:id', (req, res) => {
  // display a single item's name and price
  // grab id by req.params.id
  const item = items.find(val => val.id === Number(req.params.id));
  return res.json(item);
});

// need to export so that app is made aware of routes
module.exports = router;
