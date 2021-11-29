const { init:isNewMenuItem, attribute:attributeIsNew } = require('./menuitem/isnew.attribute.menuitem');
const { init:isOpenMenuItem, attribute:attributeIsOpen } = require('./menuitem/isopen.attribute.menuitem');
const { init:isOpenFileMenuItem, attribute:attributeIsOpenFile } = require('./menuitem/isopenfile.attribute.menuitem');

const { AbstractAttributeComponent } = require('../../api/abstract.attribute.component');

const { MENU_ITEM, PROCESS_KEY } = require('../../constant/menuitem.constant')

let menuItemAttributesMap = (attributesMap) => {
    let map = new Map();
    map.set(attributeIsNew, isNewMenuItem(attributesMap));
    map.set(attributeIsOpen, isOpenMenuItem(attributesMap));
    map.set(attributeIsOpenFile, isOpenFileMenuItem(attributesMap));

    attributesMap[MENU_ITEM] = map;
    return attributesMap;
}

class ProcessMenuItemAttributes extends AbstractAttributeComponent {

    constructor(attributesMap) {
        super(menuItemAttributesMap(attributesMap));
    }

    execute(entity) {
        let { menuitem } = entity;
        this.attributesMap[MENU_ITEM].forEach(attributeMap => {
            menuitem.forEach(value => {
                attributeMap.execute(value)
            }) 
            
        })   
    }

}

let attribute = PROCESS_KEY;

module.exports.init = (attributesMap) => new ProcessMenuItemAttributes(attributesMap);
module.exports.attribute = attribute;