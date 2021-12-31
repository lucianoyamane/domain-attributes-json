
const { MenuItemAttributeHolder } = require('./menuitem.attribute.holder');

const { menuitem } = require('../../../constant');
let value = menuitem.value;
let IS_NEW = menuitem.attribute.IS_NEW;
let VALUE = menuitem.attribute.VALUE;

class IsNewAttributeMenu extends MenuItemAttributeHolder {

    constructor(attributesMap) {
        super(attributesMap, IS_NEW);
    }

    attribute(entity) { 
        super.attribute(entity);
        return entity[VALUE] === value.NEW;

    }

}

module.exports.init = (attributesMap) => new IsNewAttributeMenu(attributesMap);