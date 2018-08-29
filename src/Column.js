import React, { Component } from 'react'
import styled from 'styled-components'
import { Droppable } from 'react-beautiful-dnd'
import Task from './Task'

const Container = styled.div`
  margin: 8px;
  border: 2px solid black;
  border-radius: 5px;
`
const Title = styled.h3`
  padding: 8px;
  font-weight: 700;
  border-bottom: 1px solid black;
`
const TaskList = styled.div`
  padding: 8px;
  padding-top: 12px;
  background-color: ${props => props.isDraggingOver ? 'skyblue' : '#8DBCDE'};
  transition: background-color .5s ease-in-out;
`

export default class Column extends Component {
  render() {
    return (
        <Container>
          <Title>{this.props.column.title}</Title>
          <Droppable droppableId={this.props.column.id}>
            {(provided, snapshot) => (
              <TaskList
                innerRef={provided.innerRef}
                {...provided.droppableProps}
                isDraggingOver={snapshot.isDraggingOver}
              >
                {this.props.tasks.map((task, index) => <Task key={task.id} task={task} index={index} handleRemove={() => this.props.removeTask(this.props.column.id, task.id)}/>)}
                {provided.placeholder}
              </TaskList>
            )}
          </Droppable>        
        </Container>
    )
  }
}
