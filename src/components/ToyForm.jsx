import React, { Component } from 'react';

class ToyForm extends Component {
  constructor(){
    super()
    this.state = {
      name: '',
      image: ''
    }
  }

  // dynamiclly scrape the form for multiple inputs
  // use event.target.name (name comes from the form attribute)
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  } 

  handleSubmit = (event) => {
    event.preventDefault()

    const newToy = {
      ...this.state,
      likes: 1
    }

    this.props.addToy(newToy)
  }

  render() {
    return (
      <div className="container">
        <form className="add-toy-form" onSubmit={this.handleSubmit} >
          <h3>Create a toy!</h3>
          <input type="text" name="name" placeholder="Enter a toy's name..." className="input-text" value={this.state.name} onChange={this.handleChange} />
          <br/>
          <input type="text" name="image" placeholder="Enter a toy's image URL..." className="input-text" value={this.state.image} onChange={this.handleChange}/>
          <br/>
          <input type="submit" name="submit" value="Create New Toy" className="submit"/>
        </form>
      </div>
    );
  }

}

export default ToyForm;
