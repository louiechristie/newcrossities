import React from "react"
import { Link } from "gatsby"

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
      © {new Date().getFullYear()} Newcrossities -{` `}
      <Link
        to="/about/"
        style={{
          color: `white`,
        }}
      >
        About
      </Link>
    </footer>

    <p class="cta">
      <a href="https://blog.louiechristie.com/contact/">
        Want website like this one? *
      </a>
      <br />
      <small>(*other colors/styles are available)</small>
    </p>
  </>
)

export default Footer
