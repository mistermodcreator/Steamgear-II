// priority: 0

// Base setup
function AddToEach(modid, array) {
	let temp = [""];
	array.forEach((element, index) => {
		temp[index] = modid + ':' + element;
	});
	return temp;
}

console.info('Hello, World! (You will see this line every time server resources reload)')

ServerEvents.recipes(event => {
	let tunnelsToDelete = ['part_interface_fluid', 'part_interface_energy', 'part_interface_filter_energy', 'part_importer_energy',
		'part_exporter_energy', 'part_importer_world_energy', 'part_exporter_world_energy', 'part_exporter_world_fluid',
		'part_importer_world_fluid', 'part_exporter_fluid', 'part_importer_fluid', 'part_interface_fluid', 'part_interface_filter_fluid',];
	let dynamicsToDelete = ['energy_battery', 'mechanical_squeezer', 'mechanical_drying_basin', 'part_fluid_reader', 'coal_generator'];


	function DeleteArray(array) {
		array.forEach(element => {
			event.remove({ output: element })
		});
	}

	DeleteArray(AddToEach('integratedtunnels', tunnelsToDelete));
	DeleteArray(AddToEach('integrateddynamics', dynamicsToDelete));
})

ServerEvents.tags('item', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')

	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})