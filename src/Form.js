import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      diet: '',
      fun_fact: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  sendAnimal = (event) => {
    let newAnimal = {...this.state};
    this.props.postAnimal(newAnimal);
    this.clearInputs();
  }

  clearInputs = () => {
    this.setState({
      name: '',
      diet: '',
      fun_fact: ''
    })
  }

  render = () => {
    return (
      <div>
        <h2>Enter another animal:</h2>
        <p>Name of Animal:</p>
        <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />

        <p>Diet:</p>
        <input type="text" name="diet" value={this.state.diet} onChange={this.handleChange} />

        <p>Fun Fact:</p>
        <input type="text" name="fun_fact" value={this.state.fun_fact} onChange={this.handleChange} />

        <button type="button" onClick={this.sendAnimal}>Submit</button>
      </div>
    )
  }
}

export default Form;
