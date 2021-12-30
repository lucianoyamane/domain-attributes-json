var chai = require('chai'); 
var expect = chai.expect;

const { init } = require('../../../../src/app/association/menu/menu.association')

describe("popup association test", function(){

    it('basic test', function() {
        let menuSource = { popup: { menuitem: [ ] } };

        init(menuSource);

        let resultPopup = menuSource.popup;

        expect(resultPopup).to.have.property('menu');
    })

});