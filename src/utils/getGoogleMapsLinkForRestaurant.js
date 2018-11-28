export const getGoogleMapsLinkForRestaurant = ({
  coordinates: { latitude, longitude },
  name,
}) => `https://www.google.com/maps/search/${name},${latitude},${longitude}`;
