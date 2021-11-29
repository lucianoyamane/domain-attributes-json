
const { PopUpAttributeHolder } = require('./popup.attribute.holder');

const { attribute: attributeMenuItem } = require('../../constant/popup.constant');
const { MENU_ITEM } = require('../../constant/menuitem.constant');

class HasMenuItemAttributeMenu extends PopUpAttributeHolder {

    constructor(attributesMap) {
        super(attributesMap, attributeMenuItem.HAS_MENU_ITEM);
    }

    attribute(entity) { 
        super.attribute(entity);
        return entity[MENU_ITEM].length > 0;

    }

}

let attribute = attributeMenuItem.HAS_MENU_ITEM;

module.exports.init = (attributesMap) => new HasMenuItemAttributeMenu(attributesMap);
module.exports.attribute = attribute;