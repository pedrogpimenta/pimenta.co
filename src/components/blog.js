import PropTypes from "prop-types"
import React from "react"

const Blog = ({ blogTitle, posts }) => (
  <section className={`section`}>
    <h1 className={`section__title`}>
      {blogTitle}
    </h1>
    <div className={`section__content`}>
      <ul>
        {posts.map(post => {
          return (
            <li key={post.id} className={`my-6 first:mt-2`}>
              <a
                className={`link`}
                href={post.PostURL}
                target={`_blank`}
              >
                <div className={`font-bold text-lg text-textPrimary dark:text-gray-100`}>
                  {post.PostTitle}
                </div>
                <div className={`text-textSecondary`}>
                  {post.PostDescription}
                </div>
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  </section>
)

Blog.propTypes = {
  blogTitle: PropTypes.string,
}

Blog.defaultProps = {
  blogTitle: ``,
}

export default Blog
