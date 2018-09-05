import React, { Component } from 'react'
import NewTask from './NewTask'

export default class NewTaskContainer extends Component {
    state = this.props.data

    buildNewData (columnId, taskContent) {
        const getLastTaskId = () => {
            const taskKeys = Object.keys(this.props.data.tasks)
            return taskKeys.length ? taskKeys[taskKeys.length - 1] : 0
        }

        const getNewTaskId = (taskId) => {
            const taskIds = this.props.data.columns[columnId]['taskIds']
            const taskIdNumber = taskIds.length
            return 'task-' + taskIdNumber
        }

        const lastTaskId = getLastTaskId()
        const newTaskId = getNewTaskId(lastTaskId)

        this.props.data.tasks[newTaskId] = { id: newTaskId, content: taskContent }
        this.props.data.columns[columnId]['taskIds'].push(newTaskId)

        return this.props.data
    }

    render() {
        return (
            <NewTask submitHandler={(taskContent) => {
                const newData = this.buildNewData(this.props.columnId, taskContent)
                this.props.addTask(newData)   
            }} />
        )
    }
}
