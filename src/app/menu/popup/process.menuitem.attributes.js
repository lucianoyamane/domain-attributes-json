const { init:isNewMenuItem, attribute:attributeIsNew } = require('./menuitem/isnew.attribute.menuitem');

const { AttributeHolder } = require('../../api/attribute.holder')

let menuItemAttributesMap = (attributesMap) => {
    let map = new Map();
    map.set(attributeIsNew, isNewMenuItem(attributesMap));

    attributesMap['menuitem'] = map;
    return attributesMap;
}

class ProcessMenuItemAttributes extends AttributeHolder {

    constructor(attributesMap) {
        super(menuItemAttributesMap(attributesMap), 'menu_item_processed');
    }

    execute(entity) {
        let { menuitem } = entity;
        this.attributesMap['menuitem'].forEach(attributeMap => {
            menuitem.forEach(value => {
                attributeMap.execute(value)
            }) 
            
        })   
    }

}

let attribute = 'menu_item_processed';

module.exports.init = (attributesMap) => new ProcessMenuItemAttributes(attributesMap);
module.exports.attribute = attribute;