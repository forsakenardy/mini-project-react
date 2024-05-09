
import "../Styles/Navbar.css";




function AboutUs() {
  return (
    <>
      <div className="About-us">
        <section className="creator-card-A">
          <img className="creator-image" src="src\assets\images\NardyPic.JPG" alt="Arnaldo" />
          <h1 className="we">Arnaldo</h1>
          <div className="pharagraph-sec">
            <p>Email: <br /> nardy.allstars@gmail.com</p>
            <p>Github:forsakenardy</p>
          </div>
        </section>
        <section className="creator-card-A">
          <img className="creator-image" src="src\assets\images\NisolPic.JPG" alt="Nisol" />
          <h1 className="we">Nisol</h1>
          <div className="pharagraph-sec">
            <p>Email: <br /> nisolmedinaue@gmail.com</p>
            <p>Github:Nisolchi</p>
          </div>
        </section>
        <section className="creator-card-A" >
          <img className="creator-image" src="src\assets\images\mikelPic.JPG " alt="Mikel" />
          <h1 className="we">Mikel</h1>
          <div className="pharagraph-sec">
            <p>Email: <br /> majc1907@gmail.com</p>
            <p>Github:Saymar567</p>
          </div>
        </section>
      </div>
    </>
  );
}

export default AboutUs;
