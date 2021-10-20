import React from 'react';
import { useState, useEffect } from 'react';
import SeasonDisplay from '../components/SeasonDisplay';
import Spinner from '../components/Spinner';

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

    return <Spinner message='Please accept location requiest' />;
  };

  return <div>{renderContent()}</div>;
};

export default Season;
