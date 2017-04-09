module.exports = {
  error: function (err, callback) {

    return this.say(`Error: ${err.message}`, callback);

  },
  say: function (body, callback) {
	  if(body.includes('<speak>')){
		callback(null, {
		  version: 'dev',
		  sessionAttributes: {},
		  response: {
			outputSpeech: {
			  type: 'SSML',
			  ssml: body || 'invalid response'
			},
			shouldEndSession: true
		  }
		});
	  }
	else{
		callback(null, {
		  version: 'dev',
		  sessionAttributes: {},
		  response: {
			outputSpeech: {
			  type: 'PlainText',
			  text: body || 'invalid response'
			},
			shouldEndSession: true
		  }
		});
	}
  }
};
