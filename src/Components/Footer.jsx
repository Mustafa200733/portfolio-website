const Footer = ({ image }) => {
  const imageSrc = `${import.meta.env.BASE_URL}${String(image).replace(
    /^\//,
    ""
  )}`;

  return (
    <footer className="footer">
      <img className="OnderAfbeelding" src={imageSrc} alt="" />
    </footer>
  );
};
 
export default Footer;
