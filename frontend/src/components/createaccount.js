
import React from "react"


function CreateAccount(){

  return (

    <div className= "main-container">
  <div className="form-container">

<h2>Create Hostel Account</h2>

    <form>
      <label htmlFor="name">Hostel Name:</label>
      <input type="text" id="name" name="name" required="" />
      <label htmlFor="name">Name of Custodian:</label>
      <input type="text" id="name" name="name" required="" />
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" required="" />
      <label htmlFor="password">Password:</label>
      <input type="password" id="password" name="password" required="" />
      
      <label htmlFor="contact">Contact:</label>
      <input type="tel" id="contact" name="contact" required="" />
      <label htmlFor="address">Address:</label>
      <select>
    <option>Kikoni</option>
    <option>Kikumi kikumi</option>
    <option>Wandegeya</option>
    <option>Kavule
    </option>
  </select>
      {/* <textarea id="address" name="address" required="" defaultValue={""} /> */}
      
      <button type="submit">Create Account</button>
    </form>
  </div>
  </div>
)
}
export default CreateAccount

// Registration.js




// import React, { useState } from 'react';

// const CreateAccount = () => {
//   const [formData, setFormData] = useState({
//     // Initialize form fields
//     fullName: '',
//     contactDetails: '',
//     emailAddress: '',
//     location: '',
//     numberofRooms: '',
//     roomType: '',
//     genderPreference: '',
//     // Add other fields as needed
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Send form data to the server for further processing (not implemented in this example)
//     console.log('Form submitted:', formData);
//   };

//   return (
//     <div>
//       <h2>Custodian Registration</h2>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Full Name:
//           <input
//             type="text"
//             name="fullName"
//             value={formData.fullName}
//             onChange={handleChange}
//             required
//           />
//         </label>
//         <br />
//         <label>
//           Contact Details:
//           <input
//             type="text"
//             name="contactDetails"
//             value={formData.contactDetails}
//             onChange={handleChange}
//             required
//           />
//         </label>
//         <br />
//         <label>
//           Email Address:
//           <input
//             type="text"
//             name="emailAddress"
//             value={formData.emailAddress}
//             onChange={handleChange}
//             required
//           />
//         </label>
//         <br/>
//         <label>
//           Location:
//           <input
//             type="text"
//             name="location"
//             value={formData.location}
//             onChange={handleChange}
//             required
//           />
//         </label>
//         <br />
//         <label>
//           Number of Rooms:
//           <input
//             type="text"
//             name="numberofRooms"
//             value={formData.numberofRooms}
//             onChange={handleChange}
//             required
//           />
//         </label>
//         <br />
//         <label>
//           Room Type:
//           <input
//             type="text"
//             name="roomType"
//             value={formData.roomType}
//             onChange={handleChange}
//             required
//           />
//         </label>
//         {/* Add other form fields here */}
//         <br />
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default CreateAccount;