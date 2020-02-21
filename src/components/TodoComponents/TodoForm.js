import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            newItem: ''
        };
    }

    handleChanges = e => {
        console.log(e.target.value)
        this.setState({
            newItem: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.addNewItem(this.state.newItem);
        console.log('Hello World')
        this.setState({
            newItem: ''
        });
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                 type='text'
                 name='item'
                value={this.state.newItem}
                onChange={this.handleChanges}
            />
            <button className='addButton'>Add To List</button>
            </form>
        );
    }
}

export default TodoForm;