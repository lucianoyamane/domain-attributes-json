var chai = require('chai'); 
var expect = chai.expect;

const { init } = require('../../../src/app/menu/isfile.attribute.menu');

describe("isFile menu test", function(){

    let jsonValue = '{"menu": {\n' +
        '"id": "file",\n' +
        '"value": "File",\n' +
        '"popup": {\n' +
          '"menuitem": [\n' +
            '{"value": "New", "onclick": "CreateNewDoc()"},\n' +
            '{"value": "Open", "onclick": "OpenDoc()"},\n' +
            '{"value": "Close", "onclick": "CloseDoc()"}\n' +
          ']\n' +
        '}\n' +
      '}}'; 

    it('test attribute', function() {
        let attributesMap = {menu: new Map()};
        attributesMap.menu.set('id', { attribute: function(){return 'file'} })

        let isFileAttributeDomain = init(attributesMap);

        let domainObj = JSON.parse(jsonValue);

        
        let result = isFileAttributeDomain.attribute({source: domainObj, entity:{}});
        
        expect(result).to.be.true;

    })

    it('test attribute false', function() {
        let attributesMap = {menu: new Map()};
        attributesMap.menu.set('id', { attribute: function(){return 'other_id'} })

        let domainObj = JSON.parse(jsonValue);

        let isFileAttributeDomain = init(attributesMap);
        let result = isFileAttributeDomain.attribute({source: domainObj, entity:{}});
        
        expect(result).to.be.false;

    })

    it('test execute', function() {
        let entity_test = {
            menu: {}
        }
        let attributesMap = {menu: new Map()};
        attributesMap.menu.set('id', { attribute: function(){return 'file'} });

        let domainObj = JSON.parse(jsonValue);

        let isFileAttributeDomain = init(attributesMap);
        isFileAttributeDomain.execute({source: domainObj, entity:entity_test});

        expect(entity_test.menu).to.have.property('isFile');

    });

})