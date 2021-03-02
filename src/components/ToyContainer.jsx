import React, { Component } from 'react';
import ToyCard from './ToyCard'

class ToyContainer extends Component {

  render() {
    console.log('toyContainer/render', this.props.toys)
    return (
      <div id="toy-collection">
        {
        this.props.toys.map(eachToy => {
          return <ToyCard key={eachToy.id} toy={eachToy} donateToy={this.props.donateToy} increaseLikes={this.props.increaseLikes} />
        })
        }
      </div>
    );

  }
}

export default ToyContainer;
