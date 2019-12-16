import React, { Component } from 'react';
import './App.css';
import Form from './Form';
import CardContainer from './CardContainer'


class App extends Component {
  constructor() {
    super();
    this.state = {
      allAnimals: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/v1/animals')
      .then(response => response.json())
      .then(data => {
        this.setState({allAnimals: data})
      })
      .then(data => console.log(data))
      .catch(data => console.log(data))
  }

  postAnimal = (animal) => {
    this.setState({
      allAnimals: [...this.state.allAnimals, animal]
    })

    fetch('http://localhost:3001/api/v1/animals', {
    	method: 'POST',
    	headers: {
    		'Content-Type': 'application/json'
    	},
      body: JSON.stringify({...animal, id: Date.now()}),
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.log(error))
  }

  render() {
    return (
      <div>
      <Form postAnimal={this.postAnimal}/>
      <CardContainer allAnimals={this.state.allAnimals}/>
      </div>
    )}
}


export default App;
