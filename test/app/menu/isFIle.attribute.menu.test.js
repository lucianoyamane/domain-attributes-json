var chai = require('chai'); 
var expect = chai.expect;

const { init } = require('../../../src/app/menu/isfile.attribute.menu');

describe("isFile menu test", function(){

    it('test attribute', function() {
        let isFileAttributeDomain = init({});
        
        let result = isFileAttributeDomain.attribute({id: 'file'});
        
        expect(result).to.be.true;

    })

    it('test attribute false', function() {

        let isFileAttributeDomain = init({});
        let result = isFileAttributeDomain.attribute({id: 'other_id'});
        
        expect(result).to.be.false;

    })

    it('test execute', function() {
        let entity_test = {id: 'file'}

        let isFileAttributeDomain = init({});
        isFileAttributeDomain.execute(entity_test);

        expect(entity_test).to.have.property('isFile');

    });

})