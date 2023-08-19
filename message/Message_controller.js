const express = require("express");
const Message = require("./Message_model");  

/**
 * add new message
 */
const addMessage = async (req, res) => {
  try {
    const { email, contact, message} = req.body;
    const newMessage = new Message({ email, contact, message});
    const savedMessage = await newMessage.save();
    res.status(200).json(savedMessage);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

module.exports = addMessage;

