var chai = require('chai'); 
var expect = chai.expect;

const { init } = require('../../../../../src/app/association/menu/popup/popup.association')

describe("popup association test", function(){

    it('basic test', function() {
        let popupSource = { menuitem: [ {} ] };

        init(popupSource);

        let resultMenuItem = popupSource.menuitem[0];

        expect(resultMenuItem).to.have.property('popup');

    })

});