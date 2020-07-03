import PropTypes from "prop-types"
import React from "react"

const Blog = ({ blogTitle, posts }) => (
  <section className={`lg:ml-6`}>
    <h1 className={`leading-none font-semibold text-2xl text-black dark:text-white mb-6 sm:mb-8`}>
      {blogTitle}
    </h1>
    <ul>
      {posts.map(post => {
        return (
          <li key={post.id} className={`my-6 first:mt-2`}>
            <a
              className={`link`}
              href={post.PostURL}
              target={`_blank`}
            >
              <div className={`text font-bold text-lg dark:text-gray-100 text-textPrimary underline`}>
                {post.PostTitle}
              </div>
              <div className={`text text-textSecondary`}>
                {post.PostDescription}
              </div>
            </a>
          </li>
        )
      })}
    </ul>
  </section>
)

Blog.propTypes = {
  blogTitle: PropTypes.string,
}

Blog.defaultProps = {
  blogTitle: ``,
}

export default Blog
