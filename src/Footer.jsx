
import FacebookIcon from "./assets/facebook.png"
import InstaIcon from "./assets/instagram.png"
import EquisIcon from "./assets/gorjeo.png"

export const FooterNch=()=>{
    return(
        <div className="container">
  <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <div className="col-md-4 d-flex align-items-center">
      <span className="mb-3 mb-md-0 text-body-secondary">&copy; 2024 developed by Alvaro,Mikel And Nisol</span>
    </div>


    <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
      <img src= {FacebookIcon} alt= ""/>
      <img src= {InstaIcon} alt = ""/>
      <img src = {EquisIcon} alt=''/>

      
    </ul>
  </ footer>
</div>
    )
}

