import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import CustomButton from '../customButton/CustomButton';
import CustomInput from '../CustomInput/CustomInput';
import './signin.scss'

export default class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state ={
            email: '',
            password: ''
        }
    }
    
    handleSubmit = event =>{
        event.preventDefault()

        this.setState({
            email: '',
            password: ''
        })
    }

    handleChange = event =>{
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
    }
  render() {
    return (
      <div className='sign-in-page'>
        <h2 className="title">Welcome Back!</h2>

        <form onSubmit={this.handleSubmit} className='form'>
            <CustomInput onChange={this.handleChange} type="email" name='email' value={this.state.email} placeholder='Enter your email' required/>
            <CustomInput onChange={this.handleChange} type="password" name='password' value={this.state.password} placeholder='Enter your password' required/>

            <div className='button-container'>
            <CustomButton className='button'>SIGN IN</CustomButton>
            <CustomButton className='button'>GOOGLE SIGN IN</CustomButton>
            </div>
            
        </form>

        <Link className="text" to='/Sign-Up'>I dont have an Account - SignUp here</Link>
      </div>
    )
  }
}
