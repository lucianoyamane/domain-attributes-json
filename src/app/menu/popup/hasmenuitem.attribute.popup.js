
const { PopUpAttributeHolder } = require('./holder');

const { menuitem, popup } = require('../../constant');
let attribute = popup.attribute.HAS_MENU_ITEM;

class HasMenuItemAttributeMenu extends PopUpAttributeHolder {

    constructor(attributesMap) {
        super(attributesMap, attribute);
    }

    attribute(entity) { 
        super.attribute(entity);
        return entity[menuitem.MENU_ITEM].length > 0;

    }

}

module.exports.init = (attributesMap) => new HasMenuItemAttributeMenu(attributesMap);