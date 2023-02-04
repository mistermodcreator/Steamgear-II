let shoudlBeDisabled = ['mahoutsukai:morgan', 'mahoutsukai:caliburn'];

ItemEvents.tooltip(tooltip => {

	Disable(shoudlBeDisabled);

	function Disable(array) {
		array.forEach(element => {
			tooltip.add(element, '§4Disabled')
		});
	}

});