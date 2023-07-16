angular.module('todo').controller('TodoCtrl', ($scope, todoStorage) => {
    $scope.todos = todoStorage.get();

    $scope.remove = (todo) => {
        const idx = $scope.todos.findIndex((item) => item.id === todo.id);
        console.log(idx);
        idx > -1 && $scope.todos.splice(idx, 1);
    }

    $scope.add = (newTodoTitle) => {
        const newTodo = {
            id: $scope.todos.length ? $scope.todos[$scope.todos.length - 1].id + 1 : 1,
            title: newTodoTitle,
            completed: false,
            createdAt: Date.now()
        };

        $scope.todos.push(newTodo);
        $scope.newTodoTitle = ''; // 인풋 초기화
    }
});