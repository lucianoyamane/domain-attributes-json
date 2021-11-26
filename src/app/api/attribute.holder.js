class AttributeHolder {
    
    constructor(attributesMap, name) {
        this.attributesMap = attributesMap;
        this.name = name;
    }


    setAttr(domainObject) {
        
    }

    validStructure(domainObject) {
        return true;
    }


    attribute(domainObject) {
        if (!this.validStructure(domainObject)) {
            throw new TypeError('invalid structure');
        }
    }

    execute(domainObject) {
        this.defineAtributo(domainObject);
    }
}

module.exports.AttributeHolder = AttributeHolder;