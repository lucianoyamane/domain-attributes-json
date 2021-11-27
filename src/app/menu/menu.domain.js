
const { AttributeHolder } = require('../api/attribute.holder')

class MenuDomain extends AttributeHolder {

    constructor(attributesMap, name) {
        super(attributesMap, name);
    }

    getMenuAttribute(key, {source, entity}) {
        return this.attributesMap['menu'].get(key).attribute({source, entity});
    }

    validStructure({source, entity}) {
        return source != undefined;
    }

    setAttr({source, entity}) {
        if (!entity.hasOwnProperty('menu')) {
            entity['menu'] = {};
        }
        entity['menu'][this.name] = this.attribute({source, entity});
    }

}

module.exports.MenuDomain = MenuDomain;