import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import CustomButton from '../customButton/CustomButton';
import CustomInput from '../CustomInput/CustomInput';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import './signUp.scss'

export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: '',
        }
    }

    handleSubmit = async event =>{
        event.preventDefault()

        const {displayName, email, password, confirmPassword} = this.state;

        if(password !== confirmPassword){
            alert('Wrong Password! make sure the passwords match!')
            return;
        }

        try {
            const {user} = await auth.createUserWithEmailAndPassword(email, password);

            await createUserProfileDocument(user, {displayName});

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })

        } catch (error) {
            console.error(error)
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
            <CustomInput type='text' name='displayName' value={this.state.displayName} placeholder='Your name' required onChange={this.handleChange}/>
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
