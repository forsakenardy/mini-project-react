import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import trollolol_4 from '../assets/images/trollolol_4.mp3';
import '../Styles/Sidebar.css';

function Sidebar() {

  const audioRef = useRef(null);
  const [buttonClicked, setButtonClicked] = useState(false);

  const playSound = () => {
    audioRef.current.play();
  };

  const handleButtonClick = () => {
    setButtonClicked(true);
    playSound();
  };

  return (
    <>
      <div className="Sidebar-Content">
        <Link to="/" className={buttonClicked ? 'spin' : ''}>
          <h1>Home</h1>
        </Link>
        <Link to="" className={buttonClicked ? 'spin' : ''}>
          <h1>About Us</h1>
        </Link>
        <Link to="/FormPage" className={buttonClicked ? 'spin' : ''}>
          <h1>Create New Recipe</h1>
        </Link>
        <button onClick={handleButtonClick} className="magic"></button>
        <audio ref={audioRef} src={trollolol_4} />
      </div>
      <div className="Footer"></div>
    </>
  );

}

export default Sidebar;