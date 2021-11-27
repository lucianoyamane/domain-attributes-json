const { init:initIsFile, attribute:attributeIsFile } = require('./menu/isfile.attribute.menu');
const { init:initProcessMenuAttributes, attribute:attributeProcessMenuAttributes } = require('./menu/process.popup.attributes');


const { AttributeHolder } = require('./api/attribute.holder')

let menuAttributesMap = () => {
    let attributesMap = {}
    let map = new Map();
    map.set(attributeIsFile, initIsFile(attributesMap));
    map.set(attributeProcessMenuAttributes, initProcessMenuAttributes(attributesMap));

    attributesMap['menu'] = map;
    return attributesMap;
}

class ProcessMenuAttributes extends AttributeHolder {

    constructor() {
        super(menuAttributesMap(), 'menu_processed');
    }

    execute(entity) {
        let { menu } = entity;
        this.attributesMap['menu'].forEach(value => {
            value.execute(menu)
        })   
    }
}

let attribute = 'menu_processed';

module.exports.init = () => new ProcessMenuAttributes();
module.exports.attribute = attribute;