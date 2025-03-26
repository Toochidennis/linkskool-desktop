import React from "react";
import { Link } from 'react-router-dom';
import Book from "../../assets/img/book 1 3.png";
import Books from "../../assets/img/book 2 2.png";

const EBooksComponent: React.FC = () => {
  

  const createBookItem = (index: number) => (
    <Link to={`/bookview/book-${index + 1}`} key={index}>
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "white",
        borderRadius: "10px",
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
        padding: "10px",
        cursor: 'pointer'
      }}>
        <img src={Book} alt="Recommended Book" style={{
          width: "100%",
          height: "auto",
          borderRadius: "10px"
        }} />
        <h3 style={{
          color: "black",
          fontSize: "17.26px",
          fontWeight: "bold",
          marginTop: "10px",
          marginBottom: "5px",
          textAlign: "center",
          fontFamily: "Urbanist"
        }}>Doom of Aliens</h3>
        <p style={{
          color: "gray",
          fontSize: "12px",
          marginBottom: "5px",
          textAlign: "center"
        }}>K. S. Jenson</p>
      </div>
    </Link>
  );

  return (
    <div style={{ display: "flex", flexDirection: "column", marginLeft: "100px", marginTop: "60px" }}>
      {/* Top Navbar (Search Bar) */}
      <div style={{
        position: "fixed",
        top: 0,
        left: "250px",
        right: 0,
        height: "60px",
        backgroundColor: "white",
        display: "flex",
        alignItems: "center",
        padding: "0 20px",
        width: "57%"
      }}>
        <input
          type="text"
          placeholder="Search here..."
          style={{
            padding: "10px",
            border: "1px solid #ddd",
            borderRadius: "5px",
            width: "100%",
            maxWidth: "none",
            color: "black",
            backgroundColor: "white"
          }}
        />
      </div>

      {/* Main Content */}
      <div style={{
        flex: 1,
        padding: "20px",
        backgroundColor: "white",
        minHeight: "100vh",
        width: "73%",
        marginLeft: "100px",
        overflowY: "scroll",
        scrollbarWidth: "thin",
        scrollbarColor: "transparent transparent"
      }}>
        {/* New Box (Content Box) */}
        <div style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          width: "95%",
          height: "auto",
          backgroundColor: "#f0f0f0",
          borderRadius: "10px",
          boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
          marginBottom: "20px",
          padding: "20px",
          marginLeft: "-20px"
        }}>
          <div style={{
            display: "flex",
            flexDirection: "column",
            width: "80%"
          }}>
            <h2 style={{
              color: "#1A1A1A",
              marginBottom: "10px",
              fontSize: "24px",
              fontWeight: "bold",
              fontFamily: "Urbanist"
            }}>Purple Hibiscus: Kambili and her brother Ahanna</h2>
            <p style={{
              color: "#5b5b5b",
              marginBottom: "10px",
              fontFamily: "Urbanist",
              fontWeight: 500,
              lineHeight: "16px"
            }}>
              Gain access to a wide range of practice tests tailored to help manage your time effectively, and boost your confidence before the big day. Gain access to a wide range of practice tests tailored to help manage your time effectively, and boost your confidence before the big day.
            </p>
            <button style={{
              padding: "10px 20px",
              border: "none",
              borderRadius: "5px",
              backgroundColor: "#9A3C94",
              color: "white",
              cursor: "pointer",
              width: "130px",
              fontSize: "14px",
              fontFamily: "Urbanist",
              fontWeight: 500
            }}>Start Reading</button>
          </div>
          <img src={Books} alt="Purple Hibiscus" style={{
            width: "23%",
            height: "auto",
            marginLeft: "20px"
          }} />
        </div>

        {/* We also recommend section */}
        <section style={{ width: "98%", marginTop: "20px", marginLeft: "32px" }}>
          <h2 style={{
            color: "black",
            marginBottom: "20px",
            fontSize: "20px",
            fontWeight: 600,
            fontFamily: "Urbanist",
            textAlign: "left"
          }}>We also recommend</h2>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "20px",
            width: "97%",
            marginLeft: "-50px"
          }}>
            {[...Array(4)].map((_, i) => createBookItem(i))}
          </div>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "20px",
            width: "97%",
            marginLeft: "-50px",
            marginTop: "20px"
          }}>
            {[...Array(4)].map((_, i) => createBookItem(i + 4))}
          </div>
        </section>
      </div>

      {/* Recent Activity Section */}
      <section style={{
        position: "fixed",
        top: "100px",
        right: 0,
        width: "25%",
        height: "calc(100vh - 60px)",
        overflowY: "scroll",
        backgroundColor: "white",
        padding: "10px",
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
        zIndex: 1000,
        scrollbarWidth: "thin",
        scrollbarColor: "transparent transparent"
      }}>
        <h2 style={{
          position: "fixed",
          top: "60px",
          right: 0,
          width: "25%",
          backgroundColor: "white",
          padding: "10px",
          zIndex: 1001,
          fontSize: "20px",
          fontWeight: 600,
          fontFamily: "Urbanist"
        }}>Recent Activity</h2>
        <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "white",
          borderRadius: "10px",
          boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
          padding: "10px",
          marginBottom: "20px",
          marginTop: "80px"
        }}>
          <img src={Book} alt="Doom of Aliens" style={{
            width: "100%",
            height: "auto",
            borderRadius: "10px"
          }} />
          <h3 style={{
            color: "black",
            fontSize: "20px",
            fontFamily: "Urbanist",
            fontWeight: 600,
            marginTop: "10px",
            marginBottom: "5px",
            textAlign: "center"
          }}>Doom Of Aliens</h3>
          <p style={{
            color: "gray",
            fontSize: "16px",
            fontWeight: 500,
            fontFamily: "Urbanist",
            marginBottom: "5px",
            textAlign: "center"
          }}>by K. S. Jenson</p>
          <p style={{
            color: "black",
            fontSize: "10px",
            fontFamily: "Urbanist",
            fontWeight: 500,
            marginBottom: "10px",
            textAlign: "center"
          }}>
            Gain access to a wide range of practice tests tailored to help manage your time effectively, and boost your confidence before the big day.
          </p>
          <button style={{
            padding: "10px 20px",
            border: "none",
            borderRadius: "5px",
            backgroundColor: "skyblue",
            color: "blue",
            cursor: "pointer",
            fontSize: "14px",
            fontFamily: "Urbanist",
            fontWeight: 700
          }}>Continue Reading Chapter 3, Pg 15</button>
        </div>
      </section>
    </div>
  );
};

export default EBooksComponent;