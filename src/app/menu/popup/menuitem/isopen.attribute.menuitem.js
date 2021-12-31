
const { MenuItemAttributeHolder } = require('./holder');

const { menuitem } = require('../../../constant');
let value = menuitem.value;

let IS_OPEN = menuitem.attribute.IS_OPEN;
let VALUE = menuitem.attribute.VALUE;

class IsOpenAttributeMenu extends MenuItemAttributeHolder {

    constructor(attributesMap) {
        super(attributesMap, IS_OPEN);
    }

    attribute(entity) { 
        super.attribute(entity);
        return entity[VALUE] === value.OPEN;

    }

}

module.exports.init = (attributesMap) => new IsOpenAttributeMenu(attributesMap);