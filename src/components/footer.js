import React from "react"
import { Link } from "gatsby"
import moment from "moment"

const Footer = ({}) => {
  return (
    <footer id="site-footer" role="contentinfo" className="header-footer-group">
      <div className="section-inner">
        <div className="footer-credits">
          <p className="footer-copyright">© {moment().format("YYYY")} </p>
          <p>
            <a
              className="powered-by-wordpress"
              href="https://www.louiechristie.com"
            >
              By Louie Christie
            </a>
          </p>
        </div>

        <a className="to-the-top" href="#site-header">
          <span className="to-the-top-long">
            To the top{" "}
            <span className="arrow" aria-hidden="true">
              ↑
            </span>
          </span>
          <span className="to-the-top-short">
            Up{" "}
            <span className="arrow" aria-hidden="true">
              ↑
            </span>
          </span>
        </a>
      </div>
    </footer>
  )
}

export default Footer
