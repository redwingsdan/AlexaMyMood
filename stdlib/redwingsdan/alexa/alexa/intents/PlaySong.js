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
	if(slots && slots["Song"] && slots["Song"].value){
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
		if(results && results[0] && results[0][0] && results[0][0].filename){
		filename = results[0][0].filename;
		var songname = filename.slice(0,-4);
		connection.end();
		
		var filepath = 'https://s3.amazonaws.com/danmusicforskills/' + filename;
		if(songname === "johncena"){
			return callback(null, `<speak>Youre in big trouble now. Theres only one man who can contain this kind of excitement.<audio src='${filepath}'/></speak>`);
		}
		else{
			return callback(null, `<speak>Now Playing, ${songname}<audio src='${filepath}'/></speak>`);
		}
		}
		else{
			return callback(null, `I could not recognize that emotion, please learn how to feel properly.`);
		}
	});
	}
	else{
		return callback(null, `I could not recognize that emotion, please learn how to feel properly.`);
	}
};
