import { useEffect, useState } from 'react';

type Coords = {
  lat: number;
  long: number;
};

const useCurrentUserLocation = () => {
  const [geolocationIsSupported, setGeolocationIsSupported] = useState(true);
  const [coords, setCoords] = useState<Coords | null>(null);

  const onSuccess = (position: GeolocationPosition) => {
    const lat = position.coords.latitude;
    const long = position.coords.longitude;

    setCoords({ lat, long });
  };
  const onError = () => {
    /*
    Set Cairo coordinates as a default city in case the user 
    declines to share their location.
    */
    setCoords({ lat: 30.033333, long: 31.233334 });
  };

  useEffect(() => {
    const options = {
      enableHighAccuracy: true,
      maximumAge: 30000,
      timeout: 27000,
    };
    if (!navigator.geolocation) {
      setGeolocationIsSupported(false);
    } else {
      navigator.geolocation.watchPosition(onSuccess, onError, options);
    }
  }, []);

  return { geolocationIsSupported, coords };
};
export default useCurrentUserLocation;
