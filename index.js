const rookout = require('rookout/openwhisk');

rookout.connect('cloud.agent.rookout.com', 443, '6771d7318fd83852f48b39009e73eadeff7f3f364044c07f0cafe29ebf3f5f14');

exports.main = rookout.wrap(
    function main(params) {
    	console.log("params.name: " + params.name);
    	console.log("params.place: " + params.place);

    	if (params.name == null) {
    		throw new Error("Expected parameter name is null");
    	}

    	if (params.place == null) {
    		throw new Error("Expected parameter place is null");
    	}

    	return { message: "Hello " + params.name +  " from " + params.place };
    }
);