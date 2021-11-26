
const { AttributeHolder } = require('../api/attribute.holder')

class MenuDomain extends AttributeHolder {

    constructor(attributesMap, name) {
        super(attributesMap, name);
    }

    getMenuAttribute(key, {source, entity}) {
        return this.attributesMap['menu'].get(key).attribute({source, entity});
    }

    validStructure({source, entity}) {
        return source.hasOwnProperty('menu');
    }

    setAttr({source, entity}) {
        entity['menu'][this.name] = this.attribute({source, entity});
    }

}

module.exports.MenuDomain = MenuDomain;