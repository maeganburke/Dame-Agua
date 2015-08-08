// tapout
$(function(){
  $("#kilo").click(function(){
    $('#result').empty();
    $('#divider').empty();
    var weight = document.getElementById("weight").value;
    var weight = (weight * 2.20462);
    console.log(weight);
    var result = (weight / 2);
    result = (result * 0.0295735);
    result = +result.toFixed(2);
    $('#but').append("*we're not your mama, nor are we doctors so don't hold us to this")
    $('#result').append("It's suggested that you drink at least <b>" + result + "</b> liter(s) per day in order to #tapout!*");
  });
  $("#pounds").click(function(){
    $('#result').empty();
    $('#divider').empty();
    var weight = document.getElementById("weight").value;
    console.log(weight);
    var result = (weight / 2);
    result = +result.toFixed(2);
    $('#result').append("It's suggested that you drink at least <b>" + result + "</b> ounces per day in order to #tapout!*");
    $('#but').append("*we're not your mama, nor are we doctors so don't hold us to this")
  });
});

// dameagua
$("body").ready(function () {

  var geocoder;
  var directionsDisplay;
  var directionsService = new google.maps.DirectionsService();
  var map;
  var currentFountain;

  function initialize() {
    console.log("initialized google map");
    directionsDisplay = new google.maps.DirectionsRenderer();
    geocoder = new google.maps.Geocoder();
    var Barcelona = new google.maps.LatLng(41.3917782, 2.1772809999999936);
    var mapOptions = {
      zoom: 17,
      center: Barcelona
    };
    map = new google.maps.Map(document.getElementById('map-canvas'),
          mapOptions); directionsDisplay.setMap(map); directionsDisplay.setPanel(document.getElementById("directionsPanel"));

    function calcRoute(fountain, method) {

        var start = new google.maps.LatLng(localStorage.getItem("lat"), localStorage.getItem("lon"));
        console.log(start);
        console.log("calculating route...");
        console.log(method);
        var methodType = google.maps.TravelMode.WALKING;
        switch(method){
          case "walk": {
            methodType = google.maps.TravelMode.WALKING;
            break;
          }
          case "drive": {
            methodType = google.maps.TravelMode.DRIVING;
            break;
          }
          case "transit": {
            methodType = google.maps.TravelMode.TRANSIT;
            break;
          }
          case "bike": {
            methodType = google.maps.TravelMode.WALKING;
            break;
          }
        }

        var request = {
          origin:start,
          destination: fountain,
          travelMode: methodType
        };
        directionsService.route(request, function(result, status) {
          if (status == google.maps.DirectionsStatus.OK) {
            directionsDisplay.setDirections(result);
          } else {
            console.log("no directions available");
          }
        });
    };

    $('.route-calculator').on('click', function(event){
      console.log("this is the event target... ")
      var method = $(event.target).find("img").data('meth')
      console.log(method);
      calcRoute(currentFountain, method);
    })

    var layer = new google.maps.FusionTablesLayer({
        query: {
          select: 'location',
          from: '1R_CVwg5HPaY9Or5Mquur1UhvkISMh2_cdWFTiCdT'
        },
        styles: [{
          markerOptions: {
            iconName: "water"
          }
        }]
    });

    layer.setMap(map);
    google.maps.event.addListener(layer, 'click', function(event) {
      var position = event.latLng;
      currentFountain = position;
      calcRoute(position);
    });
    currentLocation();
    $('#searchForm').on('submit', codeAddress);
    $('#currentLocation').on('click', currentLocation);
  }

  function currentLocation() {
    console.log("hello from current location!");
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        localStorage.setItem("lat", position.coords.latitude);
        localStorage.setItem("lon", position.coords.longitude);
        var pos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

        var infowindow = new google.maps.InfoWindow({
          map: map,
          position: pos,
          content: 'we found you!'
        });
        console.log("we found em!");

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
      position: new google.maps.LatLng(41.3917782, 2.1772809999999936),
      content: content
    };

    var infowindow = new google.maps.InfoWindow(options);
    map.setCenter(options.position);
  }

  function codeAddress(event) {
    console.log("hello from codeAddress")
    event.preventDefault();
    var address = document.getElementById('address').value;
    geocoder.geocode( { 'address': address}, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        map.setCenter(results[0].geometry.location);
        var marker = new google.maps.Marker({
            map: map,
            position: results[0].geometry.location
        });
      } else {
        alert('Oopsies! Geocode didn\'t work.  Here\'s why: ' + status);
      }
      console.log(address);
    });
  }
  google.maps.event.addDomListener(window, 'load', initialize);
console.log("all done!")
})

// bootstrap
$(function(){
    $('.carousel').carousel({
      interval: 4000,
      pause: "hover"
    });
});
