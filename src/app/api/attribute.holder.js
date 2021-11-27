class AttributeHolder {
    
    constructor(attributesMap, name) {
        this.attributesMap = attributesMap;
        this.name = name;
    }

    getMenuAttribute(key, entity) {
        return this.attributesMap.menu.get(key).attribute(entity);
    }

    setAttr(entity) {
        
    }

    validStructure(entity) {
        return true;
    }


    attribute(entity) {
        if (!this.validStructure(entity)) {
            throw new TypeError('invalid structure');
        }
    }

    execute(entity) {
        this.setAttr(entity);
    }
}

module.exports.AttributeHolder = AttributeHolder;