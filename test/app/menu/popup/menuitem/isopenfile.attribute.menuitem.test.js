var chai = require('chai'); 
var expect = chai.expect;

const { init } = require('../../../../../src/app/menu/popup/menuitem/isopenfile.attribute.menuitem');

describe("isOpenFile menuitem test", function(){

    it('basic test', function() {
        let attributesMap = { 'menuitem': new Map(), 'menu': new Map() };
        attributesMap['menuitem'].set('isOpen', {attribute: () => true});
        attributesMap['menu'].set('isFile', {attribute: () => true});


        let isOpenFileAttributeDomain = init(attributesMap);
        
        let result = isOpenFileAttributeDomain.attribute({'popup': {'menu': {}}});
        
        expect(result).to.be.true;

    })

    it('basic test menuitem isOpen false', function() {
        let attributesMap = { 'menuitem': new Map(), 'menu': new Map() };
        attributesMap['menuitem'].set('isOpen', {attribute: () => false});
        attributesMap['menu'].set('isFile', {attribute: () => true});


        let isOpenFileAttributeDomain = init(attributesMap);
        
        let result = isOpenFileAttributeDomain.attribute({'popup': {'menu': {}}});
        
        expect(result).to.be.false;

    })

    it('basic test menuitem isFile false', function() {
        let attributesMap = { 'menuitem': new Map(), 'menu': new Map() };
        attributesMap['menuitem'].set('isOpen', {attribute: () => true});
        attributesMap['menu'].set('isFile', {attribute: () => false});


        let isOpenFileAttributeDomain = init(attributesMap);
        
        let result = isOpenFileAttributeDomain.attribute({'popup': {'menu': {}}});
        
        expect(result).to.be.false;

    })

    it('test execute', function() {

        let entity_test = {'popup': {'menu': {}}};

        let attributesMap = { 'menuitem': new Map(), 'menu': new Map() };
        attributesMap['menuitem'].set('isOpen', {attribute: () => true});
        attributesMap['menu'].set('isFile', {attribute: () => false});


        let isOpenFileAttributeDomain = init(attributesMap);
        
        isOpenFileAttributeDomain.execute(entity_test);

        expect(entity_test).to.have.property('isOpenFile');

    });

})