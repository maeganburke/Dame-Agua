var map;

function initialize() {
  var mapOptions = {
    zoom: 15
  };
  map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

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


// $(function() {
//
// 	// window.AguaMap = function() {
// 	// 	var mapOptions = {
// 	// 		zoom: 15,
// 	// 		center: new google.maps.LatLng(43.391829, 2.177191)
// 	// 	};
// 	// 	// this is where we create our map
// 	// 	this.map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
// 	// 	this.locations = [];
// 	// 	this.bounds = new google.maps.LatLngBounds();
// 	// };
// 	//
// 	// 	AguaMap.prototype.addLocation = function(location) {
// 	//     this.locations.push(location);
// 	//   };
// 	//
// 	// 	AguaMap.prototype.getCoords = function (address, callback) {
// 	// 		var geocoder = new google.maps.Geocoder();
// 	//
//   //   	geocoder.geocode( { 'address' : address}, function(response, status) {
//   //     if (status == google.maps.GeocoderStatus.OK) {
//   //       var lat = response[0].geometry.location.A
//   //       var lon = response[0].geometry.location.F
//   //       var latLng = new google.maps.LatLng(lat, lon)
//   //       callback(latLng);
// 	// 			console.log(lat, lon);
//   //     } else {
//   //       alert("There was something wrong with your address");
//   //     };
//   //   });
//   // };
// 	//
// 	// AguaMap.prototype.repositionMap = function(location) {
// 	// 	this.map.setCenter(location);
// 	// 	this.map.setZoom(15);
// 	// };
// 	//
// 	// AguaMap.prototype.resizeMap = function() {
// 	// 	this.map.fitBounds(this.bounds);
// 	// };
// 	//
// 	// AguaMap.prototype.addListeners = function() {
// 	// 	$("#submit").on("click", function() {
// 	// 		var address = $("#address").val();
// 	// 		this.addLocation(address);
// 	// 		this.getCoords(address, this.addMarker.bind(this));
// 	// 	}.bind(this));
// 	//
// 	// 	$("#done").on("click", this.resizeMap.bind(this));
// 	// };
// 	//
// 	// window.AguaMap = new AguaMap();
//
// });
