import React, { usestate } from "react";
import olympia from './olympia.jpg'
import './HostelDetails.css';

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
        
      </form>
      </div>
    </div>
  );
};

export default HostelDetails;    