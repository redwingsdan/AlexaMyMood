const lib = require('lib');
const mysql = require('mysql');

var connection = mysql.createConnection({
	host: 'mymood.ccijkzzsyrig.us-west-2.rds.amazonaws.com',
	user: 'olawale',
	password: 'bitcamp1234',
	port:'3306',
	database: 'innodb',
	multipleStatements: true
});

connection.connect(function(err){
		
	if(err){
		console.log("could not connect to db\n");
		//return callback(null, "Failed to connect to database");
	}
});
//var sqlvar = 'SET @emotion = \"' + "sad" + \";";
connection.query('call get_song(' + '\"happy\"' + ')',function(err, results){

	//return callback(null, "executed query successfully");
	if(err){
		console.log("could not execute query\n");
		//return callback(null, "Failed to execute query");
	}
	console.log(results[0][0].filename);
	//return callback(null, "executed query successfully");
	//return callback(null, results[0].filename);
});
connection.end();
	