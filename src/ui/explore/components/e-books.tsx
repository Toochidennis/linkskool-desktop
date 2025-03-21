import React, { useEffect } from "react";
import { useNavigate, Link } from 'react-router-dom';
import Sidebar from "./Sidebar"; // Import Sidebar
import Book from "../../assets/img/book 1 3.png";
import Books from "../../assets/img/book 2 2.png";

const EBooksComponent: React.FC = () => {
  const navigate = useNavigate();

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
    topNavbar.style.left = "250px";
    topNavbar.style.right = "0";
    topNavbar.style.height = "60px";
    topNavbar.style.backgroundColor = "white";
    topNavbar.style.display = "flex";
    topNavbar.style.alignItems = "center";
    topNavbar.style.padding = "0 20px";
    topNavbar.style.width = "57%";

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

    // Main Content
    const mainContent = document.createElement("div");
    mainContent.style.flex = "1";
    mainContent.style.padding = "20px";
    mainContent.style.backgroundColor = "white";
    mainContent.style.minHeight = "100vh"; // Ensure it expands
    mainContent.style.width = "73%"; // Adjust the width of the main content
    mainContent.style.marginLeft = "40px"; // Ensure it is positioned correctly
    mainContent.style.overflowY = "scroll"; // Enable vertical scrolling
    mainContent.style.scrollbarWidth = "thin"; // For Firefox
    mainContent.style.scrollbarColor = "transparent transparent"; // For Firefox

    // New Box (Content Box)
    const newBox = document.createElement("div");
    newBox.style.display = "flex";
    newBox.style.flexDirection = "row"; // Display image and content side by side
    newBox.style.alignItems = "flex-start"; // Align items to the left
    newBox.style.width = "95%"; // Match the width of the search bar
    newBox.style.height = "auto";
    newBox.style.backgroundColor = "#f0f0f0";
    newBox.style.borderRadius = "10px";
    newBox.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.1)";
    newBox.style.marginBottom = "20px";
    newBox.style.padding = "20px"; // Add padding for inner content
    newBox.style.marginTop = "5px"; // Ensure it is directly under the search bar
    newBox.style.marginLeft = "-20px"; // Move the box further to the left

    // Content Container
    const contentContainer = document.createElement("div");
    contentContainer.style.display = "flex";
    contentContainer.style.flexDirection = "column";
    contentContainer.style.width = "80%"; // Adjust the width to 80% of the box

    // Heading
    const heading = document.createElement("h2");
    heading.textContent = "Purple Hibiscus: Kambili and her brother Ahanna";
    heading.style.color = "#1A1A1A";
    heading.style.marginBottom = "10px";
    heading.style.fontSize = "24px";
    heading.style.fontWeight = "bold";
    heading.style.fontFamily = "Urbanist";
    heading.style.fontWeight = "600px";

    // Paragraph
    const paragraph = document.createElement("p");
    paragraph.textContent =
      "Gain access to a wide range of practice tests tailored to help manage your time effectively, and boost your confidence before the big day.Gain access to a wide range of practice tests tailored to help manage your time effectively, and boost your confidence before the big day.";
    paragraph.style.color = "black";
    paragraph.style.marginBottom = "10px";
    paragraph.style.fontFamily = "Urbanist";
    paragraph.style.fontWeight = "500px";
    paragraph.style.lineHeight = "16px";
    paragraph.style.color = "#5b5b5b";

    // Button
    const button = document.createElement("button");
    button.textContent = "Start Reading";
    button.style.padding = "10px 20px";
    button.style.border = "none";
    button.style.borderRadius = "5px";
    button.style.backgroundColor = "#9A3C94";
    button.style.color = "white";
    button.style.cursor = "pointer";
    button.style.width = "130px";
    button.style.fontSize = "14px";
    button.style.fontFamily = "Urbanist";
    button.style.fontWeight = "500px";

    // Append all elements to the content container
    contentContainer.appendChild(heading);
    contentContainer.appendChild(paragraph);
    contentContainer.appendChild(button);

    // Image
    const image = document.createElement("img");
    image.src = Books;
    image.alt = "Purple Hibiscus";
    image.style.width = "23%"; // Adjust the width to 20% of the box
    image.style.height = "auto";
    image.style.marginLeft = "20px"; // Add margin to create space between content and image

    // Append content container and image to the new box
    newBox.appendChild(contentContainer);
    newBox.appendChild(image);

    // Append new box to main content
    mainContent.appendChild(newBox);

    // New Section: We also recommend
    const recommendSection = document.createElement("section");
    recommendSection.style.width = "98%";
    recommendSection.style.marginTop = "20px";
    recommendSection.style.marginLeft = "32px";
    // Heading for the new section
    const recommendHeading = document.createElement("h2");
    recommendHeading.textContent = "We also recommend";
    recommendHeading.style.color = "black";
    recommendHeading.style.marginBottom = "20px";
    recommendHeading.style.fontSize = "20px";
    recommendHeading.style.fontWeight = "600px";
    recommendHeading.style.fontFamily = "Urbanist";

    // Append the heading to the new section
    recommendSection.appendChild(recommendHeading);

    // Grid container for the images
    const gridContainer = document.createElement("div");
    gridContainer.style.display = "grid";
    gridContainer.style.gridTemplateColumns = "repeat(4, 1fr)";
    gridContainer.style.gap = "20px";
    gridContainer.style.width = "97%";
    gridContainer.style.marginLeft = "-50px";

    // Function to create a book item
    const createBookItem = (bookId: string) => {
      const bookItem = document.createElement("div");
      bookItem.style.display = "flex";
      bookItem.style.flexDirection = "column";
      bookItem.style.alignItems = "center";
      bookItem.style.backgroundColor = "white";
      bookItem.style.borderRadius = "10px";
      bookItem.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.1)";
      bookItem.style.padding = "10px";
      bookItem.style.cursor = 'pointer';
      bookItem.onclick = () => {
        navigate(`/bookview/${bookId}`);
      };

      // Book image
      const bookImage = document.createElement("img");
      bookImage.src = Book;
      bookImage.alt = "Recommended Book";
      bookImage.style.width = "100%";
      bookImage.style.height = "auto";
      bookImage.style.borderRadius = "10px";

      // Book title
      const bookTitle = document.createElement("h3");
      bookTitle.textContent = "Doom of Aliens";
      bookTitle.style.color = "black";
      bookTitle.style.fontSize = "17.26px";
      bookTitle.style.fontWeight = "bold";
      bookTitle.style.marginTop = "10px";
      bookTitle.style.marginBottom = "5px";
      bookTitle.style.textAlign = "center";
      bookTitle.style.fontFamily = "Urbanist";

      // Book author
      const bookAuthor = document.createElement("p");
      bookAuthor.textContent = "K. S. Jenson";
      bookAuthor.style.color = "gray";
      bookAuthor.style.fontSize = "12px";
      bookAuthor.style.marginBottom = "5px";
      bookAuthor.style.textAlign = "center";

      // Append elements to book item
      bookItem.appendChild(bookImage);
      bookItem.appendChild(bookTitle);
      bookItem.appendChild(bookAuthor);

      return bookItem;
    };

    // Create and append 4 book items to the grid container
    for (let i = 0; i < 4; i++) {
      const bookItem = createBookItem(`book-${i + 1}`);
      const bookLink = document.createElement("a");
      bookLink.href = `/bookview/book-${i + 1}`;
      bookLink.appendChild(bookItem);
      gridContainer.appendChild(bookLink);
    }

    // Append the grid container to the new section
    recommendSection.appendChild(gridContainer);

    // Create another row of 4 book items
    const secondGridContainer = document.createElement("div");
    secondGridContainer.style.display = "grid";
    secondGridContainer.style.gridTemplateColumns = "repeat(4, 1fr)";
    secondGridContainer.style.gap = "20px";
    secondGridContainer.style.width = "97%";
    secondGridContainer.style.marginLeft = "-50px"; // Add margin to create space below the first row
    secondGridContainer.style.marginTop = "20px"; // Add margin to create space between the grids

    // Create and append another 4 book items to the second grid container
    for (let i = 0; i < 4; i++) {
      const bookItem = createBookItem(`book-${i + 5}`);
      const bookLink = document.createElement("a");
      bookLink.href = `/bookview/book-${i + 5}`;
      bookLink.appendChild(bookItem);
      secondGridContainer.appendChild(bookLink);
    }

    // Append the second grid container to the new section
    recommendSection.appendChild(secondGridContainer);

    // Append the new section to the main content
    mainContent.appendChild(recommendSection);

    // New Section: Recent Activity
    const recentActivitySection = document.createElement("section");
    recentActivitySection.style.position = "fixed";
    recentActivitySection.style.top = "100px"; // Below the navbar
    recentActivitySection.style.right = "0"; // Shift to the end of the screen
    recentActivitySection.style.width = "25%"; // Adjust the width as needed
    recentActivitySection.style.height = "calc(100vh - 60px)"; // Full height minus the navbar height
    recentActivitySection.style.overflowY = "scroll"; // Enable vertical scrolling
    recentActivitySection.style.backgroundColor = "white";
    recentActivitySection.style.padding = "10px";
    recentActivitySection.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.1)";
    recentActivitySection.style.zIndex = "1000"; // Ensure it stays on top of other elements

    // Custom scrollbar styles
    recentActivitySection.style.scrollbarWidth = "thin"; // For Firefox
    recentActivitySection.style.scrollbarColor = "transparent transparent"; // For Firefox

    // Heading for Recent Activity
    const recentActivityHeading = document.createElement("h2");
    recentActivityHeading.textContent = "Recent Activity";
    recentActivityHeading.style.position = "fixed";
    recentActivityHeading.style.top = "60px"; // Below the navbar
    recentActivityHeading.style.right = "0"; // Shift to the end of the screen
    recentActivityHeading.style.width = "25%"; // Adjust the width as needed
    recentActivityHeading.style.backgroundColor = "white";
    recentActivityHeading.style.padding = "10px";
    recentActivityHeading.style.zIndex = "1001"; // Ensure it stays on top of other elements
    recentActivityHeading.style.fontSize = "20px";
    recentActivityHeading.style.fontWeight = "600px";
    recentActivityHeading.style.fontFamily = "Urbanist";

    // Append the heading to the body
    document.body.appendChild(recentActivityHeading);

    // Recent Activity Item
    const recentActivityItem = document.createElement("div");
    recentActivityItem.style.display = "flex";
    recentActivityItem.style.flexDirection = "column";
    recentActivityItem.style.alignItems = "center";
    recentActivityItem.style.backgroundColor = "white";
    recentActivityItem.style.borderRadius = "10px";
    recentActivityItem.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.1)";
    recentActivityItem.style.padding = "10px";
    recentActivityItem.style.marginBottom = "20px";
    recentActivityItem.style.marginTop = "80px"; // Add margin to push content below the fixed heading

    // Recent Activity Image
    const recentActivityImage = document.createElement("img");
    recentActivityImage.src = Book;
    recentActivityImage.alt = "Doom of Aliens";
    recentActivityImage.style.width = "100%";
    recentActivityImage.style.height = "auto";
    recentActivityImage.style.borderRadius = "10px";

    // Recent Activity Title
    const recentActivityTitle = document.createElement("h3");
    recentActivityTitle.textContent = "Doom Of Aliens";
    recentActivityTitle.style.color = "black";
    recentActivityTitle.style.fontSize = "20px";
    recentActivityTitle.style.fontFamily = "Urbanist";
    recentActivityTitle.style.fontWeight = "600px";
    recentActivityTitle.style.marginTop = "10px";
    recentActivityTitle.style.marginBottom = "5px";
    recentActivityTitle.style.textAlign = "center";

    // Recent Activity Author
    const recentActivityAuthor = document.createElement("p");
    recentActivityAuthor.textContent = "by K. S. Jenson";
    recentActivityAuthor.style.color = "gray";
    recentActivityAuthor.style.fontSize = "16px";
    recentActivityAuthor.style.fontWeight = "500px";
    recentActivityAuthor.style.fontFamily = "Urbanist";
    recentActivityAuthor.style.marginBottom = "5px";
    recentActivityAuthor.style.textAlign = "center";

    // Recent Activity Description
    const recentActivityDescription = document.createElement("p");
    recentActivityDescription.textContent =
      "Gain access to a wide range of practice tests tailored to help manage your time effectively, and boost your confidence before the big day.";
    recentActivityDescription.style.color = "black";
    recentActivityDescription.style.fontSize = "10px";
    recentActivityDescription.style.fontFamily = "Urbanist";
    recentActivityDescription.style.fontWeight = "500px";
    recentActivityDescription.style.marginBottom = "10px";
    recentActivityDescription.style.textAlign = "center";

    // Recent Activity Button
    const recentActivityButton = document.createElement("button");
    recentActivityButton.textContent = "Continue Reading Chapter 3, Pg 15";
    recentActivityButton.style.padding = "10px 20px";
    recentActivityButton.style.border = "none";
    recentActivityButton.style.borderRadius = "5px";
    recentActivityButton.style.backgroundColor = "skyblue";
    recentActivityButton.style.color = "blue";
    recentActivityButton.style.cursor = "pointer";
    recentActivityButton.style.fontSize = "14px";
    recentActivityButton.style.fontFamily = "Urbanist";
    recentActivityButton.style.fontWeight = "700px";

    // Append elements to recent activity item
    recentActivityItem.appendChild(recentActivityImage);
    recentActivityItem.appendChild(recentActivityTitle);
    recentActivityItem.appendChild(recentActivityAuthor);
    recentActivityItem.appendChild(recentActivityDescription);
    recentActivityItem.appendChild(recentActivityButton);

    // Append recent activity item to recent activity section
    recentActivitySection.appendChild(recentActivityItem);

    // Append recent activity section to the body
    document.body.appendChild(recentActivitySection);

    // Append main content to container
    container.appendChild(mainContent);

    // Append the whole container to body
    document.body.appendChild(topNavbar);
    document.body.appendChild(container);

    return () => {
      document.body.removeChild(topNavbar);
      document.body.removeChild(container);
    };
  }, [navigate]);

  return (
    <div>
      <Sidebar /> {/* Use Sidebar */}
      <Link to="/">Back to Home</Link>
      <div>{/* E-books content goes here */}</div>
    </div>
  );
};

export default EBooksComponent;

