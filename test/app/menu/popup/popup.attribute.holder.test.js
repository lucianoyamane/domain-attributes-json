var chai = require('chai'); 
var expect = chai.expect;

const { PopUpAttributeHolder } = require('../../../../src/app/menu/popup/holder');

describe("PopUpAttributeHolder test", function(){

    it('validStructure test', function() {

        let holder = new PopUpAttributeHolder({}, 'test');
        
        let result = holder.validStructure({menu: {}, menuitem: []});
        
        expect(result).to.be.true;

    })

    it('validStructure undefined test', function() {

        let holder = new PopUpAttributeHolder({}, 'test');
        
        let result = holder.validStructure(undefined);
        
        expect(result).to.be.false;

    })

    it('setAttr test', function() {

        let holder = new PopUpAttributeHolder({}, 'test');
        
        let entity_test = {menu: {}, menuitem: []};

        holder.setAttr(entity_test);
        
        expect(entity_test).to.have.property('test');

    })

})