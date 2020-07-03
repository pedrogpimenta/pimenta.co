/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import FeaturedProjects from "./featuredProjects"
import AboutMe from "./aboutMe"
import WorkHistory from "./workHistory"
import Blog from "./blog"

import "typeface-ibm-plex-sans"
import "../assets/main.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query StrapiHomeQuery {
      strapiHome {
        SiteTitle,
        SiteDescription,
        Links {
          Text,
          URL,
          id,
          Target,
          Icon {
            publicURL,
          },
        },
        ProjectsTitle,
        projects {
          id
        },
        AboutMeTitle,
        AboutMeContent,
        MySkillsTitle,
        MySkills {
          id,
          Skill,
        },
        WorkHistoryTitle,
        Job {
          id,
          CompanyName,
          Position,
          YearsWorked,
        },
        BlogTitle,
        Posts {
          PostTitle,
          PostDescription,
          PostURL
        }
      },
    },
  `)

  return (
    <div className={`main-wrapper relative h-full py-6 sm:py-10`}>
      <Header
        siteTitle={data.strapiHome.SiteTitle}
        siteSubtitle={data.strapiHome.SiteDescription}
        socialLinks={data.strapiHome.Links}
      />
      {children}
      <FeaturedProjects
        sectionTitle={data.strapiHome.ProjectsTitle}
        projects={data.strapiHome.projects}
      />
      <AboutMe
        aboutMeTitle={data.strapiHome.AboutMeTitle}
        aboutMeContent={data.strapiHome.AboutMeContent}
        mySkillsTitle={data.strapiHome.MySkillsTitle}
        aboutMeSkills={data.strapiHome.MySkills}
      />
      <div className={`section`}>
        <div className={`section__content`}>
          <div className={`lg:flex mt-16 mb-8`}>
            <div className={`lg:flex-1`}>
              <WorkHistory
                workHistoryTitle={data.strapiHome.WorkHistoryTitle}
                jobs={data.strapiHome.Job}
              />
            </div>
            <div className={`lg:flex-1 mt-16 lg:mt-0`}>
              <Blog
                blogTitle={data.strapiHome.BlogTitle}
                posts={data.strapiHome.Posts}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
