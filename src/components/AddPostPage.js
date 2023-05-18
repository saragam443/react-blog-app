import { useContext, useState } from "react";
import DataContext from "../context/DataContext";
import { useNavigate } from "react-router-dom";
import styles from "./AddPost.module.css";
import { v4 as uuid } from "uuid";

const AddPostPage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");

  const { posts, setPosts } = useContext(DataContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const addPost = {
      id: uuid(),
      title,
      content,
      category,
      createdAt: new Date(),
    };
    const allPosts = [...posts, addPost];
    setPosts(allPosts);
    setTitle("");
    setContent("");
    setCategory("");
    navigate("/");
  };

  return (
    <main>
      <div className={`${styles["add-post-section"]} container`}>
        <h2>Create New Post</h2>
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
    </main>
  );
};

export default AddPostPage;
