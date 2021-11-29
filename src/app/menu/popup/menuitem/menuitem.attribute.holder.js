const { AttributeHolder } = require('../../../api/attribute.holder')

class MenuItemAttributeHolder extends AttributeHolder {

    constructor(attributesMap, name) {
        super(attributesMap, name);
    }

    getAttributeMenuItem(key, entity) {
        return this.attributesMap['menuitem'].get(key).attribute(entity);
    }

    getAttributeMenu(key, entity) {
        return this.attributesMap['menu'].get(key).attribute(entity['popup']['menu']);
    }

    validStructure(entity) {
        return entity != undefined;
    }

    setAttr(entity) {
        entity[this.name] = this.attribute(entity);
    }

}

module.exports.MenuItemAttributeHolder = MenuItemAttributeHolder;