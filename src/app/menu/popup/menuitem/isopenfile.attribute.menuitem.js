
const { MenuItemAttributeHolder } = require('./menuitem.attribute.holder');
const { menuitem, menu } = require('../../../constant');

let IS_OPEN_FILE = menuitem.attribute.IS_OPEN_FILE;

class IsOpenFileAttributeMenu extends MenuItemAttributeHolder {

    constructor(attributesMap) {
        super(attributesMap, IS_OPEN_FILE);
    }

    attribute(entity) { 
        super.attribute(entity);
        let isOpen = this.getAttributeMenuItem(menuitem.attribute.IS_OPEN, entity);
        let isFileMenu = this.getAttributeMenu(menu.attribute.IS_FILE, entity);
        return isFileMenu && isOpen;

    }

}


module.exports.init = (attributesMap) => new IsOpenFileAttributeMenu(attributesMap);