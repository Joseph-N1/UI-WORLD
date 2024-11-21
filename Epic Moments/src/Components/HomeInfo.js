import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './styles/HomeInfo.css';

const renderContent = {
  1: (
    <div className="info-box">
      <p>Character 1 details</p>
      <Link to="/character/1">Learn more</Link>
    </div>
  ),
  2: (
    <div className="info-box">
      <p>Character 2 details</p>
      <Link to="/character/2">Learn more</Link>
    </div>
  ),
  // Add more characters as needed
};

const HomeInfo = ({ currentImage }) => {
  return renderContent[currentImage] || null;
};

HomeInfo.propTypes = {
  currentImage: PropTypes.number
};

export default HomeInfo;
