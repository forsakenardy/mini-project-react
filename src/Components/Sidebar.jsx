import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import trollolol_4 from '../assets/images/trollolol_4.mp3';
import '../Styles/Sidebar.css';
import FacebookIcon from "../assets/images/facebook.png";
import InstaIcon from "../assets/images/instagram.png";
import twitterIcon from "../assets/images/twitterX.png";

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
      <div className="Footer">
        <footer>
          <div className="descriptionP">
            &copy; 2024 Developed by Arnaldo, Mikel And Nisol
          </div>

          <ul className="socialMediaIcons">
            <img src={FacebookIcon} alt="" />
            <img src={InstaIcon} alt="" />
            <img src={twitterIcon} alt="" />
            <button className="btnGithub">githublink</button>
          </ul>
        </footer>
      </div>
    </>
  );
}

export default Sidebar;
