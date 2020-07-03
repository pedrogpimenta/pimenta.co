import PropTypes from "prop-types"
import React from "react"
import ReactMarkdown from "react-markdown"

const aboutMe = ({ aboutMeTitle, aboutMeContent, mySkillsTitle, aboutMeSkills }) => (
  <section className={`section`}>
    <div className={`section__content`}>
      <div className={`lg:flex`}>
        <div className={`lg:flex-1 lg:mr-6`}>
          <h1 className={`leading-none font-semibold text-2xl text-black dark:text-white mb-6 sm:mb-8`}>
            {aboutMeTitle}
          </h1>
          <ReactMarkdown
            className={`text-textPrimary dark:text-gray-100`}
            source={aboutMeContent}
          />
        </div>
        <div className={`lg:flex-1 lg:ml-6 mt-16 lg:mt-0`}>
          <h1 className={`leading-none font-semibold text-2xl text-black dark:text-white mb-6 sm:mb-8`}>
            {mySkillsTitle}
          </h1>
          <ul>
            {aboutMeSkills.map(skill => {
              return (
                <li key={skill.id}
                  className={`
                    inline-block
                    bg-textPrimary
                    dark:bg-gray-100
                    rounded-full
                    px-2
                    text-white
                    dark:text-textPrimary
                    mr-1
                    mb-2
                `}>
                  {skill.Skill}
                </li>
              )
            })}
          </ul>
        </div>
      </div>
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
