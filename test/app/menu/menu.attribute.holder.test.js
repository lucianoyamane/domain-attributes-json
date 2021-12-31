var chai = require('chai'); 
var expect = chai.expect;

const { MenuAttributeHolder } = require('../../../src/app/menu/holder');

describe("MenuAttributeHolder test", function(){

    it('validStructure test', function() {

        let holder = new MenuAttributeHolder({}, 'test');
        
        let result = holder.validStructure({popup: {}});
        
        expect(result).to.be.true;

    })

    it('validStructure undefined test', function() {

        let holder = new MenuAttributeHolder({}, 'test');
        
        let result = holder.validStructure(undefined);
        
        expect(result).to.be.false;

    })

    it('setAttr test', function() {

        let holder = new MenuAttributeHolder({}, 'test');
        
        let entity_test = {popup: {}};

        holder.setAttr(entity_test);
        
        expect(entity_test).to.have.property('test');

    })

})