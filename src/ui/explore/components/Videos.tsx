import React, { useEffect } from "react";
// import { Link } from "react-router-dom";
import Sidebar from "./Sidebar"; // Import Sidebar
import youtubeIcon from "../../assets/img/Image.png";
import biximage from "../../assets/img/unsplash-igur1ix0mqm.png";
import biximage2 from "../../assets/img/Image (1).png";
import English from "../../assets/img/icons8_lowercase 1.png";
import Maths from "../../assets/img/icons8_math 1.png";
import Geology from "../../assets/img/icons8_globe_earth 1.png";
import Agric from "../../assets/img/icons8_sprout 1.png";
import "./Videos.css"; // Import CSS file

const VideosComponent: React.FC = () => {
  useEffect(() => {
    const container = document.createElement("div");
    container.style.display = "flex";
    container.style.flexDirection = "column";
    container.style.marginLeft = "100px"; // Ensure space for sidebar
    container.style.marginTop = "60px"; // Ensure space for top navbar

    // Top Navbar (Search Bar)
    const topNavbar = document.createElement("div");
    topNavbar.style.position = "fixed";
    topNavbar.style.top = "0";
    topNavbar.style.left = "170px";
    topNavbar.style.right = "0";
    topNavbar.style.height = "60px";
    topNavbar.style.backgroundColor = "white";
    topNavbar.style.display = "flex";
    topNavbar.style.alignItems = "center";
    topNavbar.style.padding = "0 20px";
    topNavbar.style.width = "63%";
    //topNavbar.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.1)";

    // Search Bar
    const searchInput = document.createElement("input");
    searchInput.type = "text";
    searchInput.placeholder = "Search here...";
    searchInput.style.padding = "10px";
    searchInput.style.border = "1px solid #ddd";
    searchInput.style.borderRadius = "5px";
    searchInput.style.width = "100%"; // Increase the width to match the new width of the main content
    searchInput.style.maxWidth = "none";
    searchInput.style.color = "black";
    searchInput.style.backgroundColor = "white";

    topNavbar.appendChild(searchInput);

    // Append nav elements to body
    document.body.appendChild(topNavbar);

    return () => {
      document.body.removeChild(topNavbar);
    };
  }, []);

  return (
    <div>
      <Sidebar /> {/* Use Sidebar */}
      <div>
        {/* Main content area */}
        <div className="main-content">
          <div className="content-box">
            <div className="header">
              <div className="header-left">
                <img
                  src={youtubeIcon}
                  alt="YouTube Icon"
                  className="youtube-icon"
                />
                <h2>RELEASED this week</h2>
                <p>
                  Discover the best new music and new artists every week on the
                  #RELEASED playlist on YouTube
                </p>
              </div>
              <div className="header-right">
                <div className="video-section">
                  <div className="video">
                    <img src={biximage} alt="Video 1" className="video-image" />
                    <div className="video-info">
                      <img
                        src={biximage2}
                        alt="Bulb Icon"
                        className="bulb-icon"
                      />
                      <p className="video-title">
                        Dangers of Cyber Security (Official Video)
                      </p>
                    </div>
                    <p className="video-description">
                      Digital Dreams ICT Academy
                    </p>
                  </div>
                  <div className="video">
                    <img src={biximage} alt="Video 2" className="video-image" />
                    <div className="video-info">
                      <img
                        src={biximage2}
                        alt="Bulb Icon"
                        className="bulb-icon"
                      />
                      <p className="video-title">
                        Dangers of Cyber Security (Official Video)
                      </p>
                    </div>
                    <p className="video-description">
                      Digital Dreams ICT Academy
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="show-more">
              <button
                style={{ border: "1px solid black", borderRadius: "5px" }}
              >
                Show more <span className="dropdown-icon">▼</span>
              </button>
            </div>
          </div>
          {/* Categories section */}
          <div className="categories-section">
            <h3>Categories</h3>
            <div className="categories-grid">
              <div className="category-box">
                <img src={English} alt="English Language" />
                <p>English Language</p>
                <button>See curriculum</button>
              </div>
              <div className="category-box">
                <img src={Maths} alt="Mathematics" />
                <p>Mathematics</p>
                <button>See curriculum</button>
              </div>
              <div className="category-box">
                <img src={Geology} alt="Geology" />
                <p>Geology</p>
                <button>See curriculum</button>
              </div>
              <div className="category-box">
                <img src={Agric} alt="Agriculture" />
                <p>Agriculture</p>
                <button>See curriculum</button>
              </div>
              {/* Second row */}
              <div className="category-box">
                <img src={Maths} alt="Mathematics" />
                <p>Mathematics</p>
                <button>See curriculum</button>
              </div>
              <div className="category-box">
                <img src={Agric} alt="Agriculture" />
                <p>Agriculture</p>
                <button>See curriculum</button>
              </div>
              <div className="category-box">
                <img src={English} alt="English Language" />
                <p>English Language</p>
                <button>See curriculum</button>
              </div>
              <div className="category-box">
                <img src={Geology} alt="Geology" />
                <p>Geology</p>
                <button>See curriculum</button>
              </div>
              {/* Third row */}
              <div className="category-box">
                <img src={Geology} alt="Geology" />
                <p>Geology</p>
                <button>See curriculum</button>
              </div>
              <div className="category-box">
                <img src={English} alt="English Language" />
                <p>English Language</p>
                <button>See curriculum</button>
              </div>
              <div className="category-box">
                <img src={Agric} alt="Agriculture" />
                <p>Agriculture</p>
                <button>See curriculum</button>
              </div>
              <div className="category-box">
                <img src={Maths} alt="Mathematics" />
                <p>Mathematics</p>
                <button>See curriculum</button>
              </div>
            </div>
          </div>
          {/* Videos section */}
          <div className="videos-section">
            <h3>We also recommend</h3>
            <div className="videos-grid">
              <div className="video-box">
                <iframe
                  width="100%"
                  height="200"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <p className="video-title">
                  YOUR QUESTIONS answered March edition
                </p>
                <p className="video-description">The Villages</p>
                <p className="video-stats">607 views • 1 hour ago</p>
              </div>
              <div className="video-box">
                <iframe
                  width="100%"
                  height="200"
                  src="https://www.youtube.com/embed/3JZ_D3ELwOQ"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <p className="video-title">A shocking find in an oak tree</p>
                <p className="video-description">Dale Atwood</p>
                <p className="video-stats">534 views • 5 minutes ago</p>
              </div>
              <div className="video-box">
                <iframe
                  width="100%"
                  height="200"
                  src="https://www.youtube.com/embed/l482T0yNkeo"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <p className="video-title">1 in a Million MLB Moments</p>
                <p className="video-description">MLB</p>
                <p className="video-stats">1.5M views • 1 month ago</p>
              </div>
              {/* Second row */}
              <div className="video-box">
                <iframe
                  width="100%"
                  height="200"
                  src="https://www.youtube.com/embed/2Vv-BfVoq4g"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <p className="video-title">Mortal Kombat: End Game</p>
                <p className="video-description">Thriller</p>
                <p className="video-stats">4.5 ★</p>
              </div>
              <div className="video-box">
                <iframe
                  width="100%"
                  height="200"
                  src="https://www.youtube.com/embed/9bZkp7q19f0"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <p className="video-title">Candy Crush Saga</p>
                <p className="video-description">Puzzle</p>
                <p className="video-stats">4.5 ★</p>
              </div>
              <div className="video-box">
                <iframe
                  width="100%"
                  height="200"
                  src="https://www.youtube.com/embed/3tmd-ClpJxA"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <p className="video-title">Mortal Kombat: End Game</p>
                <p className="video-description">Thriller</p>
                <p className="video-stats">4.5 ★</p>
              </div>
              {/* Third row */}
              <div className="video-box">
                <iframe
                  width="100%"
                  height="200"
                  src="https://www.youtube.com/embed/6Dh-RL__uN4"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <p className="video-title">Mortal Kombat: End Game</p>
                <p className="video-description">Thriller</p>
                <p className="video-stats">4.5 ★</p>
              </div>
              <div className="video-box">
                <iframe
                  width="100%"
                  height="200"
                  src="https://www.youtube.com/embed/OPf0YbXqDm0"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <p className="video-title">Mortal Kombat: End Game</p>
                <p className="video-description">Thriller</p>
                <p className="video-stats">4.5 ★</p>
              </div>
              <div className="video-box">
                <iframe
                  width="100%"
                  height="200"
                  src="https://www.youtube.com/embed/2vjPBrBU-TM"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <p className="video-title">Mortal Kombat: End Game</p>
                <p className="video-description">Thriller</p>
                <p className="video-stats">4.5 ★</p>
              </div>
            </div>
          </div>
          {/* Recent activity section */}
          <div className="recent-activity-section">
            <h3>Recent activity</h3>
            <div className="recent-activity-list">
              {Array.from({ length: 12 }).map((_, index) => (
                <div className="recent-activity-item" key={index}>
                  <img
                    src={biximage}
                    alt={`Recent activity ${index + 1}`}
                    className="recent-activity-image"
                  />
                  <div className="recent-activity-info">
                    <p className="recent-activity-title">Google Pixel 7a Pro</p>
                    <p className="recent-activity-description">
                      The Best Smartphone
                    </p>
                    <p className="recent-activity-stats">
                      2 hours ago • 1.2M views
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideosComponent;
