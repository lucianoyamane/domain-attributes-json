
const { MenuItemAttributeHolder } = require('./menuitem.attribute.holder');
const { attribute:isOpenAttribute } = require('./isopen.attribute.menuitem');
const { attribute:isFileMenuAttribute } = require('../../isfile.attribute.menu');
const { attribute:menuItemAttribute } = require('../../../constant/menuitem.constant');

class IsOpenFileAttributeMenu extends MenuItemAttributeHolder {

    constructor(attributesMap) {
        super(attributesMap, attribute);
    }

    attribute(entity) { 
        super.attribute(entity);
        let isOpen = this.getAttributeMenuItem(isOpenAttribute, entity);
        let isFileMenu = this.getAttributeMenu(isFileMenuAttribute, entity);
        return isFileMenu && isOpen;

    }

}

let attribute = menuItemAttribute.IS_OPEN_FILE;

module.exports.init = (attributesMap) => new IsOpenFileAttributeMenu(attributesMap);
module.exports.attribute = attribute;