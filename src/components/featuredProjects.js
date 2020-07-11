import PropTypes from "prop-types"
import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import slugify from "slugify"

const FeaturedProjects = ({ sectionTitle, projects }) => {
  const data = useStaticQuery(graphql`
    query Projects {
      allStrapiProjects {
        nodes {
          id,
          strapiId,
          Title,
          Description,
          FeaturedImage {
            publicURL,
          }
        }
      }
    }
  `)
  
  return (
    <section className={`section overflow-hidden`}>
      <h1 className={`section__title`}>
        {sectionTitle}
      </h1>
      <div
        className={`flex flex-wrap sm:mx-6 lg:mx-16`}
      >
        {projects.map((project) => {
          const thisProjectIndex = data.allStrapiProjects.nodes.findIndex(thisProject => thisProject.strapiId === project.id)
          const projectData = data.allStrapiProjects.nodes[thisProjectIndex]

          return (
            <div
              key={projectData.id}
              className={`featured-project box-border w-1/2 sm:w-1/3 md:w-1/4 xl:w-64 px-2 pb-4`}
              >
              <Link
                to={`/project/${slugify(projectData.Title)}`}
                className={`inline-block transition-margin duration-300 ease-out`}
              >
                <img
                  src={projectData.FeaturedImage.publicURL}
                  alt={`${projectData.Title} logo`}
                  className={`shadow-project-m hover:shadow-project-xl transition-all duration-300 ease-out rounded-lg overflow-hidden`}
                />
                <div className={`
                  text text-sm sm:text-md font-medium leading-tight mx-2 sm:mx-4 mt-2 text-textPrimary dark:text-gray-100
                `}>
                  {projectData.Description}
                </div>
              </Link>
            </div>
          )
        })}
      </div>
    </section>
  )
}

FeaturedProjects.propTypes = {
  siteTitle: PropTypes.string,
  siteSubtitle: PropTypes.string,
}

FeaturedProjects.defaultProps = {
  siteTitle: ``,
  siteSubtitle: ``,
}

export default FeaturedProjects
