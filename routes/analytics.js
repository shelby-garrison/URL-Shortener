const express = require('express');
const URL = require('../models/URL');
const router = express.Router();
const { getOverallAnalytics, getTopicAnalytics, getUrlAnalytics } = require ("../controllers/AnalyticsController");
const authMiddleware = require('../middleware/authMiddleware');
const limiter = require('../middleware/rateLimit');


router.get("/analytics/:alias", authMiddleware, limiter, getUrlAnalytics);
router.get("/analytics/topic/:topic",authMiddleware, limiter, getTopicAnalytics); 
router.get("/overallAnalytics", authMiddleware, limiter, getOverallAnalytics); 

module.exports = router;
