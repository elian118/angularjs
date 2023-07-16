angular.module('todo').directive('todoTitle', () => ({ template: '<h1 class="text-4xl font-bold mb-4">할 일 목록</h1>' }));
angular.module('todo').directive('todoItem', function () {
    return {
        templateUrl: 'todoItem.tpl.html'
    }
});