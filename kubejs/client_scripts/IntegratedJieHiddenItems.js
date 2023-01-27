// priority: 0

// Base setup
function AddToEach(modid, array) {
	let temp = [""];
	array.forEach((element, index) => {
		temp[index] = modid + ':' + element;
	});
	return temp;
}

console.info('Hello, World! (You will see this line every time client resources reload)')

JEIEvents.hideItems(event => {

	let tunnelsToHide = [
		'part_interface_fluid', 'part_interface_energy', 'part_interface_filter_energy', 'part_importer_energy', 'part_exporter_energy',
		'part_importer_world_energy', 'part_exporter_world_fluid', 'part_importer_world_fluid', 'part_exporter_fluid', 'part_importer_fluid',
		'part_interface_fluid', 'part_interface_filter_fluid',
	];
	let dynamicsToHide = ['energy_battery', 'mechanical_squeezer', 'mechanical_drying_basin', 'part_fluid_reader', 'coal_generator', 'energy_battery_creative']

	function HideArray(array) {
		array.forEach(element => {
			event.hide(element);
		});
	}

	HideArray(AddToEach('integratedtunnels', tunnelsToHide));
	HideArray(AddToEach('integrateddynamics', dynamicsToHide));
	// Hide items in JEI here

})