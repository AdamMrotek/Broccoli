import "./Footer.css";
import LogoBox from "../Components/LogoBox.js";
function Footer() {
  return (
    <div className="footer-wrap">
      <div className="footer-background">
        <footer className="footer">
          <div className="footer__text">
            <LogoBox></LogoBox>
          </div>
          <div className="footer__menu">
            <ul>
              <li className="listItem">
                <a
                  className="footer__list-item"
                  rel="noopener noreferrer"
                  href="https://github.com/AdamMrotek/Broccoli"
                  target="_blank"
                >
                  Git repository
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </div>
  );
}
export default Footer;
