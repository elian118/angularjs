// 서비스
angular.module('todo').factory('todoStorage', () => {
    const storage = {
        todos: [
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
        ],
        get: () => storage.todos,
        remove: (todo) => {
            const idx = storage.todos.findIndex((item) => item.id === todo.id);
            idx > -1 && storage.todos.splice(idx, 1);
        },
        add: (newTodoTitle) => {
            const newTodo = {
                id: storage.todos.length ? storage.todos[storage.todos.length - 1].id + 1 : 1,
                title: newTodoTitle,
                completed: false,
                createdAt: Date.now()
            };

            storage.todos.push(newTodo);
        }
    };

    return storage;
});

