import PropTypes from "prop-types";
import './button.css'
const CustomButton = ({ text, onClick, style }) => {
  return (
    <div className="custom__btn">
      <button onClick={onClick} style={style}>
        {text}
      </button>
    </div>
  );
};

export default CustomButton;

CustomButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  style: PropTypes.object,
};
