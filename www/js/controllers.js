angular.module('app.controllers', [])
  
.controller('homeCtrl', function($scope) {

	var locations = [ 
	['5th Block',13.005462, 74.794760,27],
['4th Block',13.006016, 74.795710,26],
['3rd Block',13.006488, 74.796576,25],
['2nd Block',13.007241, 74.797265,24],
['1st Block',13.008243, 74.797298,23],
['7th Block',13.007922, 74.796279,22],
['8th Block',13.007472, 74.794097,21],
['Mega Hostel Tower 3',13.006360, 74.794508,20],
['Mega Hostel Tower 2',13.006968, 74.795313,19],
['Mega Hostel Tower 1',13.007828, 74.794879,18],
['PG Block',13.008475, 74.798332,17],
['SJA',13.008673, 74.795725,16],
['NTB',13.009320, 74.794493,15],
['ATB',13.009540, 74.793886,14],
['Library',13.009980, 74.794181,13],
['MB',13.010841, 74.794350,12],
['Mining Dept',13.011742, 74.793999,11],
['Civil Dept',13.012269, 74.793954,10],
['Applied Mechanics Dept',13.012274, 74.794534,9],
['Mechanical Dept',13.012182, 74.795992,8],
['Metallurgy Dept',13.010414, 74.794976,7],
['Chemical Dept',13.010762, 74.795330,6],
['ECE Dept',13.011619, 74.792316,5],
['CSE Dept',13.011348, 74.792080,4],
['IT Dept',13.011041, 74.792352,3],
['Guest House',13.012787, 74.791708,2],
['VSB Guest House',13.013972, 74.791942,1]
];
  navigator.geolocation.getCurrentPosition(function(pos){
          var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 13,
      center: new google.maps.LatLng(pos.coords.latitude,pos.coords.longitude),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });
    var infowindow = new google.maps.InfoWindow();
    var marker, i;
    var markers = new Array();
    for (i = 0; i < locations.length; i++) 
    {  
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map
      });

      markers.push(marker);
      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
       
          infowindow.setContent('<a href="https://www.google.com/maps/dir/Current+Location/'+ locations[i][1] + "," + locations[i][2] +  '" target="_blank">Take me there</a>');
          infowindow.open(map, marker);
        }
      })(marker, i));
    }
    marker = new google.maps.Marker({
        position: new google.maps.LatLng(pos.coords.latitude,pos.coords.longitude),
        map: map
      });
    google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
       
          infowindow.setContent('You are here');
          infowindow.open(map, marker);
        }
      })(marker, i));
  var directionsDisplay = new google.maps.DirectionsRenderer({
    map: map
  });
  });		

})
   
.controller('loginCtrl', function($scope,$state) {

	$scope.data = {};

	$scope.loginEmail = function(){
 
  var ref = new Firebase("https://burning-heat-740.firebaseio.com");
 
  ref.authWithPassword({
    email    : $scope.data.email,
    password : $scope.data.password
  }, function(error, authData) {
    if (error) {
      console.log("Login Failed!", error);
    } else {
      console.log("Authenticated successfully with payload:", authData);
      $state.go('home')
    }
  });
 
};

})
   
.controller('signupCtrl', function($scope,$state) {

	$scope.data = {};

	$scope.signupEmail = function(){  
 
  var ref = new Firebase("https://burning-heat-740.firebaseio.com");
 
  ref.createUser({
    email    : $scope.data.email,
    password : $scope.data.password
  }, function(error, userData) {
    if (error) {
      console.log("Error creating user:", error);
    } else {
      console.log("Successfully created user account with uid:", userData.uid);
      $state.go('login')
    }
  });
 
};
})
   
.controller('helpCtrl', function($scope) {

})
   
.controller('contactUsCtrl', function($scope) {

})
   
.controller('faresCtrl', function($scope) {

})
 