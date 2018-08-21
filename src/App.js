import React, { Component } from 'react'
import initialData from './initial-data'
import Column from './Column'

export default class TM_FILENAME_BASE extends Component {   
    state = initialData

    render() {
        return this.state.columnOrder.map((columnId) => {
            const column = this.state.columns[columnId]
            const tasks = column.taskIds.map(taskId => this.state.tasks[taskId])

            return <Column key={column.id} column={column} tasks={tasks} />
        })
    }
}
