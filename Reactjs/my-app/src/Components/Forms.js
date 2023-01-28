import React, { Component } from 'react'

export class Forms extends Component {
constructor(props) {
  super(props)

  this.state = {
     username:'',
     password:'',
     textarea:''
  }
}
textChangeHandler =(event)=>{
    this.setState({
       username: event.target.value
    })
}
PasswordChangeHandler=(event)=>{
    this.setState({
        password:event.target.value
    })
}
TextAreaHandler=(event)=>{
    this.setState({
        textarea:event.target.value
        // console.log(event.target.value);
    })
}
  render() {
    return (
      <div>
      <label>Username</label>
      <input type='text' value={this.state.username} onChange={this.textChangeHandler}/>
      <br/>
      <label>Password</label>
      <input type='password'value={this.state.password} onChange={this.PasswordChangeHandler} />
      <br/>
      <label>Message for us</label>
      <textarea  value={this.state.textarea} onChange={this.TextAreaHandler}/> 
      </div>
      
    )
  }
}

export default Forms