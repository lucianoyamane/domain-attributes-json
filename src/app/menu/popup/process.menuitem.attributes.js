const { init:initHasMenuItem, attribute:attributeHasMenuItem } = require('./popup/hasmenuitem.attribute.popup');

const { AttributeHolder } = require('../../api/attribute.holder')

let popUpAttributesMap = (attributesMap) => {
    let map = new Map();
    map.set(attributeHasMenuItem, initHasMenuItem(attributesMap));

    attributesMap['menuitem'] = map;
    return attributesMap;
}

class ProcessMenuItemAttributes extends AttributeHolder {

    constructor(attributesMap) {
        super(popUpAttributesMap(attributesMap), 'menu_item_processed');
    }

    execute(entity) {
        let { menuitem } = entity;
        this.attributesMap['menuitem'].forEach(attributeMap => {
            menuitem.forEach(value => {
                attributeMap.execute({entity: value})
            }) 
            
        })   
    }

}

module.exports.init = (attributesMap) => new ProcessMenuItemAttributes(attributesMap);