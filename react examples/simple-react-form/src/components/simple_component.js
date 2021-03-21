import React, { Component }  from 'react';

class SimpleComponent extends Component{

    constructor(props){
        super(props);
        this.state = { number: '000-000-00-00', control_word: ''};
        this.changeControlWorld = this.changeControlWorld.bind(this);
        this.changeNumber = this.changeNumber.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    changeControlWorld(event){
        this.setState({control_word: event.target.value});
    }

    changeNumber(event){
        this.setState({number: event.target.value});
    }

    handleClick(event){
        alert(`A phone is ${this.state.number} and control world is ${this.state.control_word}`);
        event.preventDefault();
    }

    render(){
        return(
            <form onSubmit={this.handleClick}>
                <label>Phone number</label><input value={this.state.number} onChange={this.changeNumber}></input>
                <label>Control world</label><input value={this.state.control_word}  onChange={this.changeControlWorld}></input>
                <input type="submit" value="Submit" />
            </form>
        );
    }
    
}

export default SimpleComponent