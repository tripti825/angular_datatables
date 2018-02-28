/*MOCK BACKEND*/

const express = require('express');
const router = express.Router();
var path = require("path"),
	http = require('http'),
    util = require('util'),
    jsonfile = require('jsonfile'),
    fs = require('fs'),
    multer = require('multer'),
    async = require('async'),
    fileSchema = require('../models/File.js'),
    userSchema = require('../models/User.js'),
    appdataSchema = require('../models/Appdata.js');
 
 /********multer setting*********/
 var uploadPath = path.join(__dirname, '../../uploads');

 var storage = multer.diskStorage({
  // destination
  destination: function (req, file, cb) {
    cb(null, uploadPath)
  },
  filename: function (req, file, cb) {
    let extArray = file.mimetype.split("/");
    let extension = extArray[extArray.length - 1];
    cb(null, file.fieldname + '-' + Date.now()+ '.' +extension)
  }
});
var upload = multer({ storage: storage });
/********multer setting*********/

/* api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

/*File*/
router.post('/file/create', upload.array("file", 12), (req, res) => {
	var obj = {};
	obj = {originalName: req.files[0].originalname,
		fileName: req.files[0].filename,
		path: "/"+req.files[0].filename};

	var newfile = new fileSchema(obj);
	newfile.save(function(err, file){
		if(err){res.json({status: 400, data: [], message: "ERROR :"+err})}
		res.json({status: 200, data: file, message: "file created"});
	})
		
});

router.post('/file/read', (req, res) => {
	fileSchema.find({}, function(err, files){
		if(err){res.json({status: 400, data: [], message: "ERROR :"+err})}
		res.json({status: 200, data: files, message: "file list"});
	})
});

router.post('/file/delete', (req, res) => {
	var packet = req.body.packet;
	fileSchema.findByIdAndRemove(packet.id, function(err, file) {
		if(err){res.json({status: 400, data: [], message: "ERROR :"+err})}
		fs.unlink(path.join(__dirname, '../../uploads')+'/'+file.fileName, (err) => {
  			if (err) throw err;
			res.json({status: 200, data: file, message: "file deleted"});
  		});
		
	})
	
});

router.post('/file/update', (req, res) => {
	var packet = req.body.packet;
	fileSchema.findByIdAndUpdate(packet.id, {originalName: packet.name}, {new: true}, function(err, file) {
		if(err){res.json({status: 400, data: [], message: "ERROR :"+err})}
		res.json({status: 200, data: file, message: "file updated"});
  				
	})
	
});

/*User*/
router.post('/user/create', (req, res) => {
	var packet = req.body.packet;
	var obj = {};
	obj = {
		name: packet.name,
		username: packet.username,
		password: packet.password
	}

	var newUser = new userSchema(obj);
	newUser.save(function(err, user){
		if(err){res.json({status: 400, data: [], message: "ERROR :"+err})}
		res.json({status: 200, data: user, message: "user created"});
	})
});

router.post('/user/login', (req, res) => {
	var packet = req.body.packet;
	userSchema.find(packet, function(err, user) {
		if(err){res.json({status: 400, data: [], message: "ERROR :"+err})}
		else if(user.length == 0) {res.json({status: 400, data: [], message: "ERROR :"+err})}
		else res.json({status: 200, data: user, message: "user login successful"});
	})
});

/*Appdata*/
router.post('/appdata/read', (req, res) => {
	var packet = req.body.packet;
	var options = req.body.options;
	appdataSchema.paginate(packet, options, function(err, data){
		if(err){res.json({status: 400, data: [], message: "ERROR :"+err})}
		res.json({status: 200, data: data, message: "app data"});
	})
});

router.post('/appdata/delete', (req, res) => {
	var packet = req.body.packet;
	var options = req.body.options;
	appdataSchema.findByIdAndRemove(packet.id, function(err, data) {
		if(err){res.json({status: 400, data: [], message: "ERROR :"+err})}
		res.json({status: 200, data: data, message: "record deleted"});
  				
	})
});

router.post('/appdata/update', (req, res) => {
	var packet = req.body.packet;
	var options = req.body.options;
	appdataSchema.findByIdAndUpdate(packet.id, options, {new: true}, function(err, record) {
		if(err){res.json({status: 400, data: [], message: "ERROR :"+err})}
		res.json({status: 200, data: record, message: "record updated"});
  				
	})
});

router.post('/appdata/fetch', (req, res) => {
	var packet = req.body.packet;
	var options = req.body.options;
	var result = [];
	
	appdataSchema.schema.eachPath(function(path) {
	    if(path.charAt(0) != '_') {
	    	result.push(path);
	    }
	});

	res.json({status: 200, data: result, message: "columns fetched"});
	
})

router.post('/appdata/search', (req, res) => {
	var packet = req.body.packet;
	var options = req.body.options;
	appdataSchema.find(packet, function(err, record) {
		if(err){res.json({status: 400, data: [], message: "ERROR :"+err})}
		res.json({status: 200, data: record, message: "record found"});
  		
	});

});


module.exports = router;