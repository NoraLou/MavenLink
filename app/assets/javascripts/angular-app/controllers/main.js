angular
  .module('app')
  .controller('MainCtrl', ['Todo', '$scope', function(Todo, $scope){

    $scope.todos = Todo.query();

  }]);
