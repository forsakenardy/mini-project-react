
import "../Styles/Navbar.css";




function AboutUs() {
  return (
    <>
      <div className="About-us">
        <section className="creator-crad-A">
        <img className="creator-image" src="src\assets\images\NardyPic.JPG" alt="Arnaldo" />
        <h1>Arnaldo</h1>
        <p>email: nardy.allstars@gmail.com</p>
        <p>Github:forsakenardy</p>
        </section>
        <section className="creator-card-N">
            <img className="creator-image"src="src\assets\images\NisolPic.JPG" alt="Nisol"/>
            <h1>Nisol</h1>
            <p>email: nisolmedinaue@gmail.com</p>
            <p>Github:Nisolchi</p>
        </section>
        <section className="creator-card-M" >
            <img className="creator-image"src="src\assets\images\mikelPic.JPG " alt="Mikel"/>
            <h1>Mikel</h1>
            <p>email: majc1907@gmail.com</p>
            <p>Github:Saymar567</p>
            
        </section>
      </div>
    </>
  );
}

export default AboutUs;
