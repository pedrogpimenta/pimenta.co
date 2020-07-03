import React from "react"
import { navigate, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ReactMarkdown from "react-markdown"

const handleMainClick = () => {
  navigate(`/`)
}

const ProjectTemplate = ({ data }) => (
  <Layout>
    <SEO title={data.strapiProjects.Title} />
    <main className={`
      absolute
      top-0
      left-0
      w-full
      h-full
    `}>
      <div className={`
          absolute
          top-0
          left-0
          w-full
          h-full
          z-10
        `}
        onClick={() => handleMainClick()}
        style={{backgroundColor: `rgba(0, 0, 0, .3)`}}
      ></div>
      <div className={`
          project-wrapper
          relative
          mt-32
          px-4 sm:px-8
          py-6 sm:py-8
          rounded-lg
          bg-white
          dark:bg-textPrimary
          z-20
        `}
        style={{boxShadow: `0px -10px 68px rgba(0, 0, 0, 0.28), 0px -1px 8px rgba(0, 0, 0, 0.08)`}}
       >
        <div>
          <img
            src={data.strapiProjects.FeaturedImage.publicURL}
            alt={`${data.strapiProjects.Title} logo`}
            className={`rounded-lg overflow-hidden`}
            style={{
              boxShadow: '0px 8px 18px rgba(0, 0, 0, 0.16), 0px 1px 4px rgba(0, 0, 0, 0.08)'
            }}
          />
        </div>
        <div>
        <h1 className={`
          text-textPrimary 
          dark:text-gray-100
          text-2xl
          font-semibold
          mt-4 sm:mt-0
        `}>
          {data.strapiProjects.Title}
        </h1>
        <div className={`
          text-textSecondary
        `}>
          {data.strapiProjects.Description}
        </div>
        {data.strapiProjects.ProjectLinks.length &&
          <div className={`
            my-4
          `}>
            <ul>
              {data.strapiProjects.ProjectLinks.map(link => {
                return (
                  <li
                    key={link.id}
                    className={`block py-1`}
                  >
                    <a
                      href={link.URL}
                      title={link.Text}
                      target={link.Target}
                      className={`link flex`}
                    >
                      <img
                        className={`icon-link`}
                        src={link.Icon.publicURL}
                        alt={link.Text}
                      />
                      <span
                        className={`
                          text
                          text-textPrimary
                          dark:text-gray-100
                          font-bold
                          ml-2
                        `}
                      >{link.Text}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
        }
        </div>
        <div className={`
          text-textPrimary 
          dark:text-gray-100
          mt-4
          sm:mt-0
          sm:row-start-2
          sm:row-span-1
          sm:col-start-2
          sm:col-span-1
        `}>
          <ReactMarkdown
            source={data.strapiProjects.Content}
          />
        </div>
        {data.strapiProjects.Images &&
          <div className={`
            sm:row-start-2
            sm:row-span-1
            sm:col-start-1
            sm:col-span-1
          `}>
            <ul>
              {data.strapiProjects.Images.map(image => {
                return (
                  <li key={image.id}>
                    <img src={image.url} alt={`Project screenshot`} />
                  </li>
                )
              })}
            </ul>
          </div>
        }
      </div>
    </main>
  </Layout>
)

export default ProjectTemplate

export const query = graphql`
  query ProjectTemplate($id: String!) {
    strapiProjects(id: { eq: $id }) {
      Title
      Description
      Content
      ProjectLinks {
        id
        Text
        URL
        Target
        Icon {
          publicURL
        }
      }
      FeaturedImage {
        publicURL
      }
      Images {
        url
      }
    }
  }
`