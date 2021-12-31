const { init:isNewMenuItem } = require('./menuitem/isnew.attribute.menuitem');
const { init:isOpenMenuItem } = require('./menuitem/isopen.attribute.menuitem');
const { init:isOpenFileMenuItem } = require('./menuitem/isopenfile.attribute.menuitem');

const { AbstractAttributeComponent } = require('../../../api/abstract.attribute.component');

const { menuitem: menuItemConstant } = require('../../constant');

let constantAttribute = menuItemConstant.attribute;

let menuItemAttributesMap = (attributesMap) => {
    let map = new Map();
    map.set(constantAttribute.IS_NEW, isNewMenuItem(attributesMap));
    map.set(constantAttribute.IS_OPEN, isOpenMenuItem(attributesMap));
    map.set(constantAttribute.IS_OPEN_FILE, isOpenFileMenuItem(attributesMap));

    attributesMap[menuItemConstant.MENU_ITEM] = map;
    return attributesMap;
}

class ProcessMenuItemAttributes extends AbstractAttributeComponent {

    constructor(attributesMap) {
        super(menuItemAttributesMap(attributesMap));
    }

    execute(entity) {
        let { menuitem } = entity;
        this.attributesMap[menuItemConstant.MENU_ITEM].forEach(attributeMap => {
            menuitem.forEach(value => {
                attributeMap.execute(value)
            }) 
            
        })   
    }

}

module.exports.init = (attributesMap) => new ProcessMenuItemAttributes(attributesMap);