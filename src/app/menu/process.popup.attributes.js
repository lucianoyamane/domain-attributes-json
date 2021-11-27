const { init:initHasMenuItem, attribute:attributeHasMenuItem } = require('./popup/hasmenuitem.attribute.popup');
const { init:initProcessMenuItem, attribute:attributeProcessMenuItem } = require('./popup/process.menuitem.attributes');

const { AttributeHolder } = require('../api/attribute.holder')

let popUpAttributesMap = (attributesMap) => {
    let map = new Map();
    map.set(attributeHasMenuItem, initHasMenuItem(attributesMap));
    map.set(attributeProcessMenuItem, initProcessMenuItem(attributesMap));

    attributesMap['popup'] = map;
    return attributesMap;
}

class ProcesPopUpAttributes extends AttributeHolder {

    constructor(attributesMap) {
        super(popUpAttributesMap(attributesMap), attribute);
    }

    execute(entity) {
        let { popup } = entity;
        this.attributesMap['popup'].forEach(value => {
            value.execute(popup)
        })   
    }

}

let attribute = 'popup_processed';

module.exports.init = (attributesMap) => new ProcesPopUpAttributes(attributesMap);
module.exports.attribute = attribute;