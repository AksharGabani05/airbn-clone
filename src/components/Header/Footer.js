import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
      
        <p style={styles.text}>
          Create ❤️ by <strong>Akshar Gabani</strong>. {" "}
          <a
            href="https://github.com/AksharGabani05"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.link}
          >
            GitHub
          </a>
        </p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: "#282c34",
    color: "#ffffff",
    textAlign: "center",
    padding: "1.5rem",
    marginTop: "auto",
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
  },
  text: {
    fontSize: "1rem",
    lineHeight: "1.5",
    margin: 0,
  },
  link: {
    color: "#61dafb",
    textDecoration: "none",
    marginLeft: "0.5rem",
  },
};

export default Footer;
