const { init:isNewMenuItem, attribute:attributeIsNew } = require('./menuitem/isnew.attribute.menuitem');
const { init:isOpenMenuItem, attribute:attributeIsOpen } = require('./menuitem/isopen.attribute.menuitem');
const { init:isOpenFileMenuItem, attribute:attributeIsOpenFile } = require('./menuitem/isopenfile.attribute.menuitem');

const { AbstractAttributeComponent } = require('../../api/abstract.attribute.component')

let menuItemAttributesMap = (attributesMap) => {
    let map = new Map();
    map.set(attributeIsNew, isNewMenuItem(attributesMap));
    map.set(attributeIsOpen, isOpenMenuItem(attributesMap));
    map.set(attributeIsOpenFile, isOpenFileMenuItem(attributesMap));

    attributesMap['menuitem'] = map;
    return attributesMap;
}

class ProcessMenuItemAttributes extends AbstractAttributeComponent {

    constructor(attributesMap) {
        super(menuItemAttributesMap(attributesMap));
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

let attribute = 'process_menu_item';

module.exports.init = (attributesMap) => new ProcessMenuItemAttributes(attributesMap);
module.exports.attribute = attribute;