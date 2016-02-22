

var EXPRESS = require('express');
var BODYPARSER = require('body-parser');
var HTTP = require('http');
var MONGOOSE = require('mongoose');


var BOOKMARK = require('./models/bookmark');

var port = process.env.PORT || 8080;

var DBOptions = {};

var db = MONGOOSE.createConnection('mongodb://localhost/cmrit', DBOptions);

db.on('error', function (err) { 
	console.log("Error connecting to mongodb in cronjob, error message : %s", err);
});

MONGOOSE.connect('mongodb://localhost/cmrit');

var APP = EXPRESS();

APP.use(BODYPARSER.urlencoded({
	extended : true
}));

APP.use(BODYPARSER.json());

var router = EXPRESS.Router(); // middleware to use for all requests

router.use(function(req, res, next) {
	next();

});


router.get('/', function(req, res) {
	res.json({
		message : 'welcome to our api!',
		requestStatus : 1
	});
});

router.route('/addtolist/').post(function(req, res) {
	var bookmark = new BOOKMARK();
	bookmark.url = req.body.url;
	console.log(req.body.url);

	bookmark.save(function(err, addedBookmark) {
		if(err) {
			console.log("Problem in adding the url to mongo db");
			res.json({
				"message" : "Problem in adding to bookmark list!",
				"requestStatus": 0
			});
		} else {
			res.json({
				"message" : "Successfully added bookmark!",
				"requestStatus": 1
			});
		}
	});
});

router.route('/makeitread/').post(function(req, res) {
	BOOKMARK.findOne({
		url : req.body.url,
	}, function(err, readBookmark){
		if(err) {
			res.json({
				"message" : "Problem in finding bookmark!",
				"requestStatus": 0
			});
		} else {
			if(readBookmark) {
				readBookmark.read = true;
				readBookmark.save(function(err, savedRead) {
					if(err) {
						res.json({
							"message" : "Problem in writing to db!",
							"requestStatus": 0
						});
					} else {
						res.json({
							"message" : "Bookmark converted to read!",
							"requestStatus": 1
						});		
					}
				});
				
			} else {
				res.json({
					"message" : "Bookmark not found!",
					"requestStatus": 0
				});
			}
		}
	});
});

router.route('/bookmarks/').get(function(req, res) {
	
	BOOKMARK.find({}, function(err, bookmarks) {
		if(err) {
			console.log("Problem in connecting to mongo db");
			res.json({
				"message" : "Problem in fetching bookmark list!",
				"requestStatus": 0
			});
		} else {
			res.json({
				"bookmarks" : bookmarks,
				"message" : "Successfully added bookmark!",
				"requestStatus": 1
			});
		}
	});
});

APP.use('', router);

APP.listen(port, function(){
	console.log("server started at port "+ port);
});
