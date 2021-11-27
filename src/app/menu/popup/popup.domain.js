const { AttributeHolder } = require('../../api/attribute.holder')

class PopUpDomain extends AttributeHolder {

    constructor(attributesMap, name) {
        super(attributesMap, name);
    }

    getMenuAttribute(key, {source, entity}) {
        return this.attributesMap['popup'].get(key).attribute({source, entity});
    }

    validStructure({source, entity}) {
        return source != undefined;
    }

    setAttr({source, entity}) {
        if (!entity['menu'].hasOwnProperty('popup')) {
            entity['menu']['popup'] = {};    
        }
        entity['menu']['popup'][this.name] = this.attribute({source, entity});
    }

}

module.exports.PopUpDomain = PopUpDomain;