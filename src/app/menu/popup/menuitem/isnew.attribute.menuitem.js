
const { MenuItemDomain } = require('./menuitem.domain');

class IsNewAttributeMenu extends MenuItemDomain {

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