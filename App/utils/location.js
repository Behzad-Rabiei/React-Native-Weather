import GetLocation from 'react-native-get-location';

export const getLocation = () => {
  return GetLocation.getCurrentPosition({
    timeout: 15000,
    enableHighAccuracy: true,
  });
};
