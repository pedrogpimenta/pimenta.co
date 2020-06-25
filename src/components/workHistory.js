import PropTypes from "prop-types"
import React from "react"

const WorkHistory = ({ workHistoryTitle, jobs }) => (
  <section className={`section sm:col-span-1 xl:col-span-1`}>
    <h1 className={`section__title`}>
      {workHistoryTitle}
    </h1>
    <div className={`section__content`}>
      <ul>
        {jobs.map(job => {
          return (
            <li key={job.id} className={`my-6 first:mt-2`}>
              <div className={`tracking-wide font-bold text-sm text-textSecondary`}>
                {job.YearsWorked}
              </div>
              <div className={`leading-sm font-bold text-2xl text-textPrimary dark:text-gray-100`}>
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
        <span className={`text`}>
          For more work info, visit LinkedIn.com
        </span>
      </a>
    </div>
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
