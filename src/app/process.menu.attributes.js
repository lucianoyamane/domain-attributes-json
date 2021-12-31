const { init:initIsFile} = require('./menu/isfile.attribute.menu');
const { init:initProcessMenuAttributes } = require('./menu/process.popup.attributes');

const { init:initAssociation } = require('../../src/app/association/association.app');
const { AbstractAttributeComponent } = require('./../api/abstract.attribute.component');

const { menu:menuConstant } = require('./constant');


let menuAttributesMap = () => {
    let attributesMap = {}
    let map = new Map();
    map.set(menuConstant.attribute.IS_FILE, initIsFile(attributesMap));
    map.set(menuConstant.PROCESS_KEY, initProcessMenuAttributes(attributesMap));

    attributesMap[menuConstant.MENU] = map;
    return attributesMap;
}

class ProcessMenuAttributes extends AbstractAttributeComponent {

    constructor() {
        super(menuAttributesMap());
    }

    execute(source) {

        let entity = JSON.parse(JSON.stringify(source));;
        entity[menuConstant.SOURCE] = source;
        initAssociation(entity);
        let { menu } = entity;
        this.attributesMap[menuConstant.MENU].forEach(value => {
            value.execute(menu)
        })
        return entity;   
    }
}

module.exports.init = () => new ProcessMenuAttributes();