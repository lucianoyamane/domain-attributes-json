var chai = require('chai'); 
var expect = chai.expect;

const { init } = require('../../../../src/app/menu/popup/hasmenuitem.attribute.popup');

describe("isNew menuitem test", function(){

    it('basic test', function() {
        let hasMenuAttributeDomain = init({});
        
        let result = hasMenuAttributeDomain.attribute({menuitem:[{}]});
        
        expect(result).to.be.true;

    })

    it('test attribute false', function() {

        let hasMenuAttributeDomain = init({});
        
        let result = hasMenuAttributeDomain.attribute({menuitem:[]});
        
        expect(result).to.be.false;

    })

    it('test execute', function() {
        let entity_test = {menuitem:[{}]}

        let isNewAttributeDomain = init({});
        isNewAttributeDomain.execute(entity_test);

        expect(entity_test).to.have.property('hasMenuItem');

    });

})