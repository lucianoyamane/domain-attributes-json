var chai = require('chai'); 
var expect = chai.expect;

const { MenuItemAttributeHolder } = require('../../../../../src/app/menu/popup/menuitem/menuitem.attribute.holder');

describe("MenuItemAttributeHolder test", function(){

    it('basic getAttributeMenuItem', function() {

        let attributesMap = { 'menuitem': new Map(), 'menu': new Map() };
        attributesMap['menuitem'].set('attribute_test', {attribute: () => 'return_test'});

        let holder = new MenuItemAttributeHolder(attributesMap, 'test');
        
        let result = holder.getAttributeMenuItem('attribute_test', {});
        
        expect(result).to.eq('return_test');

    })

    it('basic getAttributeMenu', function() {

        let attributesMap = { 'menuitem': new Map(), 'menu': new Map() };
        attributesMap['menu'].set('attribute_menu_test', {attribute: () => 'return_menu_test'});

        let holder = new MenuItemAttributeHolder(attributesMap, 'test');
        
        let result = holder.getAttributeMenu('attribute_menu_test', {'popup': {'menu': {}}});
        
        expect(result).to.eq('return_menu_test');

    })

})