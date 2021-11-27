const { init } = require('./popup/popup.association');

class MenuAssociation {

    execute(menuSource) {
        let { popup } = menuSource;
        popup['menu'] = menuSource;
        init(popup);
    }

}

module.exports.init = (menuSource) => new MenuAssociation().execute(menuSource);