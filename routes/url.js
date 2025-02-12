const express = require('express');
const shortid = require('shortid');
const URL = require('../models/URL');
const authMiddleware = require('../middleware/authMiddleware');
// const client = require('../config/redis');
const router = express.Router();

const generateShortUrl = () => {
  return shortid.generate();
};

router.post('/shorten', authMiddleware, async (req, res) => {
  const { longUrl, customAlias, topic } = req.body;
  const userId = req.user.id;

  if (!longUrl) {
    return res.status(400).json({ error: 'longUrl is required' });
  }

  try {
    let shortUrl;

    if (customAlias) {
      
      
      shortUrl = customAlias;
    } else {
      shortUrl = generateShortUrl();
    }

    const newURL = await URL.create({
      userId,
      longUrl,
      shortUrl,
      customAlias: customAlias || null,
      topic
    });



    res.status(201).json({
      shortUrl: `${req.protocol}://${req.get('host')}/api/shorten/${shortUrl}`,
      createdAt: newURL.createdAt
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
 
    });
 



router.get('/shorten/:shortUrl', async (req, res) => {
  const { shortUrl } = req.params;

  // const cachedUrl = await client.get(alias);
  // if (cachedUrl) return res.redirect(cachedUrl);

  const url = await URL.findOne({ shortUrl });
  if (!url) return res.status(404).json({ error: 'URL not found' });

  
  res.redirect(url.longUrl);
});

module.exports = router;
