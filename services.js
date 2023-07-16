// 서비스
angular.module('todo').factory('todoStorage', () => {
    const TODO_DATA = 'TODO_DATA';
    const storage = {
        todos: [],
        _saveToLocalStorage: (data) => localStorage.setItem(TODO_DATA, JSON.stringify(data)),
        _getFromLocalStorage: () => JSON.parse(localStorage.getItem(TODO_DATA || [])),
        get: () => {
            // storage.todos = storage._getFromLocalStorage();
            // 위 할당문 대신 아래 angular.copy() 사용 -> 앵귤러 컴포넌트 라이프사이클에 맞춰야 하기 때문
            angular.copy(storage._getFromLocalStorage(), storage.todos);
            return storage.todos;
        },
        remove: (todo) => {
            const idx = storage.todos.findIndex((item) => item.id === todo.id);
            if (idx > -1) {
                storage.todos.splice(idx, 1);
                storage._saveToLocalStorage(storage.todos);
            }
        },
        add: (newTodoTitle) => {
            const newTodo = {
                id: storage.todos.length ? storage.todos[storage.todos.length - 1].id + 1 : 1,
                title: newTodoTitle,
                completed: false,
                createdAt: Date.now()
            };
            storage.todos.push(newTodo);
            storage._saveToLocalStorage(storage.todos);
        },
        update: () => storage._saveToLocalStorage(storage.todos)
    };

    return storage;
});

