import React from 'react';
import { useState, useEffect } from 'react';
import SeasonDisplay from '../components/SeasonDisplay';

const Season = () => {
  const [lat, setlatitude] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      (position) => setlatitude(position.coords.latitude),
      (error) => setErrorMessage(error.message)
    );
  }, []);

  const renderContent = () => {
    if (errorMessage && !lat) return <div>Error: {errorMessage}</div>;

    if (!errorMessage && lat) return <SeasonDisplay lat={lat} />;
  };

  return <div>{renderContent()}</div>;
};

export default Season;
