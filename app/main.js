//import 'ionic/js/ionic-angular';

angular.module('ionicApp', ['ionic'])
      .controller('MyController', ['$scope', function ($scope) {
        $scope.greetMe = 'World';
      }]);

angular.element(document).ready(function() {

  angular.bootstrap(document, ["ionicApp"]);
}); 