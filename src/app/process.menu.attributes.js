const { isfile, processAttributes } = require('./menu')

const { init:initAssociation } = require('../../src/app/association/association.app');
const { AbstractAttributeComponent } = require('./../api/abstract.attribute.component');

const { menu:menuConstant } = require('./constant');


let menuAttributesMap = () => {
    let attributesMap = {}
    let map = new Map();
    map.set(menuConstant.attribute.IS_FILE, isfile(attributesMap));
    map.set(menuConstant.PROCESS_KEY, processAttributes(attributesMap));

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