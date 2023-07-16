angular.module('todo').controller('TodoCtrl', ($scope, todoStorage) => {
    $scope.todos = todoStorage.get();

    $scope.remove = (todo) => todoStorage.remove(todo);

    $scope.add = (newTodoTitle) => {
        todoStorage.add(newTodoTitle);
        $scope.newTodoTitle = ''; // 인풋 초기화
    }

    $scope.update = () => todoStorage.update();
});