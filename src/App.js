import React, { Component } from 'react'
import styled from 'styled-components'
import { DragDropContext } from 'react-beautiful-dnd'
import initialData from './initial-data'
import Column from './Column'
import NewTaskContainer from './NewTaskContainer'

const Container = styled.div`
    max-width: 500px;
    margin: 0 auto;
    font-family: Helvetica;
`

export default class TM_FILENAME_BASE extends Component {   
    state = initialData

    onDragEnd = result => {
        const { destination, source, draggableId } = result

        if (!destination) {
            return
        }

        if (
            destination.droppableId === source.droppableId && destination.index === source.index
        ) {
            return
        }

        const column = this.state.columns[source.droppableId]
        const newTaskIds = Array.from(column.taskIds)
        newTaskIds.splice(source.index, 1)
        newTaskIds.splice(destination.index, 0, draggableId)

        const newColumn = {
            ...column,
            taskIds: newTaskIds
        }

        const newState = {
            ...this.state,
            columns: {
                ...this.state.columns,
                [newColumn.id]: newColumn
            }
        }

        this.setState(newState)
    }

    addTask(newTaskData) {
        this.setState({
            ...this.state,
            newTaskData
        })
    }

    removeTask(columnId, taskId) {
        const { [taskId]: _, ...newTasks } = this.state.tasks

        const newColumns = {
            ...this.state.columns,
            [columnId]: {
                ...this.state.columns[columnId],
                taskIds: this.state.columns[columnId]['taskIds'].filter((el) => el !== taskId)
            },
        }

        this.setState({
            ...this.state,
            tasks: newTasks,
            columns: newColumns
        })
    }

    render() {
        return (
            <Container>
                <DragDropContext onDragEnd={this.onDragEnd}>
                {this.state.columnOrder.map((columnId) => {
                        const column = this.state.columns[columnId]
                        const tasks = column.taskIds.map(taskId => this.state.tasks[taskId])

                        return <Column key={column.id} column={column} tasks={tasks} removeTask={this.removeTask.bind(this)}/>
                    })}
                </DragDropContext>
                <NewTaskContainer addTask={this.addTask.bind(this)} data={this.state} columnId="column-1"/>
            </Container>
        )
    }
}
