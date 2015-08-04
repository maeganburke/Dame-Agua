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
    $('#result').append("It's suggested that you drink at least <b>" + result + "</b> liter(s) per day in order to #tapout!*");
    $('#divider').append("<br> <div class='divider-horizontal'></div>")
  });
  $("#pounds").click(function(){
    $('#result').empty();
    $('#divider').empty();
    var weight = document.getElementById("weight").value;
    console.log(weight);
    var result = (weight / 2);
    result = (result * 0.0295735);
    result = +result.toFixed(2);
    $('#result').append("It's suggested that you drink at least <b>" + result + "</b> ounces per day in order to #tapout!*");
    $('#divider').append("<br> <div class='divider-horizontal'></div>")
  });
});

// dameagua
$(function () {

  var geocoder;
  var map;

  function initialize() {
    geocoder = new google.maps.Geocoder();
    var Barcelona = new google.maps.LatLng(41.3917782, 2.1772809999999936);
    var mapOptions = {
      zoom: 15,
      center: Barcelona
    };
    map = new google.maps.Map(document.getElementById('map-canvas'),
          mapOptions);

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
    currentLocation();
    $('#searchForm').on('submit', codeAddress);
    $('#currentLocation').on('click', currentLocation);
  }

  function currentLocation() {
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var pos = new google.maps.LatLng(position.coords.latitude,
                                         position.coords.longitude);

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
})




// $(function waterCalculator(event) {
//   event.preventDefault();
//   var weight = document.getElementById('weight').value;
//   console.log(weight);
//   function calculate(weight) {
//     var result = (weight/2);
//     $("#result").append(result);
//   }
//   $('#tapoutCalculator').on('submit', waterCalculator;
// });
