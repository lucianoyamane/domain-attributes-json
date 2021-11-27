const { init:initHasMenuItem, attribute:attributeHasMenuItem } = require('./popup/hasmenuitem.attribute.popup');

const { AttributeHolder } = require('../api/attribute.holder')

let popUpAttributesMap = (attributesMap) => {
    let map = new Map();
    map.set(attributeHasMenuItem, initHasMenuItem(attributesMap));

    attributesMap['popup'] = map;
    return attributesMap;
}

class ProcessMenuAttributes extends AttributeHolder {

    constructor(attributesMap) {
        super(popUpAttributesMap(attributesMap), 'popup_processed');
    }

    execute({source, entity}) {
        let { popup } = source;
        this.attributesMap['popup'].forEach((value, key) => {
            value.execute({source: popup, entity})
        })   
    }

}

module.exports.init = (attributesMap) => new ProcessMenuAttributes(attributesMap);