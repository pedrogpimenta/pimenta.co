import PropTypes from "prop-types"
import React from "react"
import ReactMarkdown from "react-markdown"

const aboutMe = ({ aboutMeTitle, aboutMeContent, aboutMeSkills }) => (
  <section className={`section`}>
    <h1 className={`section__title`}>
      {aboutMeTitle}
    </h1>
    <div className={`section__content`}>
      <ReactMarkdown
        className={`text-gray-800`}
        source={aboutMeContent}
      />
      <ul>
        {aboutMeSkills.map(skill => {
          return (
            <li key={skill.id}
              className={`
                inline-block
                bg-gray-800
                rounded-full
                px-2
                text-white
                mr-1
                mb-2
            `}>
              {skill.Skill}
            </li>
          )
        })}
      </ul>
    </div>
  </section>
)

aboutMe.propTypes = {
  siteTitle: PropTypes.string,
  siteSubtitle: PropTypes.string,
}

aboutMe.defaultProps = {
  siteTitle: ``,
  siteSubtitle: ``,
}

export default aboutMe
