import PropTypes from "prop-types";

export const Announcement = ({ imageSrc, description, price }) => {
  return (
    <div>
      <img src={imageSrc} alt="" />
      <p>{description}</p>
      <p>{price}</p>
    </div>
  );
};

Announcement.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
