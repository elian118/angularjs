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
    };

    return storage;
});

