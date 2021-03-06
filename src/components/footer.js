import React from "react"
import Nav from "./nav"

const Footer = () => (
  <>
    <footer>
      <p>
        Newcrossities is a weary travellers’ guide to the new curiosities of
        South London, New Cross, Deptford, and beyond:
      </p>
      <ul>
        <li>Curated and opinionated.</li>
        <li>
          <strong>Underground, weird and funny.</strong>
        </li>
        <li>Completely incomplete</li>
      </ul>
      <Nav />
    </footer>

    <div className="cta">
      <p>
        <a href="https://www.louiechristie.com/blog/contact/">
          Want a website like this one?
        </a>
        <br />
        <small>* Other styles/sizes/colors are available</small>
      </p>
      <p className="copyright">
          <small>© {new Date().getFullYear()} Newcrossities</small>
      </p>
    </div>
  </>
)

export default Footer
