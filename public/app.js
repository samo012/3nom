var app = angular.module("3nom", []);

app.controller("myCtrl", function($scope, $http) {
  $scope.selectedSpeaker = "";
  $scope.selectedCat = "";
  $scope.selectedSubCat = "";

//get all speakers
  $http.get('https://api.itorah.com/api/Speakers/allspeakers').
  then(function(response) {
    var data = response.data;

    for (var i = 0; i <= data.length; i++) {
      if(typeof data[i] !== 'undefined'){
        //if main speaker insert Main Speaker: 
       if (data[i].isMainSpeaker === true){
        data[i].speaker =  "Main Speaker: "+ data[i].speaker;
      }
      else{
        data[i].speaker = data[i].speaker;
      }
    }
  }

  $scope.speakers = data

});

//Initially disable 2nd and 3rd Dropdowns
  var catElement = document.getElementById("category");
  catElement.disabled = true;
  var scatElement = document.getElementById("scategory");
  scatElement.disabled = true;


  $scope.getCat = function(){
    catElement.disabled = false;
    $http.get("https://api.itorah.com/api/Categories/catfilter?="+$scope.selectedSpeaker.id).
    then(function(response) {
      var categories = response.data;
      for (var i = 0; i <= categories.length; i++) {
       if(typeof categories[i] !== 'undefined')
        categories[i].name = categories[i].name + " (" + categories[i].shiurCount + ")";
    }
    $scope.cats = categories;
  });
  }

  $scope.getSubCat = function(){
    scatElement.disabled = false;
    $http.get("https://api.itorah.com/api/Categories/subfilter?CategoryID="+$scope.selectedCat.id+"&SpeakerID="+$scope.selectedSpeaker.id).
    then(function(response) {
      var categories = response.data;
      for (var i = 0; i <= categories.length; i++) {
       if(typeof categories[i] !== 'undefined')
        categories[i].name = categories[i].name + " (" + categories[i].shiurCount + ")";
    }
    $scope.scats = categories;

  });
  }
  $scope.getResults = function(){
    if ($scope.selectedSubCat.id != "")
      $http.get("https://api.itorah.com/api/Shiurim/all?PageIndex=1&PageSize=20&CategoryID="+$scope.selectedSubCat.id+"&SpeakerID="+$scope.selectedSpeaker.id).
    then(function(response) {
      $scope.results =  response.data.shiurList;
    });
    else
      $http.get("https://api.itorah.com/api/Shiurim/all?PageIndex=1&PageSize=20&CategoryID="+$scope.selectedCat.id+"&SpeakerID="+$scope.selectedSpeaker.id).
    then(function(response) {
      $scope.results =  response.data.shiurList;
    });
  }
});