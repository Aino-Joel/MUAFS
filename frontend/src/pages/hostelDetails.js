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