import React, { Component } from 'react'
import styled from 'styled-components'
import { Draggable } from 'react-beautiful-dnd'

const Container = styled.div`
    border: 1px solid lightgrey;
    border-radius: 2px;
    padding: 8px;
    margin-bottom: 12px;
    background-color: ${props => props.isDragging ? '#CCC' : '#FFF'};
    transition: background-color .25s ease-in-out;
    clear: both;
`

const DeleteTask = styled.span`
    float: right;
    color: lightgray;
    cursor: pointer;

    &:hover {
      color: black;
    }
`

export default class Task extends Component {
  render() {
    return (
        <Draggable draggableId={this.props.task.id} index={this.props.index}>
          {(provided, snapshot) => (
            <Container
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              innerRef={provided.innerRef}
              isDragging={snapshot.isDragging}
            >
              {this.props.task.content}
              <DeleteTask onClick={() => this.props.handleRemove()}>{'\u2573'}</DeleteTask>
            </Container>
          )}
        </Draggable>
    )
  }
}
