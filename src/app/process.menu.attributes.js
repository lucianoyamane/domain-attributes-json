const { init:initIsFile, attribute:attributeIsFile } = require('./menu/isfile.attribute.menu');
const { init:initProcessMenuAttributes, attribute:attributeProcessMenuAttributes } = require('./menu/process.popup.attributes');

const { init:initAssociation } = require('../../src/app/association/association.app');
const { AbstractAttributeComponent } = require('./api/abstract.attribute.component');

const { MENU, SOURCE } = require('./constant/menu.constant')

let menuAttributesMap = () => {
    let attributesMap = {}
    let map = new Map();
    map.set(attributeIsFile, initIsFile(attributesMap));
    map.set(attributeProcessMenuAttributes, initProcessMenuAttributes(attributesMap));

    attributesMap[MENU] = map;
    return attributesMap;
}

class ProcessMenuAttributes extends AbstractAttributeComponent {

    constructor() {
        super(menuAttributesMap());
    }

    execute(source) {

        let entity = JSON.parse(JSON.stringify(source));;
        entity[SOURCE] = source;
        initAssociation(entity);
        let { menu } = entity;
        this.attributesMap[MENU].forEach(value => {
            value.execute(menu)
        })
        return entity;   
    }
}

module.exports.init = () => new ProcessMenuAttributes();