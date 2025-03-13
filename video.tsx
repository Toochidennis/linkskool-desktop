import React from "react";
// ...existing code...

const VideoPage = () => {
  return (
    <div className="main-content">
      <div className="youtube-featured">
        <h2>RELEASED this week</h2>
        <p>
          Discover the best new music and new artists every week on the RELEASED
          playlist on YouTube
        </p>
        <div className="video-thumbnails">
          <div className="video-thumbnail">
            <img src="path/to/image1.jpg" alt="Dangers of Cyber Security" />
            <p>Dangers of Cyber Security</p>
            <span>CyberSecurity Academy</span>
          </div>
          <div className="video-thumbnail">
            <img src="path/to/image2.jpg" alt="Dangers of Cyber Security" />
            <p>Dangers of Cyber Security</p>
            <span>CyberSecurity Academy</span>
          </div>
        </div>
      </div>
      <div className="categories">
        <h2>Categories</h2>
        <div className="category-list">
          <div className="category-item">
            <span>English Language</span>
            <button>See curriculum</button>
          </div>
          <div className="category-item">
            <span>Mathematics</span>
            <button>See curriculum</button>
          </div>
          <div className="category-item">
            <span>Geology</span>
            <button>See curriculum</button>
          </div>
          <div className="category-item">
            <span>Agriculture</span>
            <button>See curriculum</button>
          </div>
          <div className="category-item">
            <span>Mathematics</span>
            <button>See curriculum</button>
          </div>
          <div className="category-item">
            <span>Geology</span>
            <button>See curriculum</button>
          </div>
          <div className="category-item">
            <span>Agriculture</span>
            <button>See curriculum</button>
          </div>
          <div className="category-item">
            <span>English Language</span>
            <button>See curriculum</button>
          </div>
          <div className="category-item">
            <span>Agriculture</span>
            <button>See curriculum</button>
          </div>
          <div className="category-item">
            <span>English Language</span>
            <button>See curriculum</button>
          </div>
          <div className="category-item">
            <span>Mathematics</span>
            <button>See curriculum</button>
          </div>
          <div className="category-item">
            <span>Geology</span>
            <button>See curriculum</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPage;
