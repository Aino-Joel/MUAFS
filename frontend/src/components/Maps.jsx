import React, { useEffect, useRef, useState } from 'react';




const MapComponent = () => {
  const mapRef = useRef(null);
  const [directionsService, setDirectionsService] = useState(null);
  const [directionsRenderer, setDirectionsRenderer] = useState(null);
  const [infoWindow, setInfoWindow] = useState(null);
  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places`;
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    const loadMap = () => {
      const google = window.google;
      const map = new google.maps.Map(mapRef.current, {
        center: { lat: 0.347596, lng: 32.582520 },
        zoom: 15,
      });

      const infoWindow = new google.maps.InfoWindow();
      setInfoWindow(infoWindow);

      const directionsService = new google.maps.DirectionsService();
      setDirectionsService(directionsService);

      const directionsRenderer = new google.maps.DirectionsRenderer();
      directionsRenderer.setMap(map);
      setDirectionsRenderer(directionsRenderer);
      

      // Rest of your map initialization code goes here

      // Example: Setting up event listeners or additional functionalities
      google.maps.event.addListener(map, "click", function (event) {
        this.setOptions({ scrollwheel: true });
      });

      // Autocomplete setup code here...
      const sourceAutocomplete = new google.maps.places.Autocomplete(
        document.getElementById('source')
     )
      const desAutocomplete = new google.maps.places.Autocomplete(
        document.getElementById('dest')
     )

      // Initialize map
      window.initMap = map;
    };

    if (!window.google) {
      const googleScript = document.createElement('script');
      googleScript.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyAMw6PgwoIzKYe2uwdicjyERrynTjnkBeE&libraries=places
      &libraries=places`;
      googleScript.onload = loadMap;
      document.head.appendChild(googleScript);
    } else {
      loadMap();
    }

    return () => {
      // Clean up map instance or event listeners if necessary
    };
  }, []);

  // Function to handle calculating the route
  const calcRoute = () => {
    
      var source = document.getElementById('source').value
      var dest = document.getElementById('dest').value

      let request = {
          origin:source,
          destination:dest,
          travelMode:'DRIVING',
      }
      directionsService.route(request,function(result,status){
          if(status == "OK"){
              directionsRenderer.setDirections(result)
          }
      })

  };

  return (
    <div>
      {/* Your HTML elements for the map and other functionalities */}
      <div id="map" ref={mapRef} style={{ width: '100%', height: '400px' }} />
      {/* Other HTML elements like input fields, buttons, etc. */}
      <input type="text" id="source" placeholder="Source" />
      <input type="text" id="dest" placeholder="Destination" />
      <button onClick={calcRoute}>Calculate Route</button>
      {/* Other components or functionalities */}
    </div>
  );
};

export default MapComponent;


    


