var chai = require('chai'); 
var expect = chai.expect;

const { PopUpAttributeHolder } = require('../../../../src/app/menu/popup/popup.attribute.holder');

describe("PopUpAttributeHolder test", function(){

    it('validStructure test', function() {

        let holder = new PopUpAttributeHolder({}, 'test');
        
        let result = holder.validStructure({});
        
        expect(result).to.be.true;

    })

    it('validStructure undefined test', function() {

        let holder = new PopUpAttributeHolder({}, 'test');
        
        let result = holder.validStructure(undefined);
        
        expect(result).to.be.false;

    })

    it('setAttr test', function() {

        let holder = new PopUpAttributeHolder({}, 'test');
        
        let entity_test = {};

        holder.setAttr(entity_test);
        
        expect(entity_test).to.have.property('test');

    })

})