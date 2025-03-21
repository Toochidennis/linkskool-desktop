import React, { useState } from 'react';
import '../Bookview.css';
import bookCover from '../../assets/img/book 1 3.png';
import logo from '../../assets/img/GraduationCap.png';

const Bookview: React.FC = () => {
  const [mainContent, setMainContent] = useState<string[]>([
    'Lorem ipsum dolor sit amet consectetur. Et nisl in volutpat ac suspendisse. Elementum ac ornare lectus cursus neque. Donec vel etiam nec vel proin in imperdiet tortor. Nisi facilisis adipiscing aliquet consequat blandit hendrerit nulla in facilisi. Congue odio egestas auctor sagittis. Sit justo scelerisque mauris libero sed pharetra nisl vestibulum. Sagittis iaculis sed suscipit leo. Tristique viverra mattis purus diam cursus rutrum mus vel.',
    ''
  ]);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

  const handleThumbnailClick = (content: string) => {
    const contentParts = content.split('\n\n');
    setMainContent(contentParts);
  };

  const handleFullscreenClick = () => {
    setIsFullscreen(true);
  };

  const handleShrinkClick = () => {
    setIsFullscreen(false);
  };

  return (
    <div className={`container ${isFullscreen ? 'fullscreen' : ''}`}>
      {!isFullscreen && (
        <div className="sidebar">
          <div className="logo-container">
            <img src={logo} alt="Logo" className="logo" />
            <div className="logo-text">
              <span className="link">Link</span>
              <span className="skool">Skool</span>
            </div>
          </div>
          <img src={bookCover} alt="Book Cover" className="book-cover" />
          <div className="book-info">
            <h2>Doom Of Aliens</h2>
            <p>by K. S. Jenson</p>
            <p className="rating">⭐⭐⭐⭐⭐</p>
            <button>Go To First Page</button>
          </div>
        </div>
      )}
      <div className={`main-content ${isFullscreen ? 'fullscreen-content' : ''}`}>
        {!isFullscreen && (
          <div className="search-bar">
            <input type="text" placeholder="Search..." />
            <button>Search</button>
          </div>
        )}
        {!isFullscreen && (
          <div className="book-details">
            <div className="book-title">Doom Of Aliens / Martians on Earth</div>
          </div>
        )}
        <div className="book-content">
          <div className="page">
            {mainContent[0]}
          </div>
          <div className="page">
            {mainContent[1]}
          </div>
        </div>
        {isFullscreen ? (
          <button className="shrink-button" onClick={handleShrinkClick}>❌</button>
        ) : (
          <button className="fullscreen-button" onClick={handleFullscreenClick}>Expand</button>
          
        ) 
        }
        <div className={`thumbnails ${isFullscreen ? 'fixed-thumbnails-fullscreen' : ''}`}>
          <div className="thumbnail-box" onClick={() => handleThumbnailClick('Phasellus quam quis vitae suspendisse vitae. Ipsum tellus est ac viverra a. Dolor potenti arcu scelerisque et viverra a non bibendum. Malesuada sagittis facilisis magna cursus sem nunc odio augue platea. Feugiat elit sollicitudin sed convallis quis suspendisse elit purus ac. Nec sed orci aliquet fermentum dui. Et sed consequat scelerisque ac. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Nulla porttitor accumsan tincidunt. Curabitur aliquet quam id dui posuere blandit. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Donec sollicitudin molestie malesuada. \n\n Nulla quis lorem ut libero malesuada feugiat. Pellentesque in ipsum id orci porta dapibus. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vivamus suscipit tortor eget felis porttitor volutpat. Nulla quis lorem ut libero malesuada feugiat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Nulla porttitor accumsan tincidunt.')}>
            <div className="thumbnail">
              <div className="text">set all the font-family in this project to Urbanist dont do anything else
                Phasellus quam quis vitae suspendisse vitae. Ipsum tellus est ac viverra a. Dolor potenti arcu scelerisque et viverra a non bibendum. Malesuada sagittis facilisis magna cursus sem nunc odio augue platea.
              </div>
            </div>
            <div className="highlight"></div>
            <div className="number">171</div>
          </div>
          <div className="thumbnail-box" onClick={() => handleThumbnailClick('In a forgotten attic, a dusty trunk revealed a mysterious clockwork bird. When wound, the bird\'s wings fluttered, and it took flight, leading a young inventor, Sophia, on a magical journey through clock towers and moonlit skies, where time itself seemed to bend.\n\nAs they soared, the clockwork bird\'s melody synchronized with the ticking of clock towers, creating a harmonious symphony. Sophia marveled at the bird\'s intricate mechanisms, and her mind whirled with ideas for new inventions. Together, they danced among the stars, where time\'s fabric was woven and unwoven, revealing hidden patterns and secrets of the universe.')}>
            <div className="thumbnail">
              <div className="text">
                In a forgotten attic, a dusty trunk revealed a mysterious clockwork bird. When wound, the bird's wings fluttered, and it took flight, leading a young inventor, Sophia, on a magical journey through clock towers and moonlit skies, where time itself seemed to bend.
              </div>
            </div>
            <div className="highlight"></div>
            <div className="number">172</div>
          </div>
          <div className="thumbnail-box" onClick={() => handleThumbnailClick('As the clock struck midnight, a lone firefly named Luna landed on a forgotten piano. She danced on the keys, creating a mesmerizing melody. The piano, once silent, now sang with Luna\'s gentle touch, filling the night air with magic.\n\nThe melody wafted through the empty halls, summoning forgotten memories and whispers of the past. Luna\'s light pulsed in rhythm, as if the music itself had taken on a life of its own. The piano\'s voice grew louder, echoing through the night, and Luna\'s firefly companions began to gather, twinkling like stars around the enchanted instrument.')}>
            <div className="thumbnail">
              <div className="text">
                As the clock struck midnight, a lone firefly named Luna landed on a forgotten piano. She danced on the keys, creating a mesmerizing melody. The piano, once silent, now sang with Luna's gentle touch, filling the night air with magic.
              </div>
            </div>
            <div className="highlight"></div>
            <div className="number">173</div>
          </div>
          <div className="thumbnail-box" onClick={() => handleThumbnailClick('In a hidden village, a young girl named Akira discovered a mysterious seed. She planted it, and overnight, a magnificent tree bloomed, its branches reaching for the stars. The tree whispered ancient secrets, and Akira\'s destiny unfolded beneath its radiant, ethereal leaves.\n\nAs Akira listened, the tree\'s whispers grew louder, revealing tales of forgotten civilizations and mystical realms. The tree\'s bark shimmered, and symbols of ancient wisdom etched themselves into the trunk. Akira\'s heart absorbed the knowledge, and her spirit began to soar, entwining with the tree\'s essence.')}>
            <div className="thumbnail">
              <div className="text">
                In a hidden village, a young girl named Akira discovered a mysterious seed. She planted it, and overnight, a magnificent tree bloomed, its branches reaching for the stars. The tree whispered ancient secrets, and Akira's destiny unfolded beneath its radiant, ethereal leaves.
              </div>
            </div>
            <div className="highlight"></div>
            <div className="number">174</div>
          </div>
          <div className="thumbnail-box" onClick={() => handleThumbnailClick('As the tide receded, a weathered violin washed up on the shore. A curious child, Kaito, picked it up, and as he drew the bow, the waves responded with a haunting harmony. The sea itself seemed to sing through Kaito\'s makeshift instrument.\n\nThe harmony swelled, and sea creatures gathered around Kaito, as if entranced by the music. A mermaid\'s voice whispered through the waves, blending with the violin\'s melancholy tone. The sea\'s secrets seemed to unfold, and Kaito\'s heart resonated with the ocean\'s ancient, mysterious song.')}>
            <div className="thumbnail">
              <div className="text">
                As the tide receded, a weathered violin washed up on the shore. A curious child, Kaito, picked it up, and as he drew the bow, the waves responded with a haunting harmony. The sea itself seemed to sing through Kaito's makeshift instrument.
              </div>
            </div>
            <div className="highlight"></div>
            <div className="number">175</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bookview;

