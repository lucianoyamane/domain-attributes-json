class PopUpAssociation {

    execute(popupSource) {
        let { menuitem } = popupSource;
        menuitem.forEach(item => {
            item['popup'] = popupSource;
        })
        

    }

}

module.exports.init = (popupSource) => new PopUpAssociation().execute(popupSource);