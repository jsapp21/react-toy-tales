import React, { Component } from 'react';

class ToyCard extends Component {
  // constructor(){
  //   super()
  //   this.state = {
  //     likes: this.props.toy.likes
  //   }

  // }

  handleDelete = () => {
    this.props.donateToy(this.props.toy.id)
  }

  handleLikes = () => {
    const updatedToy = {
      ...this.props.toy,
      likes: this.props.toy.likes + 1
    }
    this.props.increaseLikes(updatedToy)
  }

  render() {
    // console.log('toyCard/render', this.props)
    return (
      <div className="card">
        <h2>{this.props.toy.name}</h2>
        <img src={this.props.toy.image} alt={this.props.toy.name} className="toy-avatar" />
        <p>{this.props.toy.likes} Likes </p>
        <button className="like-btn" onClick={this.handleLikes}>Like {'<3'}</button>
        <button className="del-btn" onClick={this.handleDelete}>Donate to GoodWill</button>
      </div>
    );
  }

}

export default ToyCard;
