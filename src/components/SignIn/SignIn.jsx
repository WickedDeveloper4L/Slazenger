import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import CustomButton from '../customButton/CustomButton';
import CustomInput from '../CustomInput/CustomInput';
import './signin.scss'
import { signInWithGoogle, auth } from '../../firebase/firebase.utils';

export default class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state ={
            email: '',
            password: ''
        }
    }
    
    handleSubmit = async event=>{
      event.preventDefault();

      const {email, password} = this.state;


      try {
        await auth.signInWithEmailAndPassword(email, password);
        this.setState({
          email: '',
          password: ''
      })
      } catch (error) {
        console.log(error)
        alert('Wrong Email or Password!');
        this.setState({
          email: '',
          password: ''
      })
      }
      
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

        <form className='form' onSubmit={this.handleSubmit}>
            <CustomInput onChange={this.handleChange} type="email" name='email' value={this.state.email} placeholder='Enter your email' required/>
            <CustomInput onChange={this.handleChange} type="password" name='password' value={this.state.password} placeholder='Enter your password' required/>

            <div className='button-container'>
            <CustomButton type='submit' className='button'>SIGN IN</CustomButton>
            <CustomButton type='button' onClick={signInWithGoogle}>GOOGLE</CustomButton>
            </div>
            
        </form>

        <Link className="text" to='/Sign-Up'>I dont have an Account - SignUp here</Link>
      </div>
    )
  }
}
