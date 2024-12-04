import { useState, useEffect } from "react";
import "./App.css";
import { list } from "./assets/cards-list";
import Cards from "./components/Cards";
import Header from "./components/Header";
import Footer from "./components/Header/Footer";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); 
    }, 3000);

    return () => clearTimeout(timer); 
  }, []);

  if (loading) {
    
    return (
      <div style={styles.loaderContainer}>
        <div style={styles.loader}></div>
      </div>
    );
  }

  return (
    <div className="App">
      <Header />
      <Cards list={list} />
      <Footer />
    </div>
  );
}


const styles = {
  loaderContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#282c34",
  },
  loader: {
    border: "8px solid red", 
    borderTop: "8px solid #61dafb", 
    borderRadius: "50%",
    width: "80px",
    height: "80px",
    animation: "spin 1.5s linear infinite",
  },
};

const styleSheet = document.styleSheets[0];
const keyframes = `
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}`;
styleSheet.insertRule(keyframes, styleSheet.cssRules.length);

export default App;
