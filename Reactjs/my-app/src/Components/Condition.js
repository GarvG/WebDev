import React, { Component } from 'react'

export class Condition extends Component {
    constructor()
    {
        super()
        this.state={
            isLoggedIn:false,
        };
    }
    
    render() {
    if(this.state.isLoggedIn)
    {
        return(
            <div>Welcome</div>
        )
    }
    else{
        return(
            <div>no go back</div>
        )
    }
    
  }
}

export default Condition