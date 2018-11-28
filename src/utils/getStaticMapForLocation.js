export const getStaticMapForLocation = ({ latitude, longitude }) => {
  const coordsAsText = [latitude, longitude].join(',');
  return `https://maps.googleapis.com/maps/api/staticmap?center=${coordsAsText}&markers=${coordsAsText}&zoom=14&size=400x288&maptype=roadmap&key=AIzaSyCDc4LkExUhXGwButHuEENHOTE3iAJ8k2E`;
};
