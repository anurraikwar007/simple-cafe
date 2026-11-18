
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Container from "../../ui/Container";

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <div className="footer__top">
          <div>
            <span className="section-label">
              A little pause, a lot of joy
            </span>

            <h2 className="footer__title">
              Good coffee.
              <br />
              Good company.
            </h2>
          </div>

          <Link to="/contact" className="footer__visit">
            Come say hello
            <ArrowUpRight size={18} />
          </Link>
        </div>

        <div className="footer__bottom">
          <Link to="/" className="footer__brand">
            SIMPLE CAFÉ.
          </Link>

          <p>
            © {new Date().getFullYear()} Simple Café.
            All rights reserved.
          </p>

          <div className="footer__socials">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram ↗
            </a>

            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook ↗
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
