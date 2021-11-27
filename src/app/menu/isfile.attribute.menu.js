
const { MenuDomain } = require('./menu.domain');

class IsFileAttributeMenu extends MenuDomain {

    constructor(attributesMap) {
        super(attributesMap, 'isFile');
    }

    attribute({source, entity}) { 
        super.attribute({source, entity});
        let id = source.id;

        return id === 'file';

    }

}

let attribute = 'isFile';

module.exports.IsFileAttributeMenu = IsFileAttributeMenu;
module.exports.init = (attributesMap) => new IsFileAttributeMenu(attributesMap);
module.exports.attribute = attribute;