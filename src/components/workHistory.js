import PropTypes from "prop-types"
import React from "react"

const WorkHistory = ({ workHistoryTitle, jobs }) => (
  <section className={`lg:mr-6`}>
    <h1 className={`leading-none font-semibold text-2xl text-black dark:text-white mb-6 sm:mb-8`}>
      {workHistoryTitle}
    </h1>
    <ul>
      {jobs.map(job => {
        return (
          <li key={job.id} className={`my-6 first:mt-2`}>
            <div className={`tracking-wide font-bold text-sm text-textSecondary`}>
              {job.YearsWorked}
            </div>
            <div className={`leading-sm font-bold text-lg text-textPrimary dark:text-gray-100`}>
              {job.CompanyName}
            </div>
            <div className={`text-textSecondary`}>
              {job.Position}
            </div>
          </li>
        )
      })}
    </ul>
    <a
      className={`link font-semibold text-textPrimary dark:text-gray-100`}
      href={`https://www.linkedin.com/in/pedrogpimenta/`}
      title={`LinkedIn Profile`}
      target={`_blank`}
    >
      <span className={`text underline`}>
        For more work info, visit LinkedIn.com
      </span>
    </a>
  </section>
)

WorkHistory.propTypes = {
  siteTitle: PropTypes.string,
  siteSubtitle: PropTypes.string,
}

WorkHistory.defaultProps = {
  siteTitle: ``,
  siteSubtitle: ``,
}

export default WorkHistory
