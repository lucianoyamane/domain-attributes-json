var chai = require('chai'); 
var expect = chai.expect;

const { MenuItemAttributeHolder } = require('../../../../../src/app/menu/popup/menuitem/holder');

describe("MenuItemAttributeHolder test", function(){

    it('getAttributeMenuItem test', function() {

        let attributesMap = { 'menuitem': new Map(), 'menu': new Map() };
        attributesMap['menuitem'].set('attribute_test', {attribute: () => 'return_test'});

        let holder = new MenuItemAttributeHolder(attributesMap, 'test');
        
        let result = holder.getAttributeMenuItem('attribute_test', {});
        
        expect(result).to.eq('return_test');

    })

    it('getAttributeMenu test', function() {

        let attributesMap = { 'menuitem': new Map(), 'menu': new Map() };
        attributesMap['menu'].set('attribute_menu_test', {attribute: () => 'return_menu_test'});

        let holder = new MenuItemAttributeHolder(attributesMap, 'test');
        
        let result = holder.getAttributeMenu('attribute_menu_test', {'popup': {'menu': {}}});
        
        expect(result).to.eq('return_menu_test');

    })

    it('validStructure test', function() {

        let holder = new MenuItemAttributeHolder({}, 'test');
        
        let result = holder.validStructure({popup: {}});
        
        expect(result).to.be.true;

    })

    it('validStructure undefined test', function() {

        let holder = new MenuItemAttributeHolder({}, 'test');
        
        let result = holder.validStructure(undefined);
        
        expect(result).to.be.false;

    })

    it('setAttr test', function() {

        let holder = new MenuItemAttributeHolder({}, 'test');
        
        let entity_test = { popup: {} };

        holder.setAttr(entity_test);
        
        expect(entity_test).to.have.property('test');

    })

})