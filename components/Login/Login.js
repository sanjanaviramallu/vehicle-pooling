// import { Link } from 'react-router-dom'
// import { compareSync } from 'bcryptjs'
// import { useNavigate } from 'react-router-dom'
// import { useState } from 'react'
// import React from 'react'
// import './Login.css'

// function Login() {
//     let navigate=useNavigate();
//     let [errorMessage,changeErrorMessage]=useState("error")
//     let [userName,changeUserName]=useState()
//     let [password,changePassword]=useState()
//     function LoginFunction(event)
//     {
//         event.preventDefault();
//         console.log(userName,password)
//         fetch(`http://localhost:4000/users/?user_name=${userName}`).then(data=>data.json())
//         .then(data=>{
//             //console.log(data)
//             if(data.length==0){alert("invalid username")}
//             else{if(compareSync(password,data[0].Password_in)){alert("LOGIN SUCCESSFUL");navigate("/Main",{state:{userName}});}else{alert("invalid password")}}
    
//         })
//     }
//   return (
//     <div>
//         <h3>Home</h3>
//         <div className='row'>
//             {/* <div className='col-lg-4'></div> */}
//             <div className='col-lg-4'>
//                 <center>
//                     <form className='FormDiv'>
//                         <input className='usernameInput' type='test' placeholder='Username' onChange={(event)=>{changeUserName(event.target.value)}}/><br/>
//                         <input className='passwordInput' type='password' placeholder='Password' onChange={(event)=>{changePassword(event.target.value)}}/><br/>
//                         <button className='SubmiButton' onClick={LoginFunction}>Continue</button>
//                     </form>
//                 </center>
//                 <div className='row'>
//                     <div className='col-lg-6'>
//                         <Link to="/SignIn">Register</Link>
//                     </div>
//                     <div className='col-lg-6'>
//                         <Link to="/ForgotPassword">forgot password</Link>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Login

import { Link } from 'react-router-dom';
import { compareSync } from 'bcryptjs';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import React from 'react';
import './Login.css';

function Login() {
    let navigate = useNavigate();
    let [errorMessage, changeErrorMessage] = useState("error");
    let [userName, changeUserName] = useState();
    let [password, changePassword] = useState();

    function LoginFunction(event) {
        event.preventDefault();
        console.log(userName, password);
        fetch(`http://localhost:4000/users/?user_name=${userName}`)
            .then(data => data.json())
            .then(data => {
                //console.log(data)
                if (data.length === 0) {
                    alert("invalid username");
                } else {
                    if (compareSync(password, data[0].Password_in)) {
                        alert("LOGIN SUCCESSFUL");
                        navigate("/Main", { state: { userName } });
                    } else {
                        alert("invalid password");
                    }
                }
            });
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    {/* Image Container */}
                    <img src="https://img.freepik.com/free-vector/taxi-app-concept_23-2148485646.jpg?w=1060&t=st=1706295411~exp=1706296011~hmac=9d8cdafa901b6e3fce1e0a3f35ae9973d9bd1d6daac0bbab055df3ae7f2305bf" alt="Your Image" />
                </div>
                <div className="col-lg-6">
                    {/* Login Form Container */}
                    <div>
                        <h3>Home</h3>
                        <form className='FormDiv'>
                            <input className='usernameInput' type='test' placeholder='Username' onChange={(event) => { changeUserName(event.target.value) }} /><br />
                            <input className='passwordInput' type='password' placeholder='Password' onChange={(event) => { changePassword(event.target.value) }} /><br />
                            <button className='SubmiButton' onClick={LoginFunction}>Continue</button>
                        </form>
                    </div>
                    <div className='row'>
                        <div className='col-lg-8 p1'>
                            <h6>Don't have an account ?</h6>
                            <Link to="/SignIn">Register</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
