const initialData = {
    tasks: {
        'task-1': { id: 'task-1', content: 'hello' },
        'task-2': { id: 'task-2', content: 'hello hello' },
        'task-3': { id: 'task-3', content: 'hello hello hello' },
        'task-4': { id: 'task-4', content: 'gb' },
    },

    columns: {
        'column-1': {
            id: 'column-1',
            title: 'Draggable Todo List',
            taskIds: ['task-1', 'task-2', 'task-3', 'task-4']
        }
    },

    columnOrder: ['column-1']
}

export default initialData