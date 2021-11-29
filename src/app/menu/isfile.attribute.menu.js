
const { MenuAttributeHolder } = require('./menu.attribute.holder');

const { value, attribute:attributeMenu } = require('./../constant/menu.constant');

class IsFileAttributeMenu extends MenuAttributeHolder {

    constructor(attributesMap) {
        super(attributesMap, attribute);
    }

    attribute(entity) { 
        super.attribute(entity);
        let id = entity.id;

        return id === value.FILE_ID;

    }

}

let attribute = attributeMenu.IS_FILE;

module.exports.init = (attributesMap) => new IsFileAttributeMenu(attributesMap);
module.exports.attribute = attribute;