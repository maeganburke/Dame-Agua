var map;

function initialize() {
  var mapOptions = {
    zoom: 15
  };
  map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

  var defaultBounds = new google.maps.LatLngBounds(
     new google.maps.LatLng(41.297445, 2.0832941),
     new google.maps.LatLng(41.4883845, 2.0269805));
 map.fitBounds(defaultBounds);

 // Create the search box and link it to the UI element.
 var input = (
     document.getElementById('pac-input'));
 map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

 var searchBox = new google.maps.places.SearchBox(
  (input));

 // Listen for the event fired when the user selects an item from the
 // pick list. Retrieve the matching places for that item.
 google.maps.event.addListener(searchBox, 'places_changed', function() {
   var places = searchBox.getPlaces();

   if (places.length == 0) {
     return;
   }
   for (var i = 0, marker; marker = markers[i]; i++) {
     marker.setMap(null);
   }

   // For each place, get the icon, place name, and location.
   var markers = [];
   var bounds = new google.maps.LatLngBounds();
   for (var i = 0, place; place = places[i]; i++) {
     var image = {
       url: place.icon,
       size: new google.maps.Size(71, 71),
       origin: new google.maps.Point(0, 0),
       anchor: new google.maps.Point(17, 34),
       scaledSize: new google.maps.Size(25, 25)
     };

     // Create a marker for each place.
     var marker = new google.maps.Marker({
       map: map,
       icon: image,
       title: place.name,
       position: place.geometry.location
     });

     markers.push(marker);

     bounds.extend(place.geometry.location);
   }

   map.fitBounds(bounds);
 });

 // Bias the SearchBox results towards places that are within the bounds of the
 // current map's viewport.
 google.maps.event.addListener(map, 'bounds_changed', function() {
   var bounds = map.getBounds();
   searchBox.setBounds(bounds);
 });

  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = new google.maps.LatLng(position.coords.latitude,
                                       position.coords.longitude);

      var infowindow = new google.maps.InfoWindow({
        map: map,
        position: pos,
        content: 'you\'re here'
      });
			console.log(pos);
      map.setCenter(pos);
    }, function() {
      handleNoGeolocation(true);
    });
  } else {
    // Browser doesn't support Geolocation
    handleNoGeolocation(false);
  }
}

function handleNoGeolocation(errorFlag) {
  if (errorFlag) {
    var content = 'Error: The Geolocation service failed.';
  } else {
    var content = 'Error: Your browser doesn\'t support geolocation.';
  }

  var options = {
    map: map,
    position: new google.maps.LatLng(43.391829, 2.177191),
    content: content
  };

  var infowindow = new google.maps.InfoWindow(options);
  map.setCenter(options.position);
}

google.maps.event.addDomListener(window, 'load', initialize);
