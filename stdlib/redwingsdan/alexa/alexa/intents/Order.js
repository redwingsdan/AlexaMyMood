const lib = require('lib');

module.exports = function (slots, callback) {

	let size = slots["Size"].value;
	let flavor = slots["Flavor"].value;
	let food = slots["Food"].value;
	let loc = slots["Location"].value;
  return callback(null, `Received order: ` + (size || '') + ` ` + (food || '') + ` with ` + (flavor || '') + ` as toppings` + ((", from " + loc) || '') );

};
