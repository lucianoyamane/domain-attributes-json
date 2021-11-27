const { AttributeHolder } = require('../../api/attribute.holder')

class PopUpDomain extends AttributeHolder {

    constructor(attributesMap, name) {
        super(attributesMap, name);
    }

    getMenuAttribute(key, {source, entity}) {
        return this.attributesMap['popup'].get(key).attribute({source, entity});
    }

    validStructure({source, entity}) {
        return source.hasOwnProperty('menu') && source['menu'].hasOwnProperty('popup');
    }

    setAttr({source, entity}) {
        entity['menu']['popup'][this.name] = this.attribute({source, entity});
    }

}

module.exports.PopUpDomain = PopUpDomain;