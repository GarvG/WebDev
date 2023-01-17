import React, { Component } from 'react'

export class Class extends Component {
  render() {
    return (
        <div>
        <h1>Hello {this.props.name} as of now your hobby is {this.props.hobby}</h1>
        {this.props.children}
        </div>
        
        )
  }
}

export default Class