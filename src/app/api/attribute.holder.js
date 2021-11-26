class AttributeHolder {
    
    constructor(attributesMap, name) {
        this.attributesMap = attributesMap;
        this.name = name;
    }


    setAttr({source, entity}) {
        
    }

    validStructure({source, entity}) {
        return true;
    }


    attribute({source, entity}) {
        if (!this.validStructure({source, entity})) {
            throw new TypeError('invalid structure');
        }
    }

    execute({source, entity}) {
        this.setAttr({source, entity});
    }
}

module.exports.AttributeHolder = AttributeHolder;