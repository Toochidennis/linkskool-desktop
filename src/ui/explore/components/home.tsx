import { useEffect } from "react";
import { Link } from "react-router-dom";
// import exploreIcon from "../../assets/img/icons8_dashboard_layout 1.png";
// import cbtIcon from "../../assets/img/icons8_imac 1.png";
import ebooksIcon from "../../assets/img/icons8_books 1.png";
import videosIcon from "../../assets/img/icons8_video_playlist_1 1.png";
import Daughters from "../../assets/img/unsplash-igur1ix0mqm.png";
import Box1 from "../../assets/img/pana.png";
import Box2 from "../../assets/img/Hands.png";
import Box3 from "../../assets/img/rafiki.png";
import Box4 from "../../assets/img/amico.png";
import News from "../../assets/img/news.png";

const NavbarComponent: React.FC = () => {
  useEffect(() => {
    const container = document.createElement("div");
    container.style.display = "flex";
    container.style.flexDirection = "row"; // Align sidebars and main content horizontally
    container.style.marginTop = "60px"; // Ensure space for top navbar

    // Top Navbar (Search Bar)
    const topNavbar = document.createElement("div");
    topNavbar.style.position = "fixed";
    topNavbar.style.top = "0";
    topNavbar.style.left = "250px"; // Adjusted to 0 since sidebars are removed
    topNavbar.style.right = "0";
    topNavbar.style.height = "60px";
    topNavbar.style.backgroundColor = "white";
    topNavbar.style.display = "flex";
    topNavbar.style.alignItems = "center";
    topNavbar.style.padding = "0 20px";

    // Search Bar
    const searchInput = document.createElement("input");
    searchInput.type = "text";
    searchInput.placeholder = "Search here...";
    searchInput.style.padding = "10px";
    searchInput.style.border = "1px solid #ddd";
    searchInput.style.borderRadius = "5px";
    searchInput.style.width = "70%"; // Increase the width to match the new width of the main content
    searchInput.style.maxWidth = "none";
    searchInput.style.color = "black";
    searchInput.style.backgroundColor = "white";

    topNavbar.appendChild(searchInput);

    // Main Content
    const mainContent = document.createElement("div");
    mainContent.style.padding = "20px";
    mainContent.style.backgroundColor = "white";
    mainContent.style.width = "67%"; // Adjusted to 100% since sidebars are removed
    mainContent.style.minHeight = "100vh"; // Ensure it expands
    mainContent.style.marginTop = "5px"; // Ensure it scrolls under the navbar
    mainContent.style.marginLeft = "135px"; // Ensure it scrolls under the navbar

    mainContent.style.overflowY = "scroll"; // Enable vertical scrolling
    mainContent.style.scrollbarWidth = "thin"; // For Firefox
    mainContent.style.scrollbarColor = "transparent transparent"; // For Firefox

    // Custom scrollbar for WebKit browsers (Chrome, Safari)
    // mainContent.style.WebkitOverflowScrolling = "touch";
    // mainContent.style.WebkitScrollbarWidth = "thin";
    // mainContent.style.WebkitScrollbarColor = "transparent transparent";

    // First Box (Content Box)
    const firstBox = document.createElement("div");
    firstBox.style.display = "flex";
    firstBox.style.flexDirection = "row"; // Display image and content side by side
    firstBox.style.alignItems = "flex-start"; // Align items to the left
    firstBox.style.width = "92%"; // Shrink the width of the first box
    firstBox.style.height = "auto";
    firstBox.style.backgroundColor = "#D4DEFF";
    firstBox.style.borderRadius = "10px";
    firstBox.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.1)";
    firstBox.style.marginBottom = "8px";
    firstBox.style.paddingLeft = "2px"; // Add padding for inner content
    firstBox.style.marginTop = "-15px"; // Move the box further to the top
    firstBox.style.marginRight = "50px"; // Move the box further to the right

    // Content Container
    const contentContainer = document.createElement("div");
    contentContainer.style.display = "flex";
    contentContainer.style.flexDirection = "column";
    contentContainer.style.width = "50%"; // Adjust the width to 50% of the box
    contentContainer.style.paddingLeft = "10px"; // Adjust the width to 50% of the box
    contentContainer.style.paddingTop = "5px"; // Adjust the width to 50% of the box
    // contentContainer.style.paddingBottom = "15px"; // Adjust the width to 50% of the box

    // Heading
    const heading = document.createElement("h2");
    heading.textContent = "Daughters of Divine Love Juniorate";
    heading.style.color = "black";
    heading.style.marginBottom = "10px";
    heading.style.color= '#2F55DD';
    heading.style.fontSize= '24px';
    heading.style.fontFamily= 'Urbanist';
    heading.style.fontWeight=' 600';


    // Paragraph
    const paragraph = document.createElement("p");
    paragraph.textContent =
      "Gain access to a wide range of practice tests tailored to help manage your time effectively, and boost your confidence before the big day.";
    paragraph.style.color = "black";
    paragraph.style.marginBottom = "10px";
    paragraph.style.color= '#4E5566';
    paragraph.style.fontSize= '10px';
    paragraph.style.fontFamily= 'Urbanist';
    paragraph.style.fontWeight= '500px';
    paragraph.style.lineHeight= '16px';;

    // Link
    const link = document.createElement("a");
    link.href = "#";
    link.textContent = "Purchase form for N10,000";
    link.style.color = "blue";
    link.style.marginBottom = "10px";
    link.style.color= "#2F55DD";
    link.style.fontSize = "14px";
    link.style.fontFamily = "Urbanist";
    link.style.fontWeight = "400px";
    link.style.textDecoration = "Underline";
   

    // Button Container
    const buttonContainer = document.createElement("div");
    buttonContainer.style.display = "flex";
    buttonContainer.style.gap = "10px";
    contentContainer.style.paddingBottom = "10px"; // Adjust the width to 50% of the box

    // Purchase Form Button
    const purchaseButton = document.createElement("button");
    purchaseButton.textContent = "Purchase Form";
    purchaseButton.style.padding = "10px 20px";
    purchaseButton.style.border = "none";
    purchaseButton.style.borderRadius = "5px";
    purchaseButton.style.backgroundColor = "#007bff";
    purchaseButton.style.color = "white";
    purchaseButton.style.cursor = "pointer";
    purchaseButton.style.fontSize = "9px";
    purchaseButton.style.fontFamily = "Urbanist";
    purchaseButton.style.fontWeight = "600px";
    purchaseButton.style.textTransform = "Capitalize";
    purchaseButton.style.lineHeight = "28px";
    purchaseButton.style.paddingRight = "20px";
    purchaseButton.style.paddingLeft = "20px";
   
    // See Details Button
    const detailsButton = document.createElement("button");
    detailsButton.textContent = "See Details";
    detailsButton.style.padding = "10px 20px";
    detailsButton.style.border = "blue 1px solid";
    detailsButton.style.borderRadius = "5px";
    detailsButton.style.backgroundColor = "#D4DEFF";
    detailsButton.style.color = "#426CFF";
    detailsButton.style.cursor = "pointer";
    detailsButton.style.fontSize = "12px";
    detailsButton.style.fontFamily = "Urbanist";
    detailsButton.style.fontWeight = "600px";
    detailsButton.style.textTransform = "Capitalize";
    detailsButton.style.lineHeight = "28px";
    detailsButton.style.paddingRight = "20px";
    detailsButton.style.paddingLeft = "20px";

    // Append buttons to button container
    buttonContainer.appendChild(purchaseButton);
    buttonContainer.appendChild(detailsButton);

    // Append all elements to the content container
    contentContainer.appendChild(heading);
    contentContainer.appendChild(paragraph);
    contentContainer.appendChild(link);
    contentContainer.appendChild(buttonContainer);

    // Image
    const image = document.createElement("img");
    image.src = Daughters;
    image.alt = "Daughters of Divine Love Juniorate";
    image.style.width = "40%"; // Adjust the width to 40% of the box
    image.style.height = "220px";
    image.style.marginLeft = "70px"; // Add margin to create space between content and image
    // image.style.padding = "3px"; // Add margin to create space between content and image

    // Append content container and image to the first box
    firstBox.appendChild(contentContainer);
    firstBox.appendChild(image);

    // Append first box to main content
    mainContent.appendChild(firstBox);

    // Create a section for the four boxes
    const exploreSection = document.createElement("section");
    exploreSection.style.width = "100%"; // Ensure it takes the full width of the main content
    exploreSection.style.marginTop = "10px"; // Add margin to create space below the first box

    // Create the heading for the section
    const sectionHeading = document.createElement("h2");
    sectionHeading.textContent = "Explore Items";
    sectionHeading.style.color = "black";
    sectionHeading.style.marginBottom = "5px";
    sectionHeading.style.fontSize = "18px";
    sectionHeading.style.fontWeight = "bold";

    // Append the heading to the section
    exploreSection.appendChild(sectionHeading);

    // Create a container for the first set of two new boxes
    const twoBoxesContainer = document.createElement("div");
    twoBoxesContainer.style.display = "flex";
    twoBoxesContainer.style.gap = "20px"; // Add gap between the boxes
    twoBoxesContainer.style.width = "100%"; // Ensure it takes the full width of the section

    // Create the first new box
    const newBox1 = document.createElement("div");
    newBox1.style.width = "45%"; // Set width to 48% to leave space for the gap
    newBox1.style.height = "167px"; // Set height as needed
    newBox1.style.background =
      "linear-gradient(180deg, #F4A261 0%, #FF7729 100%)";
    newBox1.style.borderRadius = "10px"; // Set border radius
    newBox1.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.1)"; // Set box shadow
    newBox1.style.padding = "10px"; // Add padding for inner content
    newBox1.style.position = "relative"; // Ensure the image can be positioned absolutely

    // Heading for newBox1
    const subHeading = document.createElement("h3");
    subHeading.innerHTML = "Computer Based Examination <br> Practice Test";
    subHeading.style.color = "white"; // Set text color to white
    subHeading.style.marginBottom = "30px"; // Add more space between the header and other contents
    subHeading.style.fontWeight = "bold";
    subHeading.style.color= 'white';
    subHeading.style.fontSize= '18px';
    subHeading.style.fontFamily= 'Urbanist';
    subHeading.style.fontWeight= '700';
    subHeading.style.textTransform= 'capitalize';
    subHeading.style.wordWrap= 'breakWord'

    // Small Button for newBox1
    const smallButton = document.createElement("button");
    smallButton.textContent = "Get";
    smallButton.style.padding = "5px 10px";
    smallButton.style.border = "none";
    smallButton.style.borderRadius = "5px";
    smallButton.style.backgroundColor = "white"; // Set background color to white
    smallButton.style.cursor = "pointer";
    smallButton.style.marginBottom = "10px";
    smallButton.style.color= '#2F55DD';
    smallButton.style.fontSize= '8px';
    smallButton.style.fontFamily= 'Inter';
    smallButton.style.fontWeight= '400';
    smallButton.style.textTransform= 'uppercase';

    // Paragraph for newBox1
    const smallParagraph = document.createElement("p");
    smallParagraph.textContent =
      "Explore fun and educational games designed to enhance learning and engagement for students";
    smallParagraph.style.color = "white"; // Set text color to white
    smallParagraph.style.marginBottom = "10px";
    smallParagraph.style.color= '#F0F0F0';
    smallParagraph.style.fontSize= '12px';
    smallParagraph.style.fontFamily= 'Urbanist';
    smallParagraph.style.fontWeight= '500';

    // Image for newBox1
    const smallImage = document.createElement("img");
    smallImage.src = Box1;
    smallImage.alt = "Educational Games";
    smallImage.style.width = "70px"; // Adjust the width as needed
    smallImage.style.height = "auto";
    smallImage.style.position = "absolute";
    smallImage.style.top = "10px";
    smallImage.style.right = "1px";

    // Append all elements to the first new box
    newBox1.appendChild(subHeading);
    newBox1.appendChild(smallButton);
    newBox1.appendChild(smallParagraph);
    newBox1.appendChild(smallImage);

    // Create the second new box
    const newBox2 = document.createElement("div");
    newBox2.style.width = "45%"; // Set width to 48% to leave space for the gap
    newBox2.style.height = "167px"; // Set height as needed
    newBox2.style.background =
      "linear-gradient(180deg, #2EC4B6 0%, #009082 100%)"; // Set background to linear gradient
    newBox2.style.borderRadius = "10px"; // Set border radius
    newBox2.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.1)"; // Set box shadow
    newBox2.style.padding = "10px"; // Add padding for inner content
    newBox2.style.position = "relative"; // Ensure the image can be positioned absolutely

    // Heading for newBox2
    const subHeading2 = document.createElement("h3");
    subHeading2.innerHTML = "Fun & Educative games";
    subHeading2.style.color = "white"; // Set text color to white
    subHeading2.style.marginBottom = "50px"; // Add more space between the header and other contents
    subHeading2.style.fontWeight = "bold";
    subHeading2.style.fontSize= '18px';
    subHeading2.style.fontFamily= 'Urbanist';
    subHeading2.style.fontWeight= '700';
    subHeading2.style.textTransform= 'capitalize';
    subHeading2.style.wordWrap= 'breakWord'

    // Small Button for newBox2
    const smallButton2 = document.createElement("button");
    smallButton2.textContent = "Get";
    smallButton2.style.padding = "5px 10px";
    smallButton2.style.border = "none";
    smallButton2.style.borderRadius = "5px";
    smallButton2.style.backgroundColor = "white"; // Set background color to white
    smallButton2.style.cursor = "pointer";
    smallButton2.style.marginBottom = "10px";
    smallButton2.style.color= '#2F55DD';
    smallButton2.style.fontSize= '8px';
    smallButton2.style.fontFamily= 'Inter';
    smallButton2.style.fontWeight= '400';
    smallButton2.style.textTransform= 'uppercase';

    // Paragraph for newBox2
    const smallParagraph2 = document.createElement("p");
    smallParagraph2.textContent =
      "Explore fun and educational games designed to enhance learning and engagement for students";
    smallParagraph2.style.color = "white"; // Set text color to white
    smallParagraph2.style.marginBottom = "10px";
    smallParagraph2.style.color= '#F0F0F0';
    smallParagraph2.style.fontSize= '12px';
    smallParagraph2.style.fontFamily= 'Urbanist';
    smallParagraph2.style.fontWeight= '500';

    // Image for newBox2
    const smallImage2 = document.createElement("img");
    smallImage2.src = Box2;
    smallImage2.alt = "Educational Games";
    smallImage2.style.width = "70px"; // Adjust the width as needed
    smallImage2.style.height = "auto";
    smallImage2.style.position = "absolute";
    smallImage2.style.top = "10px";
    smallImage2.style.right = "1px";

    // Append all elements to the second new box
    newBox2.appendChild(subHeading2);
    newBox2.appendChild(smallButton2);
    newBox2.appendChild(smallParagraph2);
    newBox2.appendChild(smallImage2);

    // Append the new boxes to the first container
    twoBoxesContainer.appendChild(newBox1);
    twoBoxesContainer.appendChild(newBox2);

    // Append the first container to the section
    exploreSection.appendChild(twoBoxesContainer);

    // Create a container for the second set of two new boxes
    const secondTwoBoxesContainer = document.createElement("div");
    secondTwoBoxesContainer.style.display = "flex";
    secondTwoBoxesContainer.style.gap = "20px"; // Add gap between the boxes
    secondTwoBoxesContainer.style.width = "100%"; // Ensure it takes the full width of the section
    secondTwoBoxesContainer.style.marginTop = "20px"; // Add margin to create space below the first set of boxes

    // Create the third new box
    const newBox3 = document.createElement("div");
    newBox3.style.width = "45%"; // Set width to 48% to leave space for the gap
    newBox3.style.height = "167px"; // Set height as needed
    newBox3.style.background =
      "linear-gradient(180deg, #8B8CF5 0%, #3B3CFF 100%)"; // Set background to linear gradient
    newBox3.style.borderRadius = "10px"; // Set border radius
    newBox3.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.1)"; // Set box shadow
    newBox3.style.padding = "10px"; // Add padding for inner content
    newBox3.style.position = "relative"; // Ensure the image can be positioned absolutely

    // Heading for newBox3
    const subHeading3 = document.createElement("h3");
    subHeading3.innerHTML = "Board approved books <br> and Novels";
    subHeading3.style.color = "white"; // Set text color to white
    subHeading3.style.marginBottom = "30px"; // Add more space between the header and other contents
    subHeading3.style.fontWeight = "bold";
    subHeading3.style.fontSize= '18px';
    subHeading3.style.fontFamily= 'Urbanist';
    subHeading3.style.fontWeight= '700';
    subHeading3.style.textTransform= 'capitalize';
    subHeading3.style.wordWrap= 'breakWord'

    // Small Button for newBox3
    const smallButton3 = document.createElement("button");
    smallButton3.textContent = "Get";
    smallButton3.style.padding = "5px 10px";
    smallButton3.style.border = "none";
    smallButton3.style.borderRadius = "5px";
    smallButton3.style.backgroundColor = "white"; // Set background color to white
    smallButton3.style.cursor = "pointer";
    smallButton3.style.marginBottom = "10px";
    smallButton3.style.color= '#2F55DD';
    smallButton3.style.fontSize= '8px';
    smallButton3.style.fontFamily= 'Inter';
    smallButton3.style.fontWeight= '400';
    smallButton3.style.textTransform= 'uppercase';

    // Paragraph for newBox3
    const smallParagraph3 = document.createElement("p");
    smallParagraph3.textContent =
      "Explore fun and educational games designed to enhance learning and engagement for students";
    smallParagraph3.style.color = "white"; // Set text color to white
    smallParagraph3.style.marginBottom = "10px";
    smallParagraph3.style.color= '#F0F0F0';
    smallParagraph3.style.fontSize= '12px';
    smallParagraph3.style.fontFamily= 'Urbanist';
    smallParagraph3.style.fontWeight= '500';

    // Image for newBox3
    const smallImage3 = document.createElement("img");
    smallImage3.src = Box3;
    smallImage3.alt = "Educational Games";
    smallImage3.style.width = "70px"; // Adjust the width as needed
    smallImage3.style.height = "auto";
    smallImage3.style.position = "absolute";
    smallImage3.style.top = "10px";
    smallImage3.style.right = "1px";

    // Append all elements to the third new box
    newBox3.appendChild(subHeading3);
    newBox3.appendChild(smallButton3);
    newBox3.appendChild(smallParagraph3);
    newBox3.appendChild(smallImage3);

    // Create the fourth new box
    const newBox4 = document.createElement("div");
    newBox4.style.width = "45%"; // Set width to 48% to leave space for the gap
    newBox4.style.height = "167px"; // Set height as needed
    newBox4.style.background =
      "linear-gradient(180deg, #5454AA 0%, #1C1C3C 100%)"; // Set background to linear gradient
    newBox4.style.borderRadius = "10px"; // Set border radius
    newBox4.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.1)"; // Set box shadow
    newBox4.style.padding = "10px"; // Add padding for inner content
    newBox4.style.position = "relative"; // Ensure the image can be positioned absolutely

    // Heading for newBox4
    const subHeading4 = document.createElement("h3");
    subHeading4.innerHTML = "Academic videos";
    subHeading4.style.color = "white"; // Set text color to white
    subHeading4.style.marginBottom = "50px"; // Add more space between the header and other contents
    subHeading4.style.fontWeight = "bold";
    subHeading4.style.fontSize= '18px';
    subHeading4.style.fontFamily= 'Urbanist';
    subHeading4.style.fontWeight= '700';
    subHeading4.style.textTransform= 'capitalize';
    subHeading4.style.wordWrap= 'breakWord'

    // Small Button for newBox4
    const smallButton4 = document.createElement("button");
    smallButton4.textContent = "Get";
    smallButton4.style.padding = "5px 10px";
    smallButton4.style.border = "none";
    smallButton4.style.borderRadius = "5px";
    smallButton4.style.backgroundColor = "white"; // Set background color to white
    smallButton4.style.cursor = "pointer";
    smallButton4.style.marginBottom = "10px";
    smallButton4.style.color= '#2F55DD';
    smallButton4.style.fontSize= '8px';
    smallButton4.style.fontFamily= 'Inter';
    smallButton4.style.fontWeight= '400';
    smallButton4.style.textTransform= 'uppercase';

    // Paragraph for newBox4
    const smallParagraph4 = document.createElement("p");
    smallParagraph4.textContent =
      "Explore fun and educational games designed to enhance learning and engagement for students";
    smallParagraph4.style.color = "white"; // Set text color to white
    smallParagraph4.style.marginBottom = "10px";
    smallParagraph4.style.color= '#F0F0F0';
    smallParagraph4.style.fontSize= '12px';
    smallParagraph4.style.fontFamily= 'Urbanist';
    smallParagraph4.style.fontWeight= '500';

    // Image for newBox4
    const smallImage4 = document.createElement("img");
    smallImage4.src = Box4;
    smallImage4.alt = "Educational Games";
    smallImage4.style.width = "70px"; // Adjust the width as needed
    smallImage4.style.height = "auto";
    smallImage4.style.position = "absolute";
    smallImage4.style.top = "10px";
    smallImage4.style.right = "1px";

    // Append all elements to the fourth new box
    newBox4.appendChild(subHeading4);
    newBox4.appendChild(smallButton4);
    newBox4.appendChild(smallParagraph4);
    newBox4.appendChild(smallImage4);

    // Append the new boxes to the second container
    secondTwoBoxesContainer.appendChild(newBox3);
    secondTwoBoxesContainer.appendChild(newBox4);

    // Append the second container to the section
    exploreSection.appendChild(secondTwoBoxesContainer);

    // Append the section to the main content
    mainContent.appendChild(exploreSection);

    // Append the second container to the main content
    mainContent.appendChild(secondTwoBoxesContainer);

    // Create a section for the video grid
    const videoSection = document.createElement("section");
    videoSection.style.width = "93%"; // Ensure it takes the full width of the main content
    videoSection.style.marginTop = "20px"; // Add margin to create space below the previous section

    // Create a container for the heading and the "See All" link
    const videoSectionHeader = document.createElement("div");
    videoSectionHeader.style.display = "flex";
    videoSectionHeader.style.justifyContent = "space-between";
    videoSectionHeader.style.alignItems = "center";
    videoSectionHeader.style.marginBottom = "20px";

    // Create the heading for the video section
    const videoSectionHeading = document.createElement("h2");
    videoSectionHeading.textContent = "Top Videos";
    videoSectionHeading.style.color = "black";
    videoSectionHeading.style.fontSize = "18px";
    videoSectionHeading.style.fontWeight = "bold";

    // Create the "See All" link
    const seeAllLink = document.createElement("a");
    seeAllLink.href = "#";
    seeAllLink.textContent = "See All";
    seeAllLink.style.color = "blue";
    seeAllLink.style.textDecoration = "none";

    // Append the heading and the "See All" link to the header container
    videoSectionHeader.appendChild(videoSectionHeading);
    videoSectionHeader.appendChild(seeAllLink);

    // Append the header container to the video section
    videoSection.appendChild(videoSectionHeader);

    // Create a container for the video grid
    const videoGridContainer = document.createElement("div");
    videoGridContainer.style.display = "grid";
    videoGridContainer.style.gridTemplateColumns = "repeat(3, 1fr)";
    videoGridContainer.style.gap = "20px"; // Add gap between the video boxes

    // Function to create a video box
    const createVideoBox = () => {
      const videoBox = document.createElement("div");
      videoBox.style.backgroundColor = "#f0f0f0";
      videoBox.style.borderRadius = "10px";
      videoBox.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.1)";
      videoBox.style.overflow = "hidden";

      // Video thumbnail
      const videoThumbnail = document.createElement("img");
      videoThumbnail.src = Daughters;
      videoThumbnail.alt = "Video Thumbnail";
      videoThumbnail.style.width = "100%";
      videoThumbnail.style.height = "auto";

      // Video details container
      const videoDetails = document.createElement("div");
      videoDetails.style.padding = "10px";

      // Video title
      const videoTitle = document.createElement("h3");
      videoTitle.textContent =
        "Cyber Security: From Basic To Advanced Level - Mr Toochi";
      videoTitle.style.color = "black";
      videoTitle.style.fontSize = "14px";
      videoTitle.style.fontWeight = "bold";
      videoTitle.style.marginBottom = "5px";
      videoTitle.style.color= '#1A1A1A';
      videoTitle.style.fontSize= '15px';
      videoTitle.style.fontFamily= 'Urbanist';
      videoTitle.style.fontWeight= '500';
      videoTitle.style.textTransform= 'capitalize';

      // Video channel
      const videoChannel = document.createElement("p");
      videoChannel.textContent = "Digital Dreams ICT Academy";
      videoChannel.style.color = "gray";
      videoChannel.style.fontSize = "12px";
      videoChannel.style.marginBottom = "5px";
      videoChannel.style.color= '#414141';
      videoChannel.style.fontSize= '12px';
      videoChannel.style.fontFamily= 'Urbanist';
      videoChannel.style.fontWeight= '500';
      videoChannel.style.textTransform= 'capitalize';

      // Video views and time
      const videoViewsTime = document.createElement("p");
      videoViewsTime.textContent = "23k views • 5 months ago";
      videoViewsTime.style.color = "gray";
      videoViewsTime.style.fontSize = "12px";

      // Append video details to the details container
      videoDetails.appendChild(videoTitle);
      videoDetails.appendChild(videoChannel);
      videoDetails.appendChild(videoViewsTime);

      // Append thumbnail and details to the video box
      videoBox.appendChild(videoThumbnail);
      videoBox.appendChild(videoDetails);

      return videoBox;
    };

    // Create and append 6 video boxes to the grid container
    for (let i = 0; i < 6; i++) {
      videoGridContainer.appendChild(createVideoBox());
    }

    // Append the video grid container to the video section
    videoSection.appendChild(videoGridContainer);

    // Append the video section to the main content
    mainContent.appendChild(videoSection);

    // Append main content to container
    container.appendChild(mainContent);

    // Append the whole container to body
    document.body.appendChild(topNavbar);
    document.body.appendChild(container);

    // Create a fixed heading on the navbar
    const newsHeading = document.createElement("h2");
    newsHeading.textContent = "News and updates";
    newsHeading.style.position = "fixed";
    newsHeading.style.top = "0";
    newsHeading.style.right = "0"; // Shift to the end of the screen
    newsHeading.style.backgroundColor = "white";
    newsHeading.style.padding = "10px 20px";
    newsHeading.style.zIndex = "1000"; // Ensure it stays on top of other elements
    newsHeading.style.fontSize = "18px";
    newsHeading.style.fontWeight = "bold";

    // Append the heading to the body
    document.body.appendChild(newsHeading);

    // Create a scrollable section for the news items
    const newsSection = document.createElement("section");
    newsSection.style.position = "fixed";
    newsSection.style.top = "60px"; // Below the navbar
    newsSection.style.right = "0"; // Shift to the end of the screen
    newsSection.style.width = "25%"; // Adjust the width as needed
    newsSection.style.height = "calc(100vh - 60px)"; // Full height minus the navbar height
    newsSection.style.overflowY = "scroll"; // Enable vertical scrolling
    newsSection.style.backgroundColor = "white";
    newsSection.style.padding = "10px";
    newsSection.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.1)";
    newsSection.style.zIndex = "1000"; // Ensure it stays on top of other elements

    // Hide the scrollbar for the news section
    newsSection.style.scrollbarWidth = "none"; // For Firefox
    // newsSection.style.msOverflowStyle = "none"; // For Internet Explorer and Edge
    newsSection.style.overflow = "-moz-scrollbars-none"; // For older Firefox versions

    // Hide the scrollbar for WebKit browsers (Chrome, Safari)
    // newsSection.style.WebkitOverflowScrolling = "touch";
    // newsSection.style.WebkitScrollbar = {
    //   width: "0px",
    //   background: "transparent",
    // };

    // Function to create a news item
    const createNewsItem = () => {
      const newsItem = document.createElement("div");
      newsItem.style.display = "flex";
      newsItem.style.marginBottom = "20px";

      // News image
      const newsImage = document.createElement("img");
      newsImage.src = News;
      newsImage.alt = "News Image";
      newsImage.style.width = "80px";
      newsImage.style.height = "80px";
      newsImage.style.borderRadius = "10px";
      newsImage.style.marginRight = "10px";

      // News details container
      const newsDetails = document.createElement("div");
      newsDetails.style.flex = "1";

      // News category
      const newsCategory = document.createElement("span");
      newsCategory.textContent = "News";
      newsCategory.style.color = "blue";
      newsCategory.style.fontSize = "12px";
      newsCategory.style.fontWeight = "bold";
      newsCategory.style.display = "block";
      newsCategory.style.marginBottom = "5px";

      // News title
      const newsTitle = document.createElement("h3");
      newsTitle.textContent =
        "This is a mock data showing the info details of a news article.";
      newsTitle.style.color = "black";
      newsTitle.style.fontSize = "14px";
      newsTitle.style.fontWeight = "bold";
      newsTitle.style.marginBottom = "5px";

      // News date
      const newsDate = document.createElement("p");
      newsDate.textContent = "08 Mar 2025";
      newsDate.style.color = "gray";
      newsDate.style.fontSize = "12px";

      // Append news details to the details container
      newsDetails.appendChild(newsCategory);
      newsDetails.appendChild(newsTitle);
      newsDetails.appendChild(newsDate);

      // Append image and details to the news item
      newsItem.appendChild(newsImage);
      newsItem.appendChild(newsDetails);

      return newsItem;
    };

    // Create and append 10 news items to the news section
    for (let i = 0; i < 10; i++) {
      newsSection.appendChild(createNewsItem());
    }

    // Append the news section to the body
    document.body.appendChild(newsSection);

    // Hide the scrollbar for the main content area
    mainContent.style.overflowY = "scroll"; // Enable vertical scrolling
    mainContent.style.scrollbarWidth = "none"; // For Firefox
    // mainContent.style.msOverflowStyle = "none"; // For Internet Explorer and Edge
    mainContent.style.overflow = "-moz-scrollbars-none"; // For older Firefox versions

    // Hide the scrollbar for WebKit browsers (Chrome, Safari)
    // mainContent.style.WebkitOverflowScrolling = "touch";
    // mainContent.style.WebkitScrollbar = {
    //   width: "0px",
    //   background: "transparent",
    // };

    return () => {
      document.body.removeChild(topNavbar);
      document.body.removeChild(container);
      document.body.removeChild(newsHeading);
      document.body.removeChild(newsSection);
    };
  }, []);

  return (
    <div>
      <Link to="/e-books">
        <img src={ebooksIcon} alt="E-books" />
      </Link>
      <Link to="/videos">
        <img src={videosIcon} alt="Videos" />
      </Link>
      {/* ...existing code... */}
    </div>
  );
};

export default NavbarComponent;
