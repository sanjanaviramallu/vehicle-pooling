import React, { useState } from 'react';
import './JoinRide.css';

function JoinRide() {
  let [fromAddr, UpdateFromAddr] = useState('');
  let [toAddr, UpdateToAddr] = useState('');
  let [rides, UpdateRides] = useState([]);
  

  function handleFromChange(event) {
    UpdateFromAddr(event.target.value);
  }

  function handleToChange(event) {
    UpdateToAddr(event.target.value);
  }

  function process(event) {
    event.preventDefault();
    console.log("Event fired with From:", fromAddr, "and To:", toAddr);
    //  http://localhost:4000/createRides/?from_address=College&to_address=Bachupally
    fetch(`http://localhost:4000/createRides/?from_address=${fromAddr}&to_address=${toAddr}`).then(data=>data.json()).then(data=>{console.log(data);UpdateRides(data)});

  }
  function bookSeat(row)
  {

    console.log(row.id);
    let obj = {...row};
    obj.seats_booked = (parseInt(obj.seats_booked) + 1).toString();

    //  obj.seats_booked = toString(parseInt(obj.seats_booked)+1);
    //  here print the id of the attribute that was clicked
    fetch(`http://localhost:4000/createRides/?id=${row.id}`,{
    method:"PUT",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify(obj)
    }).then(res=>console.log(res))

    
  }


  return (
    <div>
      <h2>Join Ride</h2>
      <div className='row joinRide'>
        <div className='from'>
          <label>From</label>
          <select value={fromAddr} onChange={handleFromChange}>
            <option value='' disabled>Select</option>
            <option>College</option>
            <option>Pragati nagar arch</option>
            <option>Jntu busStop</option>
            <option>bachupally</option>
          </select>
        </div>


        <div className='to'>
          <label>To</label>
          <select value={toAddr} onChange={handleToChange}>
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
        </div>

        <button onClick={process} class="search-button">
          <span class="material-icons" >search</span>
        Search
        </button>
       
      </div>
      <div className='rendered'>
        <p>Rides render here from API data</p>
        {
          rides.map(row=><div className='row main01 col-lg-8' onClick={()=>bookSeat(row)}>
            <div className='a'>
            <div className='join col-lg-6'><p>From :- {row.from_address} </p></div>
            <div className='join col-lg-4'><p>To :- {row.to_address} </p></div>
            </div>
            <div className='join c col-lg-1'><p>{row.id}</p></div>
            <div className='b'>
            <div className='join col-lg-6'><p>Vehicle :- {row.vehicle_type}</p></div>
            
            <div className='join col-lg-6'><p> Seats available = {(parseInt(row.sets_available)-parseInt(row.seats_booked))}</p></div>
            </div>
            <div className='join col-lg-6'><p>Date and Time : {row.date_of_travel}   {row.time_of_travel}</p></div>
            <div className='join col-lg-6'><p>Owner name : {row.vehicle_user}</p></div>
            <div className='join col-lg-3'></div>
            <div className='join col-lg-6 text-center'>
              <div className='displayFlexAttr'>
                  {
                    row.route_stops.map(place=><div><p>{place} ➔ </p></div>)
                  }
              </div>
            </div>
            <div><br></br></div>
            </div>)
            
        }
        <div><br></br></div>
      </div>
    </div>
  );
}

export default JoinRide;
