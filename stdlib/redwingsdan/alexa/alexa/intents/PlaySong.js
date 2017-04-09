const lib = require('lib');
const mysql = require('mysql');


module.exports = function (slots, callback) {
	var connection = mysql.createConnection({
		host: 'mymood.ccijkzzsyrig.us-west-2.rds.amazonaws.com',
		user: 'olawale',
		password: 'bitcamp1234',
		port:'3306',
		database: 'innodb'
		});

	var filename = "default";
	let emotion = slots["Song"].value;
	connection.connect(function(err){
		
		if(err){
			return callback(null, "Failed to connect to database");
		}
	});
	connection.query('call get_song(' + '\"' + emotion +'\"' + ')',function(err, results){
	
		if(err){
			return callback(null, "Failed to execute query");
		}
		
		filename = results[0][0].filename;
		connection.end();
		var filepath = 'https://s3.amazonaws.com/danmusicforskills/' + filename;
		return callback(null, `<speak><audio src='${filepath}'/></speak>`);
	
	});
};
