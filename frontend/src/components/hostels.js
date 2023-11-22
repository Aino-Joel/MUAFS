import React from "react";



const ViewHostels = () => {
  const hostels = [
    { name: 'Akwata Empola', manager: 'Nabukenya Rehemah', contact: '0708923456', email: 'remy@gmail.com' },
    { name: 'Dream World', manager: 'Namayinja Jauhara', contact: '0762759084', email: 'jau@gmail.com' },
    // Add more hotels as needed
  ];

  return (
    <div className="hostel-list-container">
      <table className="hostel-list-table">
        <thead>
          <tr>
            <th>Hostel Name</th>
            <th>Manager</th>
            <th>Contact</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {hostels.map((hostel, index) => (
            <tr key={index}>
              <td>{hostel.name}</td>
              <td>{hostel.manager}</td>
              <td>{hostel.contact}</td>
              <td>{hostel.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};




 export default ViewHostels