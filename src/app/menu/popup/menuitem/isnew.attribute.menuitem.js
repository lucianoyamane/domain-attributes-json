
const { MenuItemAttributeHolder } = require('./menuitem.attribute.holder');

class IsNewAttributeMenu extends MenuItemAttributeHolder {

    constructor(attributesMap) {
        super(attributesMap, attribute);
    }

    attribute(entity) { 
        super.attribute(entity);
        return entity['value'] === 'New';

    }

}

let attribute = 'isNew';

module.exports.init = (attributesMap) => new IsNewAttributeMenu(attributesMap);
module.exports.attribute = attribute;