import PropTypes from "prop-types"
import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Flickity from "react-flickity-component"
import "flickity/css/flickity.css"
import slugify from "slugify"

const FeaturedProjects = ({ sectionTitle }) => {
  const data = useStaticQuery(graphql`
    query Projects {
      allStrapiProjects {
        nodes {
          id,
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
      const projectsLength = data.allStrapiProjects.nodes.length
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
    <section className={`section sm:col-span-2 xl:col-span-3`}>
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
          {data.allStrapiProjects.nodes.map((project, index) => {
            return (
              <div
                key={project.id}
                className={`box-content inline-block w-64 xxxs:w-72 sm:w-84 pl-4 last:pr-4 sm:pl-8 sm:last:pr-8 mt-4`}
                >
                <Link to={`/project/${slugify(project.Title)}`}>
                  <img
                    src={project.FeaturedImage.publicURL}
                    alt={`${project.Title} logo`}
                    className={`rounded-lg overflow-hidden`}
                    style={{
                      boxShadow: '0px 8px 18px rgba(0, 0, 0, 0.16), 0px 1px 4px rgba(0, 0, 0, 0.08)'
                    }}
                  />
                  <div className={`
                    text-sm font-medium leading-tight mx-2 sm:mx-4 mt-4
                  `}>
                    {project.Description}
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
