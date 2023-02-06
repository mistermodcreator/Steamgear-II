ItemEvents.clientLeftClicked(event => {
	if (event.item == 'mahoutsukai:morgan' || event.item == 'mahoutsukai:caliburn') {
		event.item.count = 0;
	}
});