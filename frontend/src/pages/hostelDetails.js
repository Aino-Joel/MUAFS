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
