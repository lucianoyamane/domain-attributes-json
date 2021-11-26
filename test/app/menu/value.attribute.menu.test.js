var chai = require('chai'); 
var expect = chai.expect;

const { init } = require('../../../src/app/menu/value.attribute.menu');

describe("value menu test", function(){

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
        let attributeDomain = init();

        let domainObj = JSON.parse(jsonValue);

        let expected = 'File';
        
        let result = attributeDomain.attribute({source: domainObj, entity:{}});
        
        expect(expected).to.eql(result)

    })

})