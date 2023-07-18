import React, { useState } from 'react';

const Login = () =>{

    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [isEmailValid, setEmailValid] = useState(true);
    const [isMobileValid, setMobileValid] = useState(true);
  
    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    };
  
    const handleMobileChange = (e) => {
      setMobile(e.target.value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const isValidEmail = validateEmail(email);
      const isValidMobile = validateMobile(mobile);
      
      setEmailValid(isValidEmail);
      setMobileValid(isValidMobile);
      
      if (isValidEmail && isValidMobile) {
        // Call backend API to register user
        console.log('Registering user:', { email, mobile });
        setEmail('');
        setMobile('');
      }
    };

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };
      
    const validateMobile = (mobile) => {
        const mobileRegex = /^\d{10}$/;
        return mobileRegex.test(mobile);
    };

    return(
        <>
            <div className="container-fluid">
                <div className="wrapper">
                    <form className="login-form" onSubmit={handleSubmit}>
                        <h2 class="fst-italic mb-2">Login Form</h2>
                        <div className="m-2 w-75">
                            <label className="form-label">Email Address:</label>
                            <input 
                                type="email" 
                                className="form-control" 
                                value={email} 
                                placeholder="Enter your email..."
                                onChange={handleEmailChange}
                            />
                            {!isEmailValid && <span class="text-danger">Please enter a valid email.</span>}
                        </div>
                        <div className="m-3 w-75">
                            <label for="inputMobile" className="form-label">Mobile:</label>
                            <input type="tel" 
                                    className="form-control" 
                                    id="inputMobile" 
                                    value={mobile} 
                                    placeholder="Enter mobile number.."
                                    onChange={handleMobileChange}
                            />
                            {!isMobileValid && <span class="text-danger">Please enter a valid mobile number.</span>}
                        </div>
                        <button type="submit" className="btn btn-lg btn-primary mt-3 ">Login</button>
                    </form>
                </div>
            </div>
        </>
    )
}
export default Login
