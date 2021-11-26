
const { MenuDomain } = require('./menu.domain');

class IdAttributeMenu extends MenuDomain {

    constructor(attributesMap) {
        super(attributesMap, 'id');
    }

    attribute({source, entity}) { 
        super.attribute({source, entity});
        return source['menu'][this.name];

    }

}

module.exports.IdAttributeMenu = IdAttributeMenu;
module.exports.init = (attributesMap) => new IdAttributeMenu(attributesMap);