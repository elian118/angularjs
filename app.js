(() => {
    const app = angular.module('todo', []);

    app.controller('TodoCtrl', ['$scope', ($scope) => {
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
            console.log(todo);
            const idx = $scope.todos.findIndex((item) => item.id === todo.id);
            console.log(idx);
            idx > -1 && $scope.todos.splice(idx, 1);
        }
    }]);
})();