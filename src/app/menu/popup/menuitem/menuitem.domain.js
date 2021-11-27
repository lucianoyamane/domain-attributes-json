const { AttributeHolder } = require('../../../api/attribute.holder')

class MenuItemDomain extends AttributeHolder {

    constructor(attributesMap, name) {
        super(attributesMap, name);
    }

    getMenuAttribute(key, entity) {
        return this.attributesMap['menuitem'].get(key).attribute(entity);
    }

    validStructure(entity) {
        return entity != undefined;
    }

    setAttr(entity) {
        // if (!entity['menu']['popup'].hasOwnProperty('menuitem')) {
        //     entity['menu']['popup'] = {};    
        // }
        // entity['menu']['popup'][this.name] = this.attribute({source, entity});
    }

}

module.exports.MenuItemDomain = MenuItemDomain;