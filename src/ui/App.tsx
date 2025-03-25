import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./explore/components/layout";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import NavbarComponent from "./explore/components/home";
import EBooksComponent from "./explore/components/e-books";
import VideosComponent from "./explore/components/Videos"; // Import VideosComponent
import Bookview from "./explore/components/Bookview"; // Import Bookview

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* <Route path="/" element={<NavbarComponent />} /> */}
          <Route path="/e-books" element={<EBooksComponent />} />
          <Route path="/videos" element={<VideosComponent />} /> {/* Add route for VideosComponent */}
          <Route path="/bookview/:bookId" element={<Bookview />} /> {/* Add route for Bookview */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
