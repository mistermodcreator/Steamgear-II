// priority: 0

// Base setup
ServerEvents.recipes(event => {
	event.remove({ output: 'assortedcore:steel_block' });
	event.remove({ output: 'alloyed:steel_block' });
	event.remove({ output: 'material_elements:steel_block' });

	AddBlock('createindustry:steel_block', 'createindustry:steel_ingot');
	AddBlock('assortedcore:steel_block', 'assortedcore:steel_ingot');
	AddBlock('alloyed:steel_block', 'alloyed:steel_ingot');
	AddBlock('material_elements:steel_block', 'material_elements:steel_ingot');



	function AddBlock(block, item) {
		event.shapeless(block, [
			item, item, item,
			item, item, item,
			item, item, item]);
		event.shaped(block, [
			'sss',
			'sss',
			'sss'
		], {
			s: item,
		});
	}
})

ServerEvents.tags('item', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')

	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})


