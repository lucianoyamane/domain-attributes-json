
const { MenuItemAttributeHolder } = require('./menuitem.attribute.holder');
const { attribute:isOpenAttribute } = require('./isopen.attribute.menuitem');
const { attribute:isFileMenuAttribute } = require('../../isfile.attribute.menu');

const { menuitem } = require('../../../constant');

let IS_OPEN_FILE = menuitem.attribute.IS_OPEN_FILE;

class IsOpenFileAttributeMenu extends MenuItemAttributeHolder {

    constructor(attributesMap) {
        super(attributesMap, IS_OPEN_FILE);
    }

    attribute(entity) { 
        super.attribute(entity);
        let isOpen = this.getAttributeMenuItem(isOpenAttribute, entity);
        let isFileMenu = this.getAttributeMenu(isFileMenuAttribute, entity);
        return isFileMenu && isOpen;

    }

}


module.exports.init = (attributesMap) => new IsOpenFileAttributeMenu(attributesMap);
module.exports.attribute = IS_OPEN_FILE;