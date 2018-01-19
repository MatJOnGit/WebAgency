function initMap() {
	var coords = {lat: 48.873413, lng: 2.349824};

	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 14,
		fullscreenControl: false,
		center: coords
	});

	var marker = new google.maps.Marker({
		position: coords,
		map: map,
		title: 'WebAgency'
	});
}