var chai = require('chai'); 
var expect = chai.expect;

const { init } = require('../../src/app/process.menu.attributes');



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
      
      let entity = processMenuAttributes.execute(domainObj);

      console.log(entity)
      
      expect('').to.eql('')
        

    })

})