const { hasmenuitem, processAttributes } = require('./popup')

const { AbstractAttributeComponent } = require('../../api/abstract.attribute.component')
const { popup: constant } = require('../constant');

let popUpAttributesMap = (attributesMap) => {
    let map = new Map();
    map.set(constant.attribute.HAS_MENU_ITEM, hasmenuitem(attributesMap));
    map.set(constant.PROCESS_KEY, processAttributes(attributesMap));

    attributesMap[constant.POPUP] = map;
    return attributesMap;
}

class ProcesPopUpAttributes extends AbstractAttributeComponent {

    constructor(attributesMap) {
        super(popUpAttributesMap(attributesMap));
    }

    execute(entity) {
        let { popup } = entity;
        this.attributesMap[constant.POPUP].forEach(value => {
            value.execute(popup)
        })   
    }

}

module.exports.init = (attributesMap) => new ProcesPopUpAttributes(attributesMap);