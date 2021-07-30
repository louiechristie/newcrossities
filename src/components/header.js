import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import Menu from "./Menu"
import ToggleIcon from "../assets/svg/toggle.inline.svg"

const Header = ({ pageContext, toggleBackdrop, ...props }) => {
  const { wp } = useStaticQuery(graphql`
    {
      wp {
        generalSettings {
          title
          description
        }
      }
    }
  `)
  return (
    <header id="site-header" className="header-footer-group" role="banner">
      <div className="header-inner section-inner">
        
        <div className="header-titles-wrapper">
        
          <div className="header-titles">
            
            <h1 className="site-title">
            <Link to="/">
          <svg
            width="50"
            className="logo"
            viewBox="0 0 350 350"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Newcrossities Icon</title>
            <desc>Newcrossities Icon Copyright Louie Christie 2020</desc>
            <path
              d="m107.5,116.453125c0,0 -2,0 -6,0c0,0 -1,0 -1,0c0,2 0,3 0,18c0,11 0,20 0,33c0,8 1.514145,15.447617 8,22c7.478203,7.554901 17.541153,15.822922 26,20c7.660858,3.78302 18.771866,8.302063 38,11c13.899506,1.950272 28.007751,2.465897 42,2c15.024963,-0.500275 26,-6 32,-11c6,-5 10.270905,-9.90358 13,-18c3.334808,-9.893387 6.394775,-24.03476 5,-52c-1.001251,-20.074799 -8.146942,-37.487137 -17,-52c-8.23407,-13.498146 -16.335373,-22.817039 -26,-30c-12.251221,-9.105366 -26.714264,-15.186169 -41,-18c-8.884674,-1.749996 -27,-2 -40,-2c-11,0 -20.672867,2.280266 -25,7c-2.436577,2.657646 -4.282661,6.829708 -6,10c-3.627426,6.6964 -5.297714,13.391548 -10,21c-2.628654,4.253258 -6.371346,9.746742 -9,14c-1.175568,1.902115 -1.617317,3.076118 -2,4c-0.541199,1.306564 -2,2 -2,3c0,0 0,1 0,1c0,1 0,1 0,1c0,0 0,1 0,1l0,0"
              id="svg_25"
              strokeWidth="11.5"
              stroke="#FFFFFF"
              fill="none"
            />
            <path
              d="m126.5,95.453125c0,0 0.997925,-1.98954 6,-1c3.537003,0.699707 7.938126,4.078583 13,8c11.857956,9.186333 21.498215,17.648239 42,33c9.770859,7.316437 18.445465,15.447983 26,22c4.273499,3.706375 5.292892,5.292892 6,6c0.707108,0.707108 0.292892,0.292892 1,1c0.707108,0.707108 -0.285873,1.21167 2,4c2.689789,3.281006 5,6 6,7c1,1 1,1 1,1l0,-2l0,-2"
              id="svg_26"
              strokeWidth="11.5"
              stroke="#FFFFFF"
              fill="none"
            />
            <path
              d="m214.5,96.453125c0,0 0.964478,1.504242 -2,6c-1.557022,2.36129 -3.565033,7.182045 -5,10c-3.903549,7.665657 -6.346191,9.70546 -8,12c-1.307449,1.813995 -2.080521,3.486916 -4,6c-2.188553,2.865356 -4,4 -6,6c-1,1 -1.794861,2.116486 -3,4c-3.450989,5.393585 -10,10 -15,15c-4,4 -10,10 -15,15c-4,4 -7.723984,7.222733 -11,11c-1.853195,2.136749 -3,3 -3,3l0,1"
              id="svg_27"
              strokeWidth="11.5"
              stroke="#FFFFFF"
              fill="none"
            />
            <path
              d="m169.5,223.453125c0,0 0,2 0,16c0,7 0,21 0,42c0,11 -0.689758,25.034058 0,32c0.502441,5.074219 2.458801,7.693451 3,9c0.38269,0.923889 -0.498703,-3.010376 0,-15c1.00087,-24.062378 5.273376,-48.960876 7,-62c1.188736,-8.97702 2,-14 2,-15c0,0 0.292892,0.707108 1,0c0.707108,-0.707108 0,-1 0,-1c0,-1 1,-2 1,-3c0,-1 0.292892,-0.292892 1,-1c0.707108,-0.707108 0,-1 0,0l-1,3"
              id="svg_29"
              strokeWidth="11.5"
              stroke="#FFFFFF"
              fill="none"
            />
          </svg>
        </Link>
              <Link
                to="/"
                dangerouslySetInnerHTML={{ __html: wp.generalSettings.title }}
              />
            </h1>
            <div
              className="site-description"
              dangerouslySetInnerHTML={{
                __html: wp.generalSettings.description,
              }}
            />
          </div>

          <button
            className="toggle nav-toggle mobile-nav-toggle"
            data-toggle-target=".menu-modal"
            data-toggle-body-class="showing-menu-modal"
            aria-expanded="false"
            data-set-focus=".close-nav-toggle"
            onClick={(e) => toggleBackdrop(e, true)}
          >
            <span className="toggle-inner">
              <span className="toggle-icon">
                <ToggleIcon />
              </span>
              <span className="toggle-text">Menu</span>
            </span>
          </button>
        </div>

        <div className="header-navigation-wrapper">
          <Menu />

          <div className="header-toggles hide-no-js">
            <div className="toggle-wrapper nav-toggle-wrapper has-expanded-menu">
              <button
                className="toggle nav-toggle desktop-nav-toggle"
                data-toggle-target=".menu-modal"
                data-toggle-body-class="showing-menu-modal"
                aria-expanded="false"
                data-set-focus=".close-nav-toggle"
                onClick={(e) => toggleBackdrop(e, true)}
              >
                <span className="toggle-inner">
                  <span className="toggle-text">Menu</span>
                  <span className="toggle-icon">
                    <ToggleIcon />
                  </span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
