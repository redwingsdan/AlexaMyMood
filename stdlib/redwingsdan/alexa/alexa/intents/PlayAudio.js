const lib = require('lib');
module.exports = function (slots, callback) {
	let want  = slots["Want"].value;
	let person  = slots["Person"].value;	
	if('Favorite' == want || 'favorite' == want){
		if('Wale' == person || 'wale' == person || "Wale's" == person || "wale's" == person){
			return callback(null, `<speak>Now playing, Wale's favorite song<audio src='https://s3.amazonaws.com/danmusicforskills/ShapeofYou.mp3'/> </speak>`);
		}
		else{
			return callback(null, `<speak>Now playing, Dan's favorite song<audio src='https://s3.amazonaws.com/danmusicforskills/BreakingBenjaminBreathshort.mp3'/> </speak>`);
		}
	}
	else if('Funny' == want || 'funny' == want){
		return callback(null, `<speak>Now playing, a funny song<audio src='https://s3.amazonaws.com/danmusicforskills/johncena.mp3'/> </speak>`);
	}
	else if('Drunk' == want || 'drunk' == want){
		return callback(null, `<speak>Now playing, a song drunk people play<audio src='https://s3.amazonaws.com/danmusicforskills/TitanicFlute.mp3'/> </speak>`);
	}
	else if('That' == person || 'that' == person){
		return callback(null, `<speak>Now playing, Kayley's song<audio src='https://s3.amazonaws.com/danmusicforskills/PlayThatSong.mp3'/> </speak>`);
	}
};
