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
          Icon {
            publicURL,
          },
        },
        ProjectsTitle,
        AboutMeTitle,
        AboutMeContent,
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
          PostURL
        }
      },
    },
  `)

  return (
    <div className={`main-wrapper relative h-full py-6`}>
      <Header
        siteTitle={data.strapiHome.SiteTitle}
        siteSubtitle={data.strapiHome.SiteDescription}
        socialLinks={data.strapiHome.Links}
      />
      {children}
      <FeaturedProjects
        sectionTitle={data.strapiHome.ProjectsTitle}
      />
      <AboutMe
        aboutMeTitle={data.strapiHome.AboutMeTitle}
        aboutMeContent={data.strapiHome.AboutMeContent}
        aboutMeSkills={data.strapiHome.MySkills}
      />
      <WorkHistory
        workHistoryTitle={data.strapiHome.WorkHistoryTitle}
        jobs={data.strapiHome.Job}
      />
      <Blog
        blogTitle={data.strapiHome.BlogTitle}
        posts={data.strapiHome.Posts}
      />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
