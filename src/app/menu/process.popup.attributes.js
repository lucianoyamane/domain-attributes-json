const { init:initHasMenuItem } = require('./popup/hasmenuitem.attribute.popup');
const { init:initProcessMenuItem, attribute:attributeProcessMenuItem } = require('./popup/process.menuitem.attributes');

const { AbstractAttributeComponent } = require('../../api/abstract.attribute.component')
const { popup: popupConstant } = require('../constant');

let popUpAttributesMap = (attributesMap) => {
    let map = new Map();
    map.set(popupConstant.attribute.HAS_MENU_ITEM, initHasMenuItem(attributesMap));
    map.set(popupConstant.PROCESS_KEY, initProcessMenuItem(attributesMap));

    attributesMap[popupConstant.POPUP] = map;
    return attributesMap;
}

class ProcesPopUpAttributes extends AbstractAttributeComponent {

    constructor(attributesMap) {
        super(popUpAttributesMap(attributesMap));
    }

    execute(entity) {
        let { popup } = entity;
        this.attributesMap[popupConstant.POPUP].forEach(value => {
            value.execute(popup)
        })   
    }

}

module.exports.init = (attributesMap) => new ProcesPopUpAttributes(attributesMap);