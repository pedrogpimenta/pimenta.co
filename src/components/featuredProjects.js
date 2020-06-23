import PropTypes from "prop-types"
import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Flickity from "react-flickity-component"
import "flickity/css/flickity.css"
import slugify from "slugify"

const FeaturedProjects = ({ sectionTitle, projects }) => {
  const data = useStaticQuery(graphql`
    query Projects {
      allStrapiProjects {
        nodes {
          id,
          strapiId,
          Published,
          Title,
          Description,
          FeaturedImage {
            publicURL,
          }
        }
      }
    }
  `)
  
  const flickityShouldDrag = () => {
    if (typeof window !== `undefined`) {
      const projectsLength = projects.length
      const projectWidth = 288
      const flickityWidth = (projectWidth * projectsLength) + (8 * 2 * projectsLength) + (8 * 2)
      const viewportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  
      return flickityWidth > viewportWidth
    } else {
      return true
    }
  }

  const flickityOptions = {
    draggable: flickityShouldDrag(),
    freeScroll: false,
    contain: true,
    groupCells: true,
    pageDots: false,
    prevNextButtons: false,
    selectedAttraction: 0.2,
    friction: 1,
    // watchCSS: true,
    resize: true,
    cellAlign: 'left',
  }

  return (
    <section className={`section sm:col-span-2 xl:col-span-3 overflow-hidden`}>
      <h1 className={`section__title`}>
        {sectionTitle}
      </h1>
      <div>
        <Flickity
          className={'carousel'} // default ''
          elementType={'div'} // default 'div'
          options={flickityOptions} // takes flickity options {}
          disableImagesLoaded={false} // default false
          reloadOnUpdate={true} // default false
          static // default false
        >
          {projects.map((project) => {
            const thisProjectIndex = data.allStrapiProjects.nodes.findIndex(thisProject => thisProject.strapiId === project)
            const projectData = data.allStrapiProjects.nodes[thisProjectIndex]

            return (
              <div
                key={projectData.id}
                className={`box-content inline-block w-64 xxxs:w-72 sm:w-84 pl-4 last:pr-4 sm:pl-8 sm:last:pr-8`}
                >
                <Link
                  to={`/project/${slugify(projectData.Title)}`}
                  className={`inline-block transition-margin duration-300 ease-out hover:-mt-2`}
                >
                  <img
                    src={projectData.FeaturedImage.publicURL}
                    alt={`${projectData.Title} logo`}
                    className={`shadow-project-m hover:shadow-project-xl transition-all duration-300 ease-out hover:-mb-1 rounded-lg overflow-hidden`}
                  />
                  <div className={`
                    font-medium leading-tight mx-2 sm:mx-4 mt-4 text-textPrimary dark:text-gray-100
                  `}>
                    {projectData.Description}
                  </div>
                </Link>
              </div>
            )
          })}
        </Flickity>
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
