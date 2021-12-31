const { AttributeHolder } = require('../../../../api/attribute.holder');

const { menu, popup, menuitem } = require('../../../constant')

class MenuItemAttributeHolder extends AttributeHolder {

    constructor(attributesMap, name) {
        super(attributesMap, name);
    }

    getAttributeMenuItem(key, entity) {
        return this.attributesMap[menuitem.MENU_ITEM].get(key).attribute(entity);
    }

    getAttributeMenu(key, entity) {
        return this.attributesMap[menu.MENU].get(key).attribute(entity[popup.POPUP][menu.MENU]);
    }

    validStructure(entity) {
        return entity != undefined;
    }

    setAttr(entity) {
        entity[this.name] = this.attribute(entity);
    }

}

module.exports.MenuItemAttributeHolder = MenuItemAttributeHolder;