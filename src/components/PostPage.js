import { Link, useParams } from "react-router-dom";
import { useContext } from "react";
import DataContext from "../context/DataContext";
import "./postPage.css";
import slugify from "slugify";
import { Helmet } from "react-helmet";

const PostPage = () => {
  const { posts, isLoading, fetchError } = useContext(DataContext);
  const { slug } = useParams();

  if (isLoading) {
    return (
      <main>
        <div>
          <p>Loading...</p>
        </div>
      </main>
    );
  }

  if (!isLoading && fetchError) {
    return (
      <main>
        <p>{fetchError} </p>
      </main>
    );
  }

  const post = posts.find(
    (post) => slugify(post.title, { lower: true }) === slug
  );

  if (!post) {
    return (
      <main>
        <div>
          <h2>Post not found </h2>
          <p>
            <Link to="/">Visit Home Page</Link>
          </p>
        </div>
      </main>
    );
  }

  const dateObj = new Date(post.createdAt);
  const formattedDate = dateObj.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const image = "https://miro.medium.com/max/812/1*1xhuVp8f2WFUGUByHS8VTg.png";

  return (
    <>
      <Helmet>
        <meta name="description" content="React Blog App" />
        <meta name="author" content="Saragam Subedi" />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="React Blog App" />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.content} />
        <meta property="og:image" content={image} />
      </Helmet>
      <main>
        <article className="container article-page">
          <div className="post-header">
            <h2 className="article-title">{post.title}</h2>
            <Link to={`/edit/${slugify(post.title, { lower: true })}`}>
              <button className="submit-btn">Edit post</button>
            </Link>
          </div>

          <div className="post-info">
            <p>
              {formattedDate} - {post.category}
            </p>
          </div>
          <p className="article-content">{post.content}</p>
        </article>
      </main>
    </>
  );
};

export default PostPage;
