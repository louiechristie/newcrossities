import React from "react"
import { Link } from "gatsby"
import PostMeta from "./PostMeta"
import PostCategories from "./PostCategories"
import FeaturedMedia from "./FeaturedMedia"

const PostPreview = ({ post, isLast }) => {
  return (
    <>
      <article
        className={`post-${post.databaseId} post type-post status-publish format-standard has-post-thumbnail hentry category-uncategorized`}
        id={`post-${post.databaseId}`}
      >
        <header className="entry-header has-text-align-center">
          <div className="entry-header-inner section-inner medium">
            <PostCategories categories={post.categories} />

            <h2 className="entry-title heading-size-1">
              <Link
                to={post.uri}
                dangerouslySetInnerHTML={{ __html: post.title }}
              />
            </h2>

            <PostMeta
              title={post.title}
              author={post.author}
              date={post.date}
            />
          </div>
        </header>

        <Link to={post.uri}>
          <FeaturedMedia image={post.featuredImage} />
        </Link>

        <div className="post-inner thin ">
          <div className="entry-content">
            <div dangerouslySetInnerHTML={{ __html: post.excerpt }} />
          </div>
        </div>
      </article>

      <div class="wp-block-button has-text-align-center">
        <Link className="wp-block-button__link" to={post.uri}>
          Continue reading
        </Link>
      </div>

      {!isLast && (
        <hr
          key={post.postId + "-hr"}
          className="post-separator styled-separator is-style-wide section-inner"
          aria-hidden="true"
        />
      )}
    </>
  )
}

export default PostPreview
