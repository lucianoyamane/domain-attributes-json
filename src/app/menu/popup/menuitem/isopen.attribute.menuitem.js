
const { MenuItemAttributeHolder } = require('./menuitem.attribute.holder');

class IsOpenAttributeMenu extends MenuItemAttributeHolder {

    constructor(attributesMap) {
        super(attributesMap, attribute);
    }

    attribute(entity) { 
        super.attribute(entity);
        return entity['value'] === 'Open';

    }

}

let attribute = 'isOpen';

module.exports.init = (attributesMap) => new IsOpenAttributeMenu(attributesMap);
module.exports.attribute = attribute;