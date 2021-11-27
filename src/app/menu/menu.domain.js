
const { AttributeHolder } = require('../api/attribute.holder')

class MenuDomain extends AttributeHolder {

    constructor(attributesMap, name) {
        super(attributesMap, name);
    }

    getMenuAttribute(key, entity) {
        return this.attributesMap['menu'].get(key).attribute(entity);
    }

    validStructure(entity) {
        return entity != undefined;
    }

    setAttr(entity) {
        if (!entity.hasOwnProperty('menu')) {
            entity['menu'] = {};
        }
        entity['menu'][this.name] = this.attribute(entity);
    }

}

module.exports.MenuDomain = MenuDomain;