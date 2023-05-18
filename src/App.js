import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./components/Home";
import About from "./components/About";
import PostPage from "./components/PostPage";
import AddPostPage from "./components/AddPostPage";
import Error from "./components/Error";
import EditPost from "./components/EditPost";
import { DataProvider } from "./context/DataContext";

const App = () => {
  return (
    <>
      <DataProvider>
        <Routes>
          <Route exact path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="add-post" element={<AddPostPage />} />
            <Route path="readme" element={<About />} />
            <Route path="post/:slug" element={<PostPage />} />

            <Route path="edit/:slug" element={<EditPost />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </DataProvider>
    </>
  );
};

export default App;
