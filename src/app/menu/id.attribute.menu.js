
const { MenuDomain } = require('./menu.domain');

class IdAttributeMenu extends MenuDomain {

    constructor(attributesMap) {
        super(attributesMap, 'id');
    }

    attribute(domainObject) { 
        super.attribute(domainObject);
        return domainObject['menu'][this.name];

    }

}

module.exports.IdAttributeMenu = IdAttributeMenu;
module.exports.init = () => new IdAttributeMenu();