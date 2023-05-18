import { useContext, useState } from "react";
import DataContext from "../context/DataContext";
import { useNavigate } from "react-router-dom";
import styles from "./NewPost.module.css";
import { v4 as uuid } from "uuid";

const NewPost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");

  const { posts, setPosts } = useContext(DataContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      id: uuid(),
      title,
      content,
      category,
      createdAt: new Date(),
    };
    const allPosts = [...posts, newPost];
    setPosts(allPosts);
    setTitle("");
    setContent("");
    setCategory("");
    navigate("/");
  };

  return (
    <div className={styles.newPost}>
      <h2>Create new post</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="title"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Post title"
        />
        <input
          type="text"
          id="postCategory"
          required
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Category"
        />
        <textarea
          id="postContent"
          required
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Content"
        ></textarea>
        <button className={styles.submitBtn} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default NewPost;
