const express = require("express");
const Item = require("./Item_model");  

/**
 * get all items
 * @param {*} req 
 * @param {*} res 
 */
const getItems = async (req, res) => {
  try {
    const items = await Item.find().then((items) => {
      res.status(200).json(items);
    }).catch((err) => {
      res.status(400).json({ error: err.message });
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const addItem = async (req, res) => {
  try {
    const {itemName, itemPrice, itemDescription, itemImage} = req.body;
    const newItem = new Item({itemName, itemPrice, itemDescription, itemImage});
    const savedItem = await newItem.save();
    res.status(200).json(savedItem);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

module.exports = { getItems, addItem };