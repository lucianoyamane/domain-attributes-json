
const { MenuItemAttributeHolder } = require('./menuitem.attribute.holder');

const { attribute:menuItemAttribute, value:menuItemValue } = require('../../../constant/menuitem.constant');

class IsOpenAttributeMenu extends MenuItemAttributeHolder {

    constructor(attributesMap) {
        super(attributesMap, attribute);
    }

    attribute(entity) { 
        super.attribute(entity);
        return entity[menuItemAttribute.VALUE] === menuItemValue.OPEN;

    }

}

let attribute = menuItemAttribute.IS_OPEN;

module.exports.init = (attributesMap) => new IsOpenAttributeMenu(attributesMap);
module.exports.attribute = attribute;