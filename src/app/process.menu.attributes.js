const { init:initIsFile, attribute:attributeIsFile } = require('./menu/isfile.attribute.menu');
const { init:initProcessMenuAttributes, attribute:attributeProcessMenuAttributes } = require('./menu/process.popup.attributes');

const { init:initAssociation } = require('../../src/app/association/association.app');
const { AbstractAttributeComponent } = require('./api/abstract.attribute.component')

let menuAttributesMap = () => {
    let attributesMap = {}
    let map = new Map();
    map.set(attributeIsFile, initIsFile(attributesMap));
    map.set(attributeProcessMenuAttributes, initProcessMenuAttributes(attributesMap));

    attributesMap['menu'] = map;
    return attributesMap;
}

class ProcessMenuAttributes extends AbstractAttributeComponent {

    constructor() {
        super(menuAttributesMap());
    }

    execute(source) {

        let entity = JSON.parse(JSON.stringify(source));;
        entity['source'] = source;
        initAssociation(entity);
        let { menu } = entity;
        this.attributesMap['menu'].forEach(value => {
            value.execute(menu)
        })
        return entity;   
    }
}

let attribute = 'process_menu';

module.exports.init = () => new ProcessMenuAttributes();
module.exports.attribute = attribute;