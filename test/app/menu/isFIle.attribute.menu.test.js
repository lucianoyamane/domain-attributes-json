var chai = require('chai'); 
var expect = chai.expect;

const { init } = require('../../../src/app/menu/isfile.attribute.menu');

describe("isFile menu test", function(){

    it('test attribute', function() {
        let isFileAttributeDomain = init({});
        
        let result = isFileAttributeDomain.attribute({source: {menu: {id: 'file'}}, entity:{}});
        
        expect(result).to.be.true;

    })

    it('test attribute false', function() {

        let isFileAttributeDomain = init({});
        let result = isFileAttributeDomain.attribute({source: {menu: {id: 'other_id'}}, entity:{}});
        
        expect(result).to.be.false;

    })

    it('test execute', function() {
        let entity_test = {
            menu: {}
        }

        let isFileAttributeDomain = init({});
        isFileAttributeDomain.execute({source:  {menu: {id: 'file'}}, entity:entity_test});

        expect(entity_test.menu).to.have.property('isFile');

    });

})