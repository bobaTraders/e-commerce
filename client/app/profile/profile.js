var app = angular.module('e-Commer.profile', []);

app.controller('profileCtrl', function($scope, $location, profileFac, Auth) {
  $scope.info = {};
  $scope.user = Auth.user;
  // console.log($scope.user.id); // undefind
  profileFac.getUser($scope.user.id).then(function(items){
    $scope.info = items;
  });
});

app.factory('profileFac', function($http) {
  return {
    getUser: function(user) {
      return $http({
        method: 'GET',
        url: '/api/getAllUserItem',
        params: {id:user}
      })
      .then(function (resp) {
        console.log(resp.data, 'FOoooooo');
        return resp.data;
      })
    }
  }
});