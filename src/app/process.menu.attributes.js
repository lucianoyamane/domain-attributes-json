const { init:initIsFile, attribute:attributeIsFile } = require('./menu/isfile.attribute.menu');

const { AttributeHolder } = require('./api/attribute.holder')

let menuAttributesMap = () => {
    let attributesMap = {}
    let map = new Map();
    map.set(attributeIsFile, initIsFile(attributesMap));

    attributesMap['menu'] = map;
    return attributesMap;
}

class ProcessMenuAttributes extends AttributeHolder {

    constructor() {
        super(menuAttributesMap(), 'menu_processed');
    }

    execute({source, entity}) {
        this.attributesMap['menu'].forEach((value, key) => {
            value.execute({source, entity})
        })   
    }

}

module.exports.init = () => new ProcessMenuAttributes();