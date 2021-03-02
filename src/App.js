import React from 'react';
import './App.css';

import Header from './components/Header'
import ToyForm from './components/ToyForm'
import ToyContainer from './components/ToyContainer'


class App extends React.Component{
  constructor() {
    super()
    this.state = {
      toys: [],
      display: false
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/toys')
    .then(resp => resp.json())
    .then(toysArr => {
      this.setState({
        toys: toysArr
      })
    })
  }

  handleClick = () => {
    let newBoolean = !this.state.display
    this.setState({
      display: newBoolean
    })
  }

  addToy = (toyObj) => {

    const addNewToy = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(toyObj)
    }

    fetch('http://localhost:3000/toys', addNewToy)
    .then(resp => resp.json())
    .then(toy => {
      this.setState({
        toys: [...this.state.toys, toy]
      })
    })
  }

  donateToy = (id) => {
    // console.log('donated toy', id)
    const updatedToys = this.state.toys.filter(toy => toy.id !== id)
    
    fetch(`http://localhost:3000/toys/${id}`, { method: 'DELETE' })

    this.setState({
      toys: updatedToys
    })
  }

  increaseLikes = (updatedToy) => {
    // console.log('you like this toy', updatedToy)

    const reqObj = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedToy)
    };

    fetch(`http://localhost:3000/toys/${updatedToy.id}`, reqObj)
    .then(resp => resp.json())
    // .then(toy => console.log(toy))

    .then(updatedLikes => {
        const updatedToysArr = this.state.toys.map(eachToy => {
          if (eachToy.id === updatedLikes.id) {
            return updatedLikes
          } else {
            return eachToy
          }
        })
        
        this.setState({
          toys: updatedToysArr
        })

    })
  }

  render(){
    console.log('app/render', this.state.toys)
    return (
      <>
        <Header/>
        { this.state.display
            ?
          <ToyForm addToy={this.addToy} />
            :
          null
        }
        <div className="buttonContainer">
          <button onClick={this.handleClick}> Add a Toy </button>
        </div>
        <ToyContainer toys={this.state.toys} donateToy={this.donateToy} increaseLikes={this.increaseLikes} />
      </>
    );
  }

}

export default App;
