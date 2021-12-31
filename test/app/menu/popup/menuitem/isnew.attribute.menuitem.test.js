var chai = require('chai'); 
var expect = chai.expect;

const { init } = require('../../../../../src/app/menu/popup/menuitem/isnew.attribute.menuitem');

describe("isNew menuitem test", function(){

    it('basic test', function() {
        let isNewAttributeDomain = init({});
        
        let result = isNewAttributeDomain.attribute({popup: {}, value: 'new'});
        
        expect(result).to.be.true;

    })

    it('test attribute false', function() {

        let isNewAttributeDomain = init({});
        let result = isNewAttributeDomain.attribute({popup: {}, value: 'old'});
        
        expect(result).to.be.false;

    })

    it('test execute', function() {
        let entity_test = {popup: {}, value: 'new'}

        let isNewAttributeDomain = init({});
        isNewAttributeDomain.execute(entity_test);

        expect(entity_test).to.have.property('isNew');

    });

})