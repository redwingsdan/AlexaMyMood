const fs = require('fs');
const intents = {};

module.exports = function(params, callback) {

  let request = params.kwargs.request || {};

  if (!request.intent && params.args[0]) {
    request.intent = {
      name: params.args[0],
      slots: Object.keys(params.kwargs).reduce((slots, key) => {
        slots[key] = {name: key, value: params.kwargs[key]};
        return slots;
      }, {})
    };
  }

  let name = (request && request.intent && request.intent.name) || '*';
  let slots = (request && request.intent && request.intent.slots) || {};

  if (name !== '*' && !(name + '').match(/^[A-Z0-9\-]*$/i)) {
    return callback(new Error('Invalid intent name'));
  }

  if (!intents[name] && !fs.existsSync(`./alexa/intents/${name}.js`)) {
    return callback(new Error(`Could not find intent: ${name}`));
  }

  try {
    intents[name] = intents[name] || require(`./intents/${name}.js`);
  } catch (e) {
    return callback(new Error(`Could not load intent: ${name}`));
  }
	if('Order' == name){
		let size = slots["Size"].value;
		let flavor = slots["Flavor"].value;
		let food = slots["Food"].value;
		let loc = slots["Location"].value;
		//if(size != null && flavor != null && food != null){
			//return callback(new Error(`Received order: ` + (size || '') + ` ` + (flavor || '') + ` ` + (food || '')));
		//}
		//DO THIHNG TO CONNECT TO FORM TO ORDER FOOD
	}
  return intents[name](slots, callback);

};
