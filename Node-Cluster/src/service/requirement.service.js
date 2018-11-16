const data = require('../mock/mockData');

var requirementService =(function(){

    var publicObject = {};       

    publicObject.getRequirements = function(){                
        return data;
    }

    return publicObject;
})();

module.exports = requirementService;