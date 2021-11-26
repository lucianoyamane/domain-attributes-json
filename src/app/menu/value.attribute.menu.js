
const { MenuDomain } = require('./menu.domain');

class ValueAttributeMenu extends MenuDomain {

    constructor(attributesMap) {
        super(attributesMap, 'value');
    }

    attribute({source, entity}) { 
        super.attribute({source, entity});
        return source['menu'][this.name];

    }

}

module.exports.ValueAttributeMenu = ValueAttributeMenu;
module.exports.init = (attributesMap) => new ValueAttributeMenu(attributesMap);