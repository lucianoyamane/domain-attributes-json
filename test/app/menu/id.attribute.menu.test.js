var chai = require('chai'); 
var expect = chai.expect;

const { init } = require('../../../src/app/menu/id.attribute.menu');

describe("main test", function(){

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
        let idAttributeDomain = init();

        let domainObj = JSON.parse(jsonValue);

        let expected = 'file';
        
        let result = idAttributeDomain.attribute(domainObj);
        
        expect(expected).to.eql(result)

    })

})