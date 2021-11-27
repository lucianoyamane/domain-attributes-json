var chai = require('chai'); 
var expect = chai.expect;

const { init } = require('../../src/app/process.menu.attributes');

const { init:initAssociation } = require('../../src/app/association/association.app');

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

    it('test execute', function() {

      let processMenuAttributes = init(new Map());

      let domainObj = JSON.parse(jsonValue);

      initAssociation(domainObj);
      
      processMenuAttributes.execute(domainObj);

      console.log(domainObj)
      
      expect('').to.eql('')
        

    })

})