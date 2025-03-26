import React, { useEffect } from "react";
import "./games.css"; // Import the CSS file for styling
 import Mortalcombact from "../../assets/img/image 65.png";
import  Candycrush from "../../assets/img/image 64.png";
import Candy from "../../assets/img/image 68.png";
// import biximage from "../../assets/img/unsplash-igur1ix0mqm.png";
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
        <section>
        <div className="games-grid">
          {[...Array(9)].map((_, index) => (
            <div className="game-card" key={index}>
              <img
                src={index % 2 === 0 ? Mortalcombact : Candycrush }
                alt="Game Thumbnail"
              />
              <h5>{index % 2 === 0 ? "Mortal Kombat: End Game" : "Candy Crush Saga" }</h5>
              <p>{index % 2 === 0 ? "Thriller" : "Puzzle"}</p>
              <span>4.5 ★</span>
            </div>
          ))}
        </div>
        </section>
        <div className="recent-activity">
            <h3>Recent activity</h3>
            <div className="recent-activity-lists">
              {Array.from({ length: 12 }).map((_, index) => (
                <div className="recent-activity-items" key={index}>
                  <img
                    src={Candy}
                    alt={`Recent activity ${index + 1}`}
                    className="recent-activity-images"
                  />
                  <div className="recent-activity-infos">
                    <div>
                    <p className="recent-activity-titles">Candy Crush Saga: Elaba...</p>
                    <p className="recent-activity-descriptions">
                    Thriller
                    </p>
                    <p className="recent-activity-stat">
                    4.5 ★
                    </p>
                    </div>
                    <div>
                    <button>Play now</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
      </div>
  );
};

export default Games;