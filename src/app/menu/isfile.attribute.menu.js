
const { MenuAttributeHolder } = require('./menu.attribute.holder');

const { menu } = require('./../constant');
let value = menu.value;
let attribute = menu.attribute.IS_FILE;

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

module.exports.init = (attributesMap) => new IsFileAttributeMenu(attributesMap);