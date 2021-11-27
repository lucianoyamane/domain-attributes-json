
const { MenuDomain } = require('./menu.domain');

class IsFileAttributeMenu extends MenuDomain {

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

module.exports.IsFileAttributeMenu = IsFileAttributeMenu;
module.exports.init = (attributesMap) => new IsFileAttributeMenu(attributesMap);
module.exports.attribute = attribute;