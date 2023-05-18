import PostCard from "./PostCard";
import { useContext } from "react";
import DataContext from "../context/DataContext";
import NewPost from "./NewPost";
import styles from "./Home.module.css";

const Home = () => {
  const { searchArray, fetchError, isLoading } = useContext(DataContext);

  return (
    <div className={`${styles.home}`}>
      <main className={styles.main}>
        <div className={`${styles["post-section"]} container`}>
          <h2 className={styles}>Latest Posts</h2>
          <div className={styles["post-grid"]}>
            {isLoading && <p>Loading posts...</p>}
            {!isLoading && fetchError && <p>{fetchError} </p>}
            {!isLoading &&
              !fetchError &&
              (searchArray.length ? (
                searchArray.map((post) => (
                  <PostCard key={post.id} post={post} />
                ))
              ) : (
                <p>No post to display</p>
              ))}
          </div>
        </div>
      </main>
      <aside>
        <NewPost />
      </aside>
    </div>
  );
};

export default Home;
