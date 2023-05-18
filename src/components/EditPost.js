import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import DataContext from "../context/DataContext";
import { useNavigate } from "react-router-dom";
import slugify from "slugify";
import styles from "./EditPost.module.css";

const EditPost = () => {
  const { posts, setPosts, fetchError, isLoading } = useContext(DataContext);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");

  const { slug } = useParams();
  const navigate = useNavigate();

  const post = posts.find(
    (post) => slugify(post.title, { lower: true }) === slug
  );
  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setContent(post.content);
      setCategory(post.category);
    }
  }, [post]);

  const handleEdit = (e, id) => {
    e.preventDefault();

    const newPost = { id, title, content, category, createdAt: post.createdAt };
    setPosts(posts.map((post) => (post.id === id ? { ...newPost } : post)));
    setTitle("");
    setContent("");
    setCategory("");
    navigate("/");
  };

  const handleDelete = (id) => {
    const postList = posts.filter((post) => post.id.toString() !== id);
    setPosts(postList);
    navigate("/");
  };

  return (
    <main className="container">
      {isLoading && <p>Loading posts...</p>}
      {!isLoading && fetchError && <p>{fetchError} </p>}
      {!isLoading &&
        !fetchError &&
        (posts.length ? (
          <div className={styles["edit-page"]}>
            <h2>Edit Post</h2>
            <form>
              <label htmlFor="title">Post title:</label>
              <input
                type="text"
                id="title"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <label htmlFor="category">Category:</label>
              <input
                type="text"
                id="category"
                required
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
              <label htmlFor="content">Content:</label>
              <textarea
                id="content"
                required
                value={content}
                onChange={(e) => setContent(e.target.value)}
                cols="30"
                rows="10"
              ></textarea>
              <div className={styles.btns}>
                <button
                  className="submit-btn"
                  type="submit"
                  onClick={(e) => handleEdit(e, post.id)}
                >
                  Submit
                </button>
                <button
                  className="delete-btn"
                  onClick={() => handleDelete(post.id)}
                >
                  Delete post
                </button>
              </div>
            </form>
          </div>
        ) : (
          <p>No post to display</p>
        ))}
    </main>
  );
};

export default EditPost;
