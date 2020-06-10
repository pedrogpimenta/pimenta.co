import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle, siteSubtitle, socialLinks }) => (

  <header
    className={`px-4 sm:px-8 mt-6 mb-8 sm:col-span-2 xl:col-span-3`}
  >
    <div
    >
      <h1
        className={`text-2xl font-black text-textPrimary dark:text-gray-100`}>
        {siteTitle}
      </h1>
      <div
        className={`text-textSecondary`}>
        {siteSubtitle}
      </div>
      <ul
        className={`pt-4`}
      >
        {socialLinks.map(link => {
          return (
            <li
              key={link.id}
              className={`inline-block pr-4`}
            >
              <a
                href={link.URL}
                title={link.Text}
                target={link.Target}
                
              >
                <img
                  src={link.Icon.publicURL}
                  alt={link.Text}
                  className={`icon-link`}
                />
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  siteSubtitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
  siteSubtitle: ``,
}

export default Header
