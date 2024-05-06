import "../Styles/Sidebar.css";
import FacebookIcon from "../assets/images/facebook.png";
import InstaIcon from "../assets/images/instagram.png";
import twitterIcon from "../assets/images/twitterX.png";

function Sidebar() {
  return (
    <>
      <div className="Sidebar-Content">
        <h1>Home</h1>
        <h1>About</h1>
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
