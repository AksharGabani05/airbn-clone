import { useState, useEffect } from "react";
import "./App.css";
import { list, list2 } from "./assets/cards-list";
import Cards from "./components/Cards";
import Filter from "./components/Filter";
import Header from "./components/Header";
import Footer from "./components/Header/Footer";

function App() {
  const [loading, setLoading] = useState(true); // Add a loading state
  const [selectedFilter, setSelectedFilter] = useState(0);

  useEffect(() => {
    // Simulate loading process
    const timer = setTimeout(() => {
      setLoading(false); // Set loading to false after 2 seconds
    }, 3000);

    return () => clearTimeout(timer); // Cleanup timer
  }, []);

  if (loading) {
    // Show the loader while the app is loading
    return (
      <div style={styles.loaderContainer}>
        <div style={styles.loader}></div>
      </div>
    );
  }

  return (
    <div className="App">
      <Header />
      <Filter
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
      />
      {selectedFilter === 0 ? <Cards list={list} /> : <Cards list={list2} />}
      <Footer />
    </div>
  );
}

// Add styles for the loader
const styles = {
  loaderContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#282c34",
  },
  loader: {
    border: "8px solid red", // Light gray
    borderTop: "8px solid #61dafb", // Blue
    borderRadius: "50%",
    width: "80px",
    height: "80px",
    animation: "spin 1.5s linear infinite",
  },
};

// Add keyframes for loader animation
const styleSheet = document.styleSheets[0];
const keyframes = `
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}`;
styleSheet.insertRule(keyframes, styleSheet.cssRules.length);

export default App;
