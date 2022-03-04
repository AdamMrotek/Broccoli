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
              <li className="listItem">Git repository</li>
              <li className="listItem">Profiles</li>
              <li className="listItem">Carrers</li>
            </ul>
          </div>
        </footer>
      </div>
    </div>
  );
}
export default Footer;
