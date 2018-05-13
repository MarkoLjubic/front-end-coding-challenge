export const officeModel = PropTypes =>
  PropTypes.shape({
    id: PropTypes.number,
    description: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    latitude: PropTypes.string,
    longitude: PropTypes.string,
    photo: PropTypes.string
  });

export const officesModel = PropTypes =>
  PropTypes.arrayOf(officeModel(PropTypes));
