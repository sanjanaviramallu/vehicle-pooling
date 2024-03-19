import React from 'react'
import './Main.css'
import {useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import { useLocation } from 'react-router-dom';

// function Main() {
//   let navigate=useNavigate();
//   let state = useLocation();
//   state=state.state;
//   let userName = state.userName;
//   console.log("inside main : ",state);

//   function navToJoinRide(){navigate('/JoinRide/',{state:userName});}
//   function navToCreateRide(){navigate('/CreateRide',{state:userName})}

//   return (
//     <div className='container'>
//       <h1>Vehicle Pooling<sub className='subScript01'></sub></h1>

      
//       <br>
//       </br><div className='box1'>
//         <p>Some text about the app goes here</p>
//       </div>
//       {/* <div className='row'>
//         <div className='col-lg-3'>
//           <Link><h1 className='MainPageLink1'>Login</h1></Link>
//         </div>
//         <div className='col-lg-5'></div>
//         <div className='col-lg-3'>
//           <Link><h1 className='MainPageLink1'>Sign Up</h1></Link>
//         </div>
//       </div> */}
//       <div className='row mt-3'>
//         <div className='col-lg-4 mainNavBox'>
//           <button onClick={navToCreateRide} className='button01'>
//             <h2 className='text-secondary'>Create a ride</h2>
//             <h1>+</h1>
//           </button>
//         </div>
//         <div className='col-lg-3'></div>
//         <div className='col-lg-4 mainNavBox'>
//           <button onClick={navToJoinRide} className='button01'>
//             <h2 className='text-secondary'>Join Existing Ride</h2>
//           </button>
//         </div>
//       </div>
//     </div>
    
   
//   )
// }

// export default Main

// ... (existing imports)

import appImage from './26388482_7184949.jpg'; // Replace with the actual path to your image file

function Main() {
  let navigate = useNavigate();
  let state = useLocation();
  state = state.state;
  let userName = state.userName;
  console.log("inside main : ", state);

  function navToJoinRide() {
    navigate('/JoinRide/', { state: userName });
  }
  function navToCreateRide() {
    navigate('/CreateRide', { state: userName });
  }
  return (
    <div className='container'>
      <h1>Vehicle Pooling<sub className='subScript01'></sub></h1>

      <br></br>
      <div className='box1'>
        <img src={appImage} width="800px" alt='App Image' className='appImage' />
      </div>

      <div className='row mt-3'>
        <div className='col-lg-4 mainNavBox'>
          <button onClick={navToCreateRide} className='button01'>
            <h2 className='text-secondary'>Create a Ride</h2>
            <h3><span className='buttonIcon'>+</span></h3>
          </button>
        </div>
        <div className='col-lg-4'></div>
        <div className='col-lg-4 mainNavBox'>
          <button onClick={navToJoinRide} className='button01'>
            <h2 className='text-secondary'>Join Existing Ride</h2>
            <h3><span className='buttonIcon'>➔</span></h3>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Main;
