import React from "react";
import { Link } from "react-router-dom";
import styles from "./PostCard.module.css";
import slugify from "slugify";

const PostCard = ({ post }) => {
  const dateObj = new Date(post.createdAt);
  const formattedDate = dateObj.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <article className={styles["post-card"]}>
      <Link to={`/post/${slugify(post.title, { lower: true })}`}>
        <h3>{post.title}</h3>
      </Link>
      <div className={styles["post-info"]}>
        <p>
          {formattedDate} - {post.category}
        </p>
      </div>
      <p className={styles["post-content"]}>
        {`${post.content.slice(0, 150)}..... `}
        <Link
          className={styles["view-more"]}
          to={`/post/${slugify(post.title, { lower: true })}`}
        >
          view more
        </Link>
      </p>
    </article>
  );
};

export default PostCard;
