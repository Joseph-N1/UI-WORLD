import { useState } from 'react';
import HomeInfo from './HomeInfo';
import './styles/HomePage.css';

const images = [
  { id: 1, src: '/Images/Img.1.png' },
  { id: 2, src: '/Images/Img.2.png' },
  { id: 3, src: '/Images/Img.3.png' },
  { id: 4, src: '/Images/Img.4.png' },
  { id: 5, src: '/Images/Img.5.png' },
  { id: 6, src: '/Images/Img.6.png' },
  { id: 7, src: '/Images/Img.7.png' },
  { id: 8, src: '/Images/Img.8.png' },
];

const HomePage = () => {
  const [currentImage, setCurrentImage] = useState(null);

  return (
    <div className="home-page">
      <div className="box">
        {images.map((image, index) => (
          <span key={image.id} style={{ '--i': index + 1 }}>
            <img src={image.src} onClick={() => setCurrentImage(image.id)} alt={`Img ${image.id}`} />
          </span>
        ))}
      </div>
      {currentImage && (
        <div className="popup">
          <HomeInfo currentImage={currentImage} />
          <button className="close-btn" onClick={() => setCurrentImage(null)}>Close</button>
        </div>
      )}
    </div>
  );
};

export default HomePage;
