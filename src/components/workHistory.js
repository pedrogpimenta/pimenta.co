import PropTypes from "prop-types"
import React from "react"

const WorkHistory = ({ workHistoryTitle, jobs }) => (
  <section className={`section`}>
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
              <div className={`leading-sm font-bold text-2xl text-gray-800`}>
                {job.CompanyName}
              </div>
              <div className={``}>
                {job.Position}
              </div>
            </li>
          )
        })}
      </ul>
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
