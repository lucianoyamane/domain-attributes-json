
const { MenuItemAttributeHolder } = require('./menuitem.attribute.holder');

const { attribute:menuItemAttribute, value:menuItemValue } = require('../../../constant/menuitem.constant');

class IsNewAttributeMenu extends MenuItemAttributeHolder {

    constructor(attributesMap) {
        super(attributesMap, attribute);
    }

    attribute(entity) { 
        super.attribute(entity);
        return entity[menuItemAttribute.VALUE] === menuItemValue.NEW;

    }

}

let attribute = menuItemAttribute.IS_NEW;

module.exports.init = (attributesMap) => new IsNewAttributeMenu(attributesMap);
module.exports.attribute = attribute;