import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import CustomButton from '../customButton/CustomButton';
import CustomInput from '../CustomInput/CustomInput';
import './signUp.scss'

export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            email: '',
            password: '',
            confirmPassword: '',
        }
    }

    handleSubmit = event =>{
        event.preventDefault()

        const {userName, email, password, confirmPassword} = this.state;

        if(password !== confirmPassword){
            alert('Wrong Password! make sure the passwords match!')
            return;
        }
    }
    
    handleChange = event =>{
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

  render() {
    return (
      <div className='sign-up'>
      <span className='title'>Begin Your Journey...</span>
      <form onSubmit={this.handleSubmit}  className='form'>
            <CustomInput type='text' name='userName' value={this.state.userName} placeholder='Your name' required onChange={this.handleChange}/>
            <CustomInput type='email' name='email' value={this.state.email} placeholder='Your email' required onChange={this.handleChange}/>
            <CustomInput type='password' name='password' value={this.state.password} placeholder='Choose a strong password' required onChange={this.handleChange}/>
            <CustomInput type='password' name='confirmPassword' value={this.state.confirmPassword} placeholder='Confirm Password' required onChange={this.handleChange}/>
            <div className="button-container">
                <CustomButton button className='button'>SIGN UP</CustomButton>
            </div>
      </form>

      <Link to='/login'><span className='text'>I already have an Account - Sign In</span></Link>
      </div>
    )
  }
}
