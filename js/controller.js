angular.module("RouteControllers",[])
 .controller('HomeController', function($scope){
  $scope.title = "Welcome To Angular Todo! :)";   
     
 })
 
    .controller('RegisterController', function($scope, UserAPIService, store) {
        
        store.remove("testObject");
 
        $scope.registrationUser = {};
        var URL = "https://morning-castle-91468.herokuapp.com/";
        // var storageTest = {
        //     value: "Hello, World!"
        // };
        // store.set('testObject', storageTest);
        
        $scope.login = function() {
          UserAPIService.callAPI(URL + "accounts/api-token-auth/", $scope.data).then(function(results) {
              $scope.token = results.data.token;
              store.set("username", $scope.registrationUser.username);
              store.set("authToken", $scope.token);
              
          }).catch(function(err) {
              console.log(err.data);
          }); 
        }
 
        $scope.submitForm = function() {
            if ($scope.registrationForm.$valid) {
                $scope.registrationUser.username = $scope.user.username;
                $scope.registrationUser.password = $scope.user.password;
            
            UserAPIService.callAPI(URL + "accounts/register/", $scope.registrationUser).then(function(results){
                $scope.data = results.data;
                alert("Yay You have successfully registered!!");
                $scope.login();
            }).catch(function(err){
                alert("Oh no! Someone must have that name already!");
                console.log(err);
            });
         }
        };
    });