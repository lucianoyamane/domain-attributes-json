const { isnew, isopen, isopenfile } = require('./menuitem')
const { menuitem: constant } = require('../../constant');

const { AbstractAttributeComponent } = require('../../../api/abstract.attribute.component');

let constantAttribute = constant.attribute;

let menuItemAttributesMap = (attributesMap) => {
    let map = new Map();
    map.set(constantAttribute.IS_NEW, isnew(attributesMap));
    map.set(constantAttribute.IS_OPEN, isopen(attributesMap));
    map.set(constantAttribute.IS_OPEN_FILE, isopenfile(attributesMap));

    attributesMap[constant.MENU_ITEM] = map;
    return attributesMap;
}

class ProcessMenuItemAttributes extends AbstractAttributeComponent {

    constructor(attributesMap) {
        super(menuItemAttributesMap(attributesMap));
    }

    execute(entity) {
        let { menuitem } = entity;
        this.attributesMap[constant.MENU_ITEM].forEach(attributeMap => {
            menuitem.forEach(value => {
                attributeMap.execute(value)
            }) 
            
        })   
    }

}

module.exports.init = (attributesMap) => new ProcessMenuItemAttributes(attributesMap);