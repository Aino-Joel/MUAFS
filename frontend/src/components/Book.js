import React, { useState } from 'react';
import { useAuthContext } from '../hooks/useAuthContext'
import { useParams } from 'react-router-dom';

function Book() {
  const {user} = useAuthContext()
  const [error, setError] = useState(null)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneContact, setPhoneContact] = useState('')
  const [checkInDate, setCheckInDate] = useState('')
  const [roomType, setRoomType] = useState('')
  const [roomSpec, setRoomSpec] = useState('')
  const { _id } = useParams();

  const handleSubmit =async (e) => {
    e.preventDefault()

    // if(!user){
    //     setError('You must be logged in')
    //     return
    // }

    const booking = {name, email, phoneContact, checkInDate, roomType, roomSpec, hostelId:_id}
    console.log(booking)

    const response = await fetch(`https://muafs-backend.onrender.com/${_id}/booking/create`, {
        method: 'POST',
        body: JSON.stringify(booking),
        headers: {
            'Content-Type': 'application/json',
            // 'Authorization': `Bearer ${user.token}`
        }
    })
    const json = await response.json()

    if(!response.ok){
        // setError(json.error)
        // setEmptyFields(json.emptyFields)
    }
    if(response.ok){
        // setTitle('')
        // setLoad('')
        // setReps('')
        // setError(null)
        // setEmptyFields([])
        console.log('New Workout added', json)
        // dispatch({type: 'CREATE_WORKOUT', payload: json})
    }
}

  return (
    <div>
      <h2>Book a Room</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div>
          <label>Phone Contact:</label>
          <input
            type="text"
            id="phoneContact"
            name="phoneContact"
            onChange={(e) => setPhoneContact(e.target.value)}
            value={phoneContact}
          />
        </div>
        <div>
          <label>Check-in Date:</label>
          <input
            type="date"
            id="checkInDate"
            name="checkInDate"
            onChange={(e) => setCheckInDate(e.target.value)}
            value={checkInDate}
          />
        </div>
        <div>
          <label>Room Type:</label>
          <select name="roomType" onChange={(e) => setRoomType(e.target.value)}
            value={roomType}>
            <option value="Please Specify" style={{opacity: 0.4}}>--Please Specify</option>
            <option value="single">Single</option>
            <option value="double">Double</option>
          </select>
        </div>
        <div>
          <label>Room Specification:</label>
          <select name="roomSpec" onChange={(e) => setRoomSpec(e.target.value)}
            value={roomSpec}>
            <option value="Please Specify">--Please Specify</option>
            <option value="selfContained">Self-Contained</option>
            <option value="notSelfContained">Not Self-Contained</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Book;

