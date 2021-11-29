const { AttributeHolder } = require('../../../api/attribute.holder');
const { MENU_ITEM } = require('../../../constant/menuitem.constant');
const { POPUP } = require('../../../constant/popup.constant');
const { MENU } = require('../../../constant/menu.constant');

class MenuItemAttributeHolder extends AttributeHolder {

    constructor(attributesMap, name) {
        super(attributesMap, name);
    }

    getAttributeMenuItem(key, entity) {
        return this.attributesMap[MENU_ITEM].get(key).attribute(entity);
    }

    getAttributeMenu(key, entity) {
        return this.attributesMap[MENU].get(key).attribute(entity[POPUP][MENU]);
    }

    validStructure(entity) {
        return entity != undefined;
    }

    setAttr(entity) {
        entity[this.name] = this.attribute(entity);
    }

}

module.exports.MenuItemAttributeHolder = MenuItemAttributeHolder;