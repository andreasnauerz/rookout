const rookout = require('rookout/openwhisk');

rookout.connect('cloud.agent.rookout.com', 443, '6771d7318fd83852f48b39009e73eadeff7f3f364044c07f0cafe29ebf3f5f14');

exports.main = rookout.wrap(
    function main(params) {
    	return { message: 'Hello World' };
    }
);