
const { AttributeHolder } = require('../api/attribute.holder')

class MenuDomain extends AttributeHolder {

    constructor(attributesMap, name) {
        super(attributesMap, name);
    }

    getMenuAttribute(key, domainObject) {
        return this.attributesMap[menu].get(key).attribute(domainObject);
    }

    validStructure(domainObject) {
        return domainObject.hasOwnProperty('menu');
    }

    setAttr(domainObject) {
        domainObject['menu'][this.name] = this.attribute(domainObject);
    }

}

module.exports.MenuDomain = MenuDomain;