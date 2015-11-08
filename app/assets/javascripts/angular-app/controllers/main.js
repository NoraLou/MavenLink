angular
  .module('app')
  .controller('MainCtrl', ['Todo', '$scope','$routeParams', function(Todo, $scope, $routeParams,){

    $scope.post = new Todo();
    $scope.todos = Todo.query();

    // $scope.addTodo = function(){
    //   $scope.todo = new Todo();
    //   $scope.editing = false;
    // }

    $scope.save = function(todo){

    }



    // $scope.addTodo =

  }]);
