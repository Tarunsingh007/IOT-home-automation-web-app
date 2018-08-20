var express = require('express');
var router = express.Router();
var request=require('request');
/* GET home page. */

router.get('/', function(req, res, next) {
	request(`https://deepakkumarpandeychs.000webhostapp.com/getstatus1.php`,(error,response,body)=>{
		var Body=JSON.parse(body);
		if(error)
			console.log(error);
		console.log(Body);
	});
  res.render('index', { title: 'Home Automation App' });
});


router.post('/', function(req, res, next) {
	var valueac=req.body.ac;
	var valuefan=req.body.fan;
	var valuebulb=req.body.bulb;
	var valuecooler=req.body.cooler;
	if(valueac)
	{
		var id='1';
		if(valueac==="off")
			var status='Off';
		else
			var status='On';	
	}	
	if(valuefan)
	{
		var id='2';
		if(valuefan==="off")
			var status='Off';
		else
			var status='On';	
	}	
	if(valuebulb)
	{
		var id='3';
		if(valuebulb==="off")
			var status='Off';
		else
			var status='On';	
	}	
	if(valuecooler)
	{
		var id='4';
		if(valuecooler==="off")
			var status='Off';
		else
			var status='On';	
	}	
	request(`https://deepakkumarpandeychs.000webhostapp.com/updatestatus1.php?id=${id}&status=${status}`,(error,response,body)=>{
		if(error)
			console.log(error);
 	res.render('index', { title: 'Express'});
	});
 });


module.exports = router;
