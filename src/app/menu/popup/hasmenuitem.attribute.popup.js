
const { PopUpDomain } = require('./popup.domain');

class HasMenuItemAttributeMenu extends PopUpDomain {

    constructor(attributesMap) {
        super(attributesMap, 'hasMenuItem');
    }

    attribute({source, entity}) { 
        super.attribute({source, entity});
        return source['menuitem'].length > 0;

    }

}

let attribute = 'hasMenuItem';

module.exports.init = (attributesMap) => new HasMenuItemAttributeMenu(attributesMap);
module.exports.attribute = attribute;