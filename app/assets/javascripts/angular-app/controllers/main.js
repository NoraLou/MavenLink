angular
  .module('app')
  .controller('MainCtrl', ['Todo', '$scope','$routeParams', function(Todo, $scope, $routeParams){

    //ng-model todo is by default new
    $scope.todo = new Todo();
    $scope.todos = Todo.query();


    $scope.save = function(todo){
      if(!todo.id){
        $scope.todo.$save().then(function(response){
          $scope.todos.push(response)
        });
      }else{
        Todo.update(todo);
      }

      $scope.todo = new Todo();
      $scope.todoForm.$setPristine();
    }

    $scope.delete = function(todo){
      Todo.delete(todo)
      _.remove($scope.todos, todo)
    }

     $scope.checkAndSave = function(todo) {
      $scope.save(todo);
    };

  }]);
