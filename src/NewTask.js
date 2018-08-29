import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div`
    margin: 8px;
    border: 1px solid lightgrey;
    border-radius: 2px;
`

const Input = styled.input`
    border: none;
    border-radius: 2px;
    padding: 8px;
    width: 95%;
`

export default class NewTask extends Component {
    state = {
        newTaskContent: ''
    }

    updateNewTaskContent(e) {
        e.preventDefault()
        this.setState({
            newTaskContent: e.target.value
        })
    }

    render() {
        return (
            <Container>
                <form onSubmit={(e) => {
                    e.preventDefault()
                    this.props.submitHandler( this.state.newTaskContent)
                    this.setState({newTaskContent: ''})
                    }}
                >
                    <Input onChange={(e) => {this.updateNewTaskContent(e)}} value={this.state.newTaskContent} placeholder="New Task.."/>
                </form>
            </Container>
        )
    }
}
