angular
  .module('app')
  .controller('MainCtrl', ['Todo', '$scope','$routeParams', function(Todo, $scope, $routeParams){
    //ng-model todo is by default new
    $scope.todo = new Todo();
    $scope.todos = Todo.query();

    // $scope.addTodo = function(){
    //   $scope.todo = new Todo();
    //   $scope.editing = false;
    // }

    $scope.save = function(todo){
      if(!todo.id){
        $scope.todo.$save().then(function(response){
          $scope.todos.push(response)
        });
      }
      $scope.todo = new Todo();
    }

    $scope.delete = function(todo){
      Todo.delete(todo)
      _.remove($scope.todos, todo)
    }





  }]);
