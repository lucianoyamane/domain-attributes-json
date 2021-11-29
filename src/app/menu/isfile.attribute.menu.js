
const { MenuAttributeHolder } = require('./menu.attribute.holder');

class IsFileAttributeMenu extends MenuAttributeHolder {

    constructor(attributesMap) {
        super(attributesMap, 'isFile');
    }

    attribute(entity) { 
        super.attribute(entity);
        let id = entity.id;

        return id === 'file';

    }

}

let attribute = 'isFile';

module.exports.init = (attributesMap) => new IsFileAttributeMenu(attributesMap);
module.exports.attribute = attribute;