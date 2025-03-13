import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "./explore/components/home";
import EBooksComponent from "./explore/components/e-books";
import VideosComponent from "./explore/components/Videos"; // Import VideosComponent

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<NavbarComponent />} />
        <Route path="/e-books" element={<EBooksComponent />} />
        <Route path="/videos" element={<VideosComponent />} />{" "}
        {/* Add route for VideosComponent */}
      </Routes>
    </Router>
  );
}

export default App;
