import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './createRide.css'

function CreateRide() {
  let state = useLocation();
  state = state.state;

  let [fromaddr, changeFromadder] = useState('');
  let [toaddr, changeToaddr] = useState('');
  let [vehicleType, changeVehicleType] = useState('');
  let today = new Date().toISOString().split('T')[0];
  let [date, changeDate] = useState(today);
  let [departureTime, changeDepartureTime] = useState('');
  let [seatsAvailable, changeSeatsAvailable] = useState(1);
  let [routeStops, changeRouteStops] = useState('');
  let [stops,updateStops]=useState([]);
  let [errorMessages,updateErrorMessages]=useState('');

  function getAll(event)
  {
    event.preventDefault();
    if (departureTime===''){updateErrorMessages('error : Please set a proper time');}
    else{
      console.log(fromaddr,toaddr,vehicleType,date,departureTime,seatsAvailable,stops);
      let obj={
        vehicle_user:state,
        from_address:fromaddr,
        to_address:toaddr,
        vehicle_type:vehicleType,
        date_of_travel:date,
        time_of_travel:departureTime,
        sets_available:seatsAvailable,
        route_stops:stops,
        seats_booked:"0"
      };
      fetch("http://localhost:4000/createRides",{
        method:'POST',
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(obj)
      })
      alert("ride registered successfully");
    }
  }
  function addOneMoreStop(event) {
    event.preventDefault();
    if (routeStops !== '') {
      stops.push(routeStops);
      changeRouteStops('');
      document.querySelector('.stopsInput').value = '';
    }
  }
  
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Handle the form submission logic here
  //   console.log('Form submitted!');
  //   // You can use the form data (state variables) in your logic or send it to an API.
  // };

  const handleDateChange = (e) => {
    changeDate(e.target.value);
  };

  const handleTimeChange = (e) => {
    changeDepartureTime(e.target.value);
  };

  const handleSeatsChange = (e) => {
    changeSeatsAvailable(e.target.value);
  };

  const handleRouteStopsChange = (e) => {
    changeRouteStops(e.target.value);
  };

  return (
    <div className='createRide'>
      <p>Hi {state}</p>
      <p>Create Ride</p>
      <form>
        <div className='from-to'>
        <label>From</label>
        <select value={fromaddr} onChange={(e) => changeFromadder(e.target.value)}>
            <option value='' disabled>Select</option>
            <option>College</option>
            <option>Pragati nagar arch</option>
            <option>Jntu busStop</option>
            <option>bachupally</option>
        </select>
        <br />

        <label>To</label>
        <select value={toaddr} onChange={(e) => changeToaddr(e.target.value)}>
            <option value='' disabled>Select</option>
            <option>Gandimaisamma</option>
            <option>Jntu</option>
            <option>Miapur</option>
            <option>Bachupally</option>
            <option>Patanchervu</option>
            <option>LB nagar</option>
            <option>Nagole</option>
            <option>Yusufguda</option>
            <option>ECIL</option>
            <option>Atapur</option>
            <option>VST</option>
            <option>Kukatpally</option>
            <option>Old Alwal</option>
            <option>Manikonda</option>
        </select>
        <br />
        </div>

        <div className='vehicle-details'>
        <label>Type of vehicle</label>
        <select value={vehicleType} onChange={(e) => changeVehicleType(e.target.value)}>
            <option value='' disabled>Select</option>
          <option>Bike</option>
          <option>Scooty</option>
          <option>Car 4 seater</option>
        </select>

        <label>seats available : </label>
        <input
          placeholder="Seats available"
          type="number"
          value={seatsAvailable}
          onChange={handleSeatsChange}
        />{' '}
        <br />
        <br />
        </div>

        <div className='timedate'>
        <label>Specify the date of your journey</label> 
        <input type="date" value={date} onChange={handleDateChange} /> <br />

        <label>Departure time</label> 
        <input type="time" value={departureTime} onChange={handleTimeChange} /> <br />
        </div>
        

        <label>Specify the route or stops you go through</label> <br />
        <input className='stopsInput' type="text" value={routeStops} onChange={handleRouteStopsChange} />{' '}
        <button onClick={addOneMoreStop}>+</button>

        <br />
        <button onClick={getAll}>Submit</button>
      </form>
      <p>{errorMessages}</p>
      <p>stops you added : </p>
      {
        stops.map(val=><p>{val}</p>)
      }
    </div>
  );
}

export default CreateRide;
