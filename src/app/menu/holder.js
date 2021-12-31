
const { AttributeHolder } = require('../../api/attribute.holder');

class MenuAttributeHolder extends AttributeHolder {

    constructor(attributesMap, name) {
        super(attributesMap, name);
    }

    validStructure(entity) {
        return (entity && entity['popup']) != undefined;
    }

    setAttr(entity) {
        entity[this.name] = this.attribute(entity);
    }

}

module.exports.MenuAttributeHolder = MenuAttributeHolder;