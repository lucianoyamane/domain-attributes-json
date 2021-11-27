const { init:initHasMenuItem, attribute:attributeHasMenuItem } = require('./popup/hasmenuitem.attribute.popup');

const { AttributeHolder } = require('../api/attribute.holder')

let popUpAttributesMap = (attributesMap) => {
    let map = new Map();
    map.set(attributeHasMenuItem, initHasMenuItem(attributesMap));

    attributesMap['popup'] = map;
    return attributesMap;
}

class ProcesPopUpAttributes extends AttributeHolder {

    constructor(attributesMap) {
        super(popUpAttributesMap(attributesMap), 'popup_processed');
    }

    execute(entity) {
        let { popup } = entity;
        this.attributesMap['popup'].forEach(value => {
            value.execute(popup)
        })   
    }

}

module.exports.init = (attributesMap) => new ProcesPopUpAttributes(attributesMap);