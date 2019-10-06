// make routes for shopping

const express = require('express');
/*
  The Router is an object on the base express module.
  This router object will have similar methods (.get, .post, .patch, .delete) to the 
  app object we have previously been using.
*/
const router = express.Router();
let items = [];
let id = 1;

router.get('', (req, res) => {
  return res.json(items);
});

router.post('', (req, res) => {
  // take form data and add shopping list item name and price
  items.push({
    name: req.body.name,
    price: req.body.price,
    id: id++
  });
  return res.json({ message: 'shopping item created' });
});

router.get('/:id', (req, res) => {
  // display a single item's name and price
  // grab id by req.params.id
  const item = items.find(val => val.id === Number(req.params.id));
  return res.json(item);
});

router.patch('/:id', (req, res) => {
  // update a single item's name and/or price
  // grab id by req.params.id and change items accordingly
  const foundItem = items.find(val => val.id === Number(req.params.id));
  foundItem.name = req.body.name ? req.body.name : foundItem.name;
  foundItem.price = req.body.price ? req.body.price : foundItem.price;
  // return request in JSON
  return res.json(foundItem);
});

// delete
router.delete('/:id', (req, res) => {
  items = items.filter(item => item.id !== Number(req.params.id));
  return res.json({ message: 'deleted item' });
});
// need to export so that app is made aware of routes
module.exports = router;
