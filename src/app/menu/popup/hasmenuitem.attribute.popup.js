
const { PopUpAttributeHolder } = require('./popup.attribute.holder');

class HasMenuItemAttributeMenu extends PopUpAttributeHolder {

    constructor(attributesMap) {
        super(attributesMap, 'hasMenuItem');
    }

    attribute(entity) { 
        super.attribute(entity);
        return entity['menuitem'].length > 0;

    }

}

let attribute = 'hasMenuItem';

module.exports.init = (attributesMap) => new HasMenuItemAttributeMenu(attributesMap);
module.exports.attribute = attribute;