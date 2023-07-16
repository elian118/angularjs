angular.module('todo').controller('TodoCtrl', ['$scope', ($scope) => {
    $scope.todos = [
        {
            id: 1,
            title: '요가수련',
            completed: false,
            createdAt: Date.now()
        },
        {
            id: 2,
            title: '앵귤러 학습',
            completed: false,
            createdAt: Date.now()
        },
        {
            id: 3,
            title: '운동',
            completed: true,
            createdAt: Date.now()
        }
    ];

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
}]);