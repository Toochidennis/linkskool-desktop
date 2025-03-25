import React, { useEffect } from "react";
import "./games.css"; // Import the CSS file for styling
// import Mortalcombact from "../../assets/img/image 65.png";
import  Candycrush from "../../assets/img/image 64.png";
import Candy from "../../assets/img/image 68.png";

const Games: React.FC = () => {
  useEffect(() => {
    // Fetch data or perform other side effects here
  }, []);

  return (  
      <div className="main">
        <div className="search-bar">
          <input type="text" placeholder="Search here..." />
        </div>
        <div className="head top-left">
            <h4>Education Meets Fun: Start Playing Now!</h4>
            <p>Engage with interactive games designed to make learning fun and effective</p>
        </div>
        <div className="games-list">
            <div className="note">
                <h5>Candy Crush Saga: Get the <br /> fruit</h5>
                <p>Gain access to a wide range of practice tests tailored to help manage <br /> your time effectively, and boost your confidence before the big day.</p>
                <div className="small">
                    <img src={Candy} alt="" />
                    <div className="opr">
                    <h6>Candy Crush Saga: GTF</h6>
                    <p>Mortal Kombat: End Game</p>
                    </div>
                    <a href=""><button>Play Now</button></a>
                </div>
            </div>
          <div className="game-item">
            <img src={Candycrush} alt="Candy Crush" />
          </div>
        </div>
      </div>
  );
};

export default Games;