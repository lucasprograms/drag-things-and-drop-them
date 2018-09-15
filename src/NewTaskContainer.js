import React, { Component } from 'react'
import NewTask from './NewTask'

export default class NewTaskContainer extends Component {
    state = this.props.data

    buildNewData (columnId, taskContent) {
        const getLastTaskId = () => {
            const taskKeys = Object.keys(this.props.data.tasks)
            return taskKeys.length ? taskKeys[taskKeys.length - 1] : null
        }

        const getNewTaskId = (taskId) => {
            if (taskId !== null) {
                const taskIdComponents = taskId.split('-')
                return [taskIdComponents[0], parseInt(taskIdComponents[1], 10) + 1].join('-')
            } else {
                return 'task-0'
            }
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
