import "./Footer.css";
function Footer() {
  return (
    <footer className="footer">
      <div className="footerContent container-fluid">
        <div className="row">
          <div className="col-md-4 col-sm-4">
            <h5>CUSTOMER SERVICES</h5>
            <ul>
              <li>
                <a href="#">Help & Contact Us</a>
              </li>
              <li>
                <a href="#"> Returns & Refunds</a>
              </li>
              <li>
                <a href="#"> Online Stores</a>
              </li>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
            </ul>
          </div>
          <div className="col-md-4 col-sm-4">
            <h5>COMPANY</h5>
            <ul>
              <li>
                <a href="#">What We Do</a>
              </li>
              <li>
                <a href="#">Available Services</a>
              </li>
              <li>
                <a href="#"> Online Stores</a>
              </li>
              <li>
                <a href="#">FAQs</a>
              </li>
            </ul>
          </div>
          <div className="col-md-4 col-sm-4">
            <h5>SOCIAL MEDIA</h5>
            <ul>
              <li>
                <a href="#">Twitter</a>
              </li>
              <li>
                <a href="#"> Instagram</a>
              </li>
              <li>
                <a href="#"> Facebook</a>
              </li>
              <li>
                <a href="#">Pinterest</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
