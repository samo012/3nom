var app = angular.module("3nom", []);

app.controller("myCtrl", function($scope, $http) {
  $http.get('https://api.itorah.com/api/Speakers/allspeakers').
  then(function(response) {
    var data = response.data;

    for (var i = 0; i <= data.length; i++) {
      if(typeof data[i] !== 'undefined'){
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
  $scope.selectedSpeaker = "";
var catElement = document.getElementById("category");
catElement.value = "Please Select a Speaker";
catElement.disabled = true;
  $scope.getCat = function(){
    
    catElement.disabled = false;
   $http.get("https://api.itorah.com/api/Categories/catfilter?"+$scope.selectedSpeaker.id).
   then(function(response) {
    $scope.cats = response.data;
    $scope.selectedCat = "";
  });
 }

});