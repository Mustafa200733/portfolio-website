const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-inner">
        <p className="footer-brand">Mustafa Okur</p>
        <p className="footer-copy">
          Frontend Developer in opleiding . {year}
        </p>
        <div className="footer-links">
          <a href="mailto:Mokur4201@gmail.com">Email</a>
          <a
            href="https://github.com/Mustafa200733"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/mustafa-okur-aab40438a/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};
 
export default Footer;
