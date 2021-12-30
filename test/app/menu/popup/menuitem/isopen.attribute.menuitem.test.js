var chai = require('chai'); 
var expect = chai.expect;

const { init } = require('../../../../../src/app/menu/popup/menuitem/isopen.attribute.menuitem');

describe("isOpen menuitem test", function(){

    it('basic test', function() {
        let isOpenAttributeDomain = init({});
        
        let result = isOpenAttributeDomain.attribute({value: 'open'});
        
        expect(result).to.be.true;

    })

    it('test attribute false', function() {

        let isOpenAttributeDomain = init({});
        let result = isOpenAttributeDomain.attribute({value: 'old'});
        
        expect(result).to.be.false;

    })

    it('test execute', function() {
        let entity_test = {value: 'new'}

        let isOpenAttributeDomain = init({});
        isOpenAttributeDomain.execute(entity_test);

        expect(entity_test).to.have.property('isOpen');

    });

})