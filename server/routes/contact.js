const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// POST /api/contact - save a new contact
router.post('/', async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'name, email and message are required' });
    }
    const contact = new Contact({ name, email, phone, message });
    await contact.save();
    res.status(201).json({ message: 'Message received' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});


module.exports = router;
