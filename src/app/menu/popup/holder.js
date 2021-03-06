const { AttributeHolder } = require('../../../api/attribute.holder')

class PopUpAttributeHolder extends AttributeHolder {

    constructor(attributesMap, name) {
        super(attributesMap, name);
    }

    validStructure(entity) {
        return (entity && entity['menu'] && entity['menuitem']) != undefined;
    }

    setAttr(entity) {
        entity[this.name] = this.attribute(entity);
    }
}

module.exports.PopUpAttributeHolder = PopUpAttributeHolder;