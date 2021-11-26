
const { MenuDomain } = require('./menu.domain');

class IsFileAttributeMenu extends MenuDomain {

    constructor(attributesMap) {
        super(attributesMap, 'isFile');
    }

    attribute({source, entity}) { 
        super.attribute({source, entity});
        let id = this.getMenuAttribute('id', {source, entity});

        return id === 'file';

    }

}

module.exports.IsFileAttributeMenu = IsFileAttributeMenu;
module.exports.init = (attributesMap) => new IsFileAttributeMenu(attributesMap);