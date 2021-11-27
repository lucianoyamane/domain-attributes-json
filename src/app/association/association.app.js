const { init } = require('./menu/menu.association')

class AssociationApp {
 
    execute(source) {
        let { menu } = source;
        init(menu);
    }
}

module.exports.init = (source) => new AssociationApp().execute(source);