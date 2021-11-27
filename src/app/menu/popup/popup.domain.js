const { AttributeHolder } = require('../../api/attribute.holder')

class PopUpDomain extends AttributeHolder {

    constructor(attributesMap, name) {
        super(attributesMap, name);
    }

    getMenuAttribute(key, entity) {
        return this.attributesMap['popup'].get(key).attribute(entity);
    }

    validStructure(entity) {
        return entity != undefined;
    }

    setAttr(entity) {
        if (!entity['menu'].hasOwnProperty('popup')) {
            entity['menu']['popup'] = {};    
        }
        entity['menu']['popup'][this.name] = this.attribute(entity);
    }

}

module.exports.PopUpDomain = PopUpDomain;