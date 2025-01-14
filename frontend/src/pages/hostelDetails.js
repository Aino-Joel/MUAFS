import React, { useState } from "react";
// import olympia from './olympia.jpg'
// import './HostelDetails.css';

const HostelDetails = () => {
  const [hostelInfo, setHostelInfo] = useState({
    name: '',
    location: '',
    amenities: [],
    singleRoom: {
      price: '',
      description: '',
      images: [],
    },
    doubleRoom: {
      price: '',
      description: '',
      images: [],
    },
    hostelExteriorImages: [],
    fullyBooked: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setHostelInfo({
      ...hostelInfo,
      [name]: value,
    });
  };

  const handleImageUpload = (e, imageType) => {
    const imageFiles = Array.from(e.target.files);
    setHostelInfo({
      ...hostelInfo,
      [imageType]: {
        ...hostelInfo[imageType],
        images: imageFiles,
      },
    });
  };

  const handleFullyBookedToggle = () => {
    setHostelInfo({
      ...hostelInfo,
      fullyBooked: !hostelInfo.fullyBooked,
    });
  };

  const handleAmenitiesChange = (e) => {
    const { value } = e.target;
    const updatedAmenities = [...hostelInfo.amenities];

    if (updatedAmenities.includes(value)) {
      updatedAmenities.splice(updatedAmenities.indexOf(value), 1);
    } else {
      updatedAmenities.push(value);
    }

    setHostelInfo({
      ...hostelInfo,
      amenities: updatedAmenities,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to the server
    console.log('Submitted Hostel Info:', hostelInfo);
  };
  const renderTestImage = (altText) => {
    return <img src={"./olympia.jpg"} alt={altText} />;
  };
  
  return (
    <div className="hostel-details-container">
      <h1>HOSTEL DETAILS</h1>
      <div className="form-container">
      <form className="hostel-details-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Hostel Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={hostelInfo.name}
            onChange={handleInputChange}
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="location">Hostel Location:</label>
          <input
            type="text"
            id="location"
            name="location"
            value={hostelInfo.location}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="amenities">Amenities:</label>
          <div>
            <label>
              <input
                type="checkbox"
                value="Shuttle"
                onChange={handleAmenitiesChange}
                checked={hostelInfo.amenities.includes('Shuttle')}
              />     
              Shuttle
            </label>
            <label>
              <input
                type="checkbox"
                value="Wi-Fi"
                onChange={handleAmenitiesChange}
                checked={hostelInfo.amenities.includes('Wi-Fi')}
              />
              Wi-Fi
            </label>
            <label>
              <input
                type="checkbox"
                value="Gym"
                onChange={handleAmenitiesChange}
                checked={hostelInfo.amenities.includes('Gym')}
              />
              Gym
            </label>
            <label>
              <input
                type="checkbox"
                value="Balcony"
                onChange={handleAmenitiesChange}
                checked={hostelInfo.amenities.includes('Balcony')}
              />
             Balcony
            </label>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="singleRoomPrice">Single Room Price:</label>
          <input
            type="text"
            id="singleRoomPrice"
            name="singleRoomPrice"
            value={hostelInfo.singleRoom.price}
            onChange={(e) =>
              setHostelInfo({
                ...hostelInfo,
                singleRoom: {
                  ...hostelInfo.singleRoom,
                  price: e.target.value,
                },
              })
            }
          />
        </div>

        <div className="form-group">
          <label htmlFor="singleRoomDescription">Single Room Description:</label>
          <textarea
            id="singleRoomDescription"
            name="singleRoomDescription"
            value={hostelInfo.singleRoom.description}
            onChange={(e) =>
              setHostelInfo({
                ...hostelInfo,
                singleRoom: {
                  ...hostelInfo.singleRoom,
                  description: e.target.value,
                },
              })
            }
          />
        </div>

        <div className="form-group">
          <label htmlFor="singleRoomImages">Single Room Images:</label>
          <input
            type="file"
            id="singleRoomImages"
            name="singleRoomImages"
            accept="image/*"
            multiple
            onChange={(e) => handleImageUpload(e, 'singleRoom')}
          />
        </div>

        <div className="form-group">
          <label htmlFor="doubleRoomPrice">Double Room Price:</label>
          <input
            type="text"
            id="doubleRoomPrice"
            name="doubleRoomPrice"
            value={hostelInfo.doubleRoom.price}
            onChange={(e) =>
              setHostelInfo({
                ...hostelInfo,
                doubleRoom: {
                  ...hostelInfo.doubleRoom,
                  price: e.target.value,
                },
              })
            }
          />
        </div>

        <div className="form-group">
          <label htmlFor="doubleRoomDescription">Double Room Description:</label>
          <textarea
            id="doubleRoomDescription"
            name="doubleRoomDescription"
            value={hostelInfo.doubleRoom.description}
            onChange={(e) =>
              setHostelInfo({
                ...hostelInfo,
                doubleRoom: {
                  ...hostelInfo.doubleRoom,
                  description: e.target.value,
                },
              })
            }
          />
        </div>        
        
        <div className="form-group">
          <label htmlFor="doubleRoomImages">Double Room Images:</label>
          <input
            type="file"
            id="doubleRoomImages"
            name="doubleRoomImages"
            accept="image/*"
            multiple
            onChange={(e) => handleImageUpload(e, 'doubleRoom')}
          />
        </div>

        <div className="form-group">
          <label htmlFor="hostelExteriorImages">Hostel Exterior Images:</label>
          <input
            type="file"
            id="hostelExteriorImages"
            name="hostelExteriorImages"
            accept="image/*"
            multiple
            onChange={(e) => handleImageUpload(e, 'hostelExteriorImages')}
          />
        </div>

        <div className="form-group">
          <label>Is Hostel Fully Booked:</label>
          <label className="switch">
            <input
              type="checkbox"
              name="fullyBooked"
              checked={hostelInfo.fullyBooked}
              onChange={handleFullyBookedToggle}
            />
            <span className="slider round"></span>
          </label>
        </div>

        <button type="submit">Save</button>
      </form>
      </div>
      <div className="hostel-view-section">
        <h2>Hostel View</h2>
        <div className="hostel-images">
          {/* Exterior Image */}
          <div className="image-container">
            <h3>Exterior</h3>
            {hostelInfo.hostelExteriorImages.length > 0
              ? hostelInfo.hostelExteriorImages.map((image, index) => (
                  <img key={index} src={URL.createObjectURL(image)} alt="Hostel Exterior" />
                ))
              : renderTestImage('Exterior')}
          </div>
          {/* Single Room Image */}
          <div className="image-container">
            <h3>Single Room :UGX 1,800,000 {hostelInfo.singleRoom.price}</h3>
            {hostelInfo.singleRoom.images.length > 0
              ? hostelInfo.singleRoom.images.map((image, index) => (
                  <img key={index} src={URL.createObjectURL(image)} alt="Single Room" />
                ))
              : renderTestImage('Single Room')}
          </div>
          {/* Double Room Image */}
          <div className="image-container">
            <h3>Double Room :UGX 1,200,000{hostelInfo.doubleRoom.price}</h3>
            {hostelInfo.doubleRoom.images.length > 0
              ? hostelInfo.doubleRoom.images.map((image, index) => (
                  <img key={index} src={URL.createObjectURL(image)} alt="Double Room" />
                ))
              : renderTestImage('Double Room')}
          </div>
        </div>
        </div>

    </div>
  );
};

export default HostelDetails;
