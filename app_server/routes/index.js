var express = require('express');
var router = express.Router();
//var ctrlMain = require('../controllers/main'); 
var ctrlLocations = require('../controllers/locations'); 
var ctrlOthers = require('../controllers/others'); 

/* GET home page. */

/* Location pages */

router.get('/', ctrlLocations.homelist); 
router.get('/locations', ctrlLocations.locationInfo); 
router.get('/locations/review/new', ctrlLocations.addReview); 

/* Other pages*/
router.get('/about', ctrlOthers.about); 

module.exports = router;
